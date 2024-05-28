import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://via.placeholder.com/150",
          }}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailText}>Email: johndoe@example.com</Text>
        <Text style={styles.detailText}>Phone: +1 234 567 890</Text>
        <Text style={styles.detailText}>
          Address: 123 Main St, City, Country
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  details: {
    width: "100%",
    paddingHorizontal: 24,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
