import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MessagesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.subtitle}>Chat with your connections and skill partners.</Text>

      {/* Example conversation cards */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Ahmed Khan</Text>
        <Text style={styles.cardText}>“Hey! Can we schedule our guitar session for tomorrow?”</Text>
        <Text style={styles.time}>2m ago</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Maria Ali</Text>
        <Text style={styles.cardText}>“I just uploaded my photography samples 😄”</Text>
        <Text style={styles.time}>15m ago</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>John Doe</Text>
        <Text style={styles.cardText}>“Let's finalize our project plan this weekend.”</Text>
        <Text style={styles.time}>1h ago</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Sara Ahmed</Text>
        <Text style={styles.cardText}>“Loved your logo design, thanks for the quick work!”</Text>
        <Text style={styles.time}>3h ago</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#007AFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  time: {
    fontSize: 12,
    color: "#999",
    textAlign: "right",
  },
});
