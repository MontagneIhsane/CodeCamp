import { View, Text, StyleSheet } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analyse des Dénonciations</Text>
      <Text style={styles.text}>📌 Nombre total : 120</Text>
      <Text style={styles.text}>📌 Fraude : 50</Text>
      <Text style={styles.text}>📌 Pollution : 30</Text>
      <Text style={styles.text}>📌 Autres : 40</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginVertical: 5 },
});