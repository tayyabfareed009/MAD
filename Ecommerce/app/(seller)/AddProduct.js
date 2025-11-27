import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddProduct({ route, navigation }) {
  const editProduct = route?.params?.editProduct;

  const [product, setProduct] = useState(
    editProduct || {
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image_url: "",
    }
  );

  const localImages = {
    horse: require("../../assets/images/horse.jpg"),
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.7,
      });
      if (!result.canceled) {
        setProduct({ ...product, image_url: result.assets[0].uri });
      }
    } catch (error) {
      console.log("❌ Error picking image:", error);
    }
  };

  const handleSelectLocalImage = (name) => {
    setProduct({ ...product, image_url: name });
  };

  const handleSubmit = async () => {
    if (!product.name || !product.price || !product.category) {
      Alert.alert("⚠️ Missing fields", "Please fill in all required fields.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        Alert.alert("Unauthorized", "Please log in first.");
        return;
      }

      const baseUrl = "http://localhost:5000";
      const endpoint = editProduct
        ? `${baseUrl}/update-product/${editProduct.id}`
        : `${baseUrl}/add-product`;
      const method = editProduct ? "PUT" : "POST";

      console.log("📤 Sending product:", product);

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });

      const text = await response.text();
      console.log("📥 Server response:", text);

      if (!response.ok) throw new Error(text || "Failed to save product");

      Alert.alert(
        "✅ Success",
        editProduct
          ? "Product updated successfully!"
          : "Product added successfully!"
      );
      navigation.goBack();
    } catch (error) {
      console.log("❌ Error adding product:", error);
      Alert.alert("Error", "Failed to save product. Please try again.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        {editProduct ? "✏️ Edit Product" : "➕ Add Product"}
      </Text>

      {/* Built-in app images */}
      <View style={styles.localImagesContainer}>
        {Object.keys(localImages).map((key) => (
          <TouchableOpacity
            key={key}
            onPress={() => handleSelectLocalImage(key)}
            style={[
              styles.localImageBox,
              product.image_url === key && {
                borderColor: "#007BFF",
                borderWidth: 2,
                shadowColor: "#007BFF",
                shadowOpacity: 0.4,
              },
            ]}
          >
            <Image source={localImages[key]} style={styles.localImage} />
            <Text style={styles.localLabel}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pick from gallery */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {product.image_url && localImages[product.image_url] ? (
          <Image source={localImages[product.image_url]} style={styles.image} />
        ) : product.image_url ? (
          <Image source={{ uri: product.image_url }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>📸 Pick from Gallery</Text>
        )}
      </TouchableOpacity>

      {/* Inputs */}
      {["name", "description", "price", "category", "stock"].map((key) => (
        <TextInput
          key={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={String(product[key])}
          onChangeText={(text) => setProduct({ ...product, [key]: text })}
          style={styles.input}
          keyboardType={key === "price" || key === "stock" ? "numeric" : "default"}
          placeholderTextColor="#888"
        />
      ))}

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>
          {editProduct ? "Update Product" : "Add Product"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9ff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 25,
    color: "#007BFF",
    letterSpacing: 0.5,
  },
  localImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  localImageBox: {
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  localImage: { width: 70, height: 70, borderRadius: 10 },
  localLabel: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  imagePicker: {
    alignSelf: "center",
    borderRadius: 15,
    width: 180,
    height: 180,
    backgroundColor: "#fff",
    borderColor: "#007BFF33",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    elevation: 4,
    shadowColor: "#007BFF",
    shadowOpacity: 0.1,
  },
  image: { width: "100%", height: "100%", borderRadius: 15 },
  imageText: { color: "#007BFF", fontWeight: "600" },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    fontSize: 16,
    elevation: 2,
  },
  btn: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#007BFF",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
