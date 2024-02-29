import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const FoodListItem = ({ data, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress(data)}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.macros}>Calories: {data.macros[0]}</Text>
      <Text style={styles.macros}>Protein: {data.macros[1]}</Text>
      <Text style={styles.macros}>Carbs: {data.macros[2]}</Text>
      <Text style={styles.macros}>Fat: {data.macros[3]}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "95%",
    alignItems: "flex-start",
    backgroundColor: "#f8f8ff",
    borderColor: "#C0C0C0",
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  macros: {
    fontSize: 14,
    color: "#666",
  },
});

export default FoodListItem;
