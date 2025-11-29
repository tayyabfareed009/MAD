import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Malik Tayyab Fareed</Text>
        <Text style={styles.username}>@tayyab_fareed</Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          Passionate about software engineering, skilled in Java, React Native, and MySQL.
          Always eager to collaborate and learn new technologies.
        </Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Skills</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>💻 Java</Text>
          <Text style={styles.skill}>🧠 MySQL</Text>
          <Text style={styles.skill}>⚛️ React Native</Text>
          <Text style={styles.skill}>🗄️ Express.js</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.logoutText}>Logout</Text>
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
  profileHeader: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
  },
  username: {
    fontSize: 16,
    color: "#888",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  sectionText: {
    fontSize: 14,
    color: "#555",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skill: {
    backgroundColor: "#007AFF",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#f2f2f2",
  },
  logoutText: {
    color: "#ff3b30",
    fontWeight: "600",
    fontSize: 16,
  },
});
