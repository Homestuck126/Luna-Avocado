import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

const MacroBars = () => {
  const [macrosData, setMacrosData] = useState({
    calories: 1200,
    protein: 100,
    carbohydrate: 120,
    fats: 12,
  });
  const [macroGoalsData, setMacroGoalsData] = useState({
    calorieGoal: 2000,
    proteinGoal: 150,
    carbGoal: 200,
    fatsGoal: 50,
  });
  return (
    <View style={styles.allMacrosContainer}>
      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>Calories: {macrosData.calories}</Text>
        <Progress.Bar
          progress={macrosData.calories / macroGoalsData.calorieGoal}
          height={10}
          width={null}
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>Protein: {macrosData.protein}g</Text>
        <Progress.Bar
          progress={macrosData.protein / macroGoalsData.proteinGoal}
          height={10}
          width={null}
          color="#FA8072"
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Carbohydrates: {macrosData.carbohydrate}g
        </Text>
        <Progress.Bar
          progress={macrosData.carbohydrate / macroGoalsData.carbGoal}
          height={10}
          width={null}
          color="#3CB371"
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>Fats: {macrosData.fats}g</Text>
        <Progress.Bar
          progress={macrosData.fats / macroGoalsData.fatsGoal}
          height={10}
          width={null}
          color="#FFD700"
        ></Progress.Bar>
      </View>
    </View>
  );
};

export default MacroBars;

const styles = StyleSheet.create({
  allMacrosContainer: {
    height: "25%",
    width: "100%",
    borderBottomWidth: 5,
    borderBottomColor: "black",
    padding: 20,
  },
  macroContainer: {
    flex: 1,
    width: "100%",
  },
  macroText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
