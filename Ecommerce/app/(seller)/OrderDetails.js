import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function OrderDetails({ route, navigation }) {
const { orderId } = route.params;
const [order, setOrder] = useState(null);
const [loading, setLoading] = useState(false);

// ✅ Base URL (update according to your setup)
const BASE_URL ="http://localhost:5000";

// ✅ Fetch specific order details
const fetchOrderDetails = async () => {
try {
setLoading(true);
const token = await AsyncStorage.getItem("token");
if (!token) {
Alert.alert("Error", "Authentication required");
return;
}

  const res = await fetch(`${BASE_URL}/order/${orderId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  if (res.ok) {
    setOrder(data);
  } else {
    Alert.alert("Error", data.message || "Failed to load order");
  }
} catch (err) {
  console.log("Error fetching order:", err);
  Alert.alert("Error", "Something went wrong");
} finally {
  setLoading(false);
}


};

// ✅ Update order status (Delivered / Pending)
const updateOrderStatus = async (newStatus) => {
try {
const token = await AsyncStorage.getItem("token");
if (!token) {
Alert.alert("Error", "Authentication required");
return;
}

  const res = await fetch(`${BASE_URL}/update-order/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: newStatus }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to update order");

  Alert.alert("✅ Success", `Order marked as ${newStatus}`);
  fetchOrderDetails(); // refresh data
} catch (err) {
  console.log("Error updating order:", err);
  Alert.alert("❌ Error", err.message || "Could not update order");
}


};

useEffect(() => {
fetchOrderDetails();
}, []);

if (loading || !order) {
return (
<View style={styles.centered}>
<ActivityIndicator size="large" color="#007BFF" />
<Text>Loading order details...</Text>
</View>
);
}

return (
<ScrollView style={styles.container}>
<Text style={styles.header}>📦 Order Details</Text>

  <View style={styles.section}>
    <Text style={styles.label}>Order ID:</Text>
    <Text style={styles.value}>{order.id}</Text>

    <Text style={styles.label}>Customer:</Text>
    <Text style={styles.value}>{order.customer_name}</Text>

    <Text style={styles.label}>Address:</Text>
    <Text style={styles.value}>{order.address || "N/A"}</Text>

    <Text style={styles.label}>Total Amount:</Text>
    <Text style={styles.value}>
      ${Number(order.total_amount || 0).toFixed(2)}
    </Text>

    <Text style={styles.label}>Status:</Text>
    <Text
      style={[
        styles.value,
        styles.status,
        {
          color:
            order.status === "Delivered"
              ? "#00B894"
              : order.status === "Pending"
              ? "#FFA500"
              : "#FF3B30",
        },
      ]}
    >
      {order.status}
    </Text>
  </View>

  <Text style={styles.subHeader}>🛍️ Ordered Products</Text>
  {order.items && order.items.length > 0 ? (
    order.items.map((item) => (
      <View key={item.product_id} style={styles.itemCard}>
        <Text style={styles.itemText}>
          Product: {item.product_name}
        </Text>
        <Text style={styles.itemText}>Qty: {item.quantity}</Text>
        <Text style={styles.itemText}>
          Price: ${Number(item.price || 0).toFixed(2)}
        </Text>
      </View>
    ))
  ) : (
    <Text style={styles.emptyText}>No products found in this order.</Text>
  )}

  {/* ✅ Action Buttons */}
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#00B894" }]}
      onPress={() => updateOrderStatus("Delivered")}
    >
      <Text style={styles.buttonText}>Mark as Delivered</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#FFA500" }]}
      onPress={() => updateOrderStatus("Pending")}
    >
      <Text style={styles.buttonText}>Mark as Pending</Text>
    </TouchableOpacity>
  </View>
</ScrollView>


);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: "#F8FAFF", padding: 20 },
centered: { flex: 1, alignItems: "center", justifyContent: "center" },
header: {
fontSize: 24,
fontWeight: "800",
color: "#007BFF",
textAlign: "center",
marginBottom: 20,
},
section: {
backgroundColor: "#fff",
padding: 15,
borderRadius: 12,
elevation: 2,
marginBottom: 15,
},
label: { fontSize: 16, fontWeight: "600", color: "#444" },
value: { fontSize: 16, color: "#333", marginBottom: 8 },
status: { fontWeight: "bold" },
subHeader: {
fontSize: 18,
fontWeight: "700",
color: "#333",
marginBottom: 10,
},
itemCard: {
backgroundColor: "#fff",
padding: 12,
borderRadius: 10,
marginBottom: 10,
elevation: 2,
},
itemText: { fontSize: 15, color: "#444" },
buttonContainer: {
flexDirection: "row",
justifyContent: "space-around",
marginTop: 20,
},
button: {
paddingVertical: 12,
paddingHorizontal: 20,
borderRadius: 10,
},
buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
emptyText: { textAlign: "center", color: "#777", fontStyle: "italic" },
});