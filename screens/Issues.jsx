import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const issues = [
  { id: "1", title: "Issue 1", description: "Description of issue 1" },
  { id: "2", title: "Issue 2", description: "Description of issue 2" },
  { id: "3", title: "Issue 3", description: "Description of issue 3" },
  { id: "4", title: "Issue 4", description: "Description of issue 4" },
 
];

const IssueItem = ({ title, description }) => (
  <View style={styles.issueItem}>
    <Text style={styles.issueTitle}>{title}</Text>
    <Text style={styles.issueDescription}>{description}</Text>
  </View>
);

const Issues = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={issues}
        renderItem={({ item }) => (
          <IssueItem title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Issues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  issueItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  issueTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  issueDescription: {
    fontSize: 14,
    color: "#6c757d",
  },
});
