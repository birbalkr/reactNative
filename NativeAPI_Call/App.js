import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getALlUser();
  }, []);

  const getALlUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const allUser = await res.json();
    setusers(allUser);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>DIRECTORY</Text>
            <Text style={styles.title}>Our users</Text>
            <Text style={styles.subtitle}>Connect with your community</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },
  listContent: {
    padding: 20,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 22,
  },
  eyebrow: {
    color: "#6476f4",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  title: {
    color: "#172033",
    fontSize: 32,
    fontWeight: "800",
  },
  subtitle: {
    color: "#7b8498",
    fontSize: 15,
    marginTop: 6,
  },
  card: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    flexDirection: "row",
    marginBottom: 12,
    padding: 16,
    shadowColor: "#1c274c",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#e9ecff",
    borderRadius: 26,
    height: 52,
    justifyContent: "center",
    width: 52,
  },
  avatarText: {
    color: "#5969df",
    fontSize: 21,
    fontWeight: "800",
  },
  details: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    color: "#20283a",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
  },
  email: {
    color: "#8790a3",
    fontSize: 13,
  },
});
