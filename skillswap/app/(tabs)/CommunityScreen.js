import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CommunityScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Community</Text>

      <Text style={styles.subtitle}>
        Connect and share skills with others in your community!
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💡 Coding Group</Text>
        <Text style={styles.cardText}>
          Join our weekly coding discussions and project collaborations.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Group</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎨 Art Exchange</Text>
        <Text style={styles.cardText}>
          Artists sharing techniques and feedback on each other's work.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Group</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🗣️ Language Learners</Text>
        <Text style={styles.cardText}>
          Improve your language skills by chatting with native speakers.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Group</Text>
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
    marginBottom: 10,
    textAlign: "center",
    color: "#007AFF",
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
