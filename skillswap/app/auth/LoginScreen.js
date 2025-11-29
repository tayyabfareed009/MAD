import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SkillSwap</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("MainTabs")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.link}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F4F6F8", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#1E88E5", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 12, padding: 12, marginVertical: 8, width: "100%", backgroundColor: "#fff" },
  button: { backgroundColor: "#1E88E5", padding: 14, borderRadius: 12, alignItems: "center", width: "100%", marginTop: 10 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  link: { color: "#F4511E", marginTop: 12, fontWeight: "500" },
});
