import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SwapsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Skill Swaps</Text>
      <Text style={styles.subtitle}>
        Exchange your skills or services with others in your community.
      </Text>

      {/* Example swap cards */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎸 Guitar Lessons ↔ Cooking Tips</Text>
        <Text style={styles.cardText}>
          Ahmed offers beginner guitar lessons and wants to learn how to cook Italian food.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Offer Swap</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💻 Web Design ↔ Photography</Text>
        <Text style={styles.cardText}>
          Maria can help you build a portfolio website if you can teach her portrait photography.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Offer Swap</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🗣️ English Practice ↔ Urdu Practice</Text>
        <Text style={styles.cardText}>
          Two language learners looking to help each other improve speaking skills.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Offer Swap</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
