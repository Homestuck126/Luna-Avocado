import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const FoodListItem = ({ data, onPress }) => {
  return (
    <Pressable
      onPress={() => onPress(data)}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? "rgba(220,220,230,.3)"
            : "rgb(248,248,255)",
        },
        styles.container,
      ]}
    >
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
