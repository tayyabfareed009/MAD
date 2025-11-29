import { ScrollView, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export default function HomeScreen() {
  const posts = [
    { title: "Free UX Design Workshop", desc: "Swap, Learn, Grow" },
    { title: "Photography Basics", desc: "Community Session" },
    { title: "Mobile App Development", desc: "UI, Backend, API Integration" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Explore Skills</Text>
      {posts.map((item, i) => (
        <Card key={i} style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.desc}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F4F6F8" },
  pageTitle: { fontSize: 22, fontWeight: "bold", color: "#1E88E5", marginBottom: 12, textAlign: "center" },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 16, marginVertical: 8 },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  cardSubtitle: { fontSize: 14, color: "#616161" },
});
