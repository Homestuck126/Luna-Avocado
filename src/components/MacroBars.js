import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

const MacroBars = ({ data }) => {
  const [macroData, setMacroData] = useState(data);
  useEffect(() => {
    setMacroData(data);
  }, [data]);
  return (
    <View style={styles.allMacrosContainer}>
      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Calories: {macroData.calories} / {macroData.calorieGoal}
        </Text>
        <Progress.Bar
          progress={
            macroData.calories /
            Math.max(macroData.calorieGoal, macroData.calories)
          }
          height={10}
          width={null}
          testID="MacroBars:ProgressBar:Calories"
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Protein: {macroData.protein}g / {macroData.proteinGoal}g
        </Text>
        <Progress.Bar
          progress={
            macroData.protein /
            Math.max(macroData.protein, macroData.proteinGoal)
          }
          height={10}
          width={null}
          color="#FA8072"
          testID="MacroBars:ProgressBar:Protein"
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Carbohydrates: {macroData.carbohydrate}g / {macroData.carbGoal}g
        </Text>
        <Progress.Bar
          progress={
            macroData.carbohydrate /
            Math.max(macroData.carbohydrate, macroData.carbGoal)
          }
          height={10}
          width={null}
          color="#3CB371"
          testID="MacroBars:ProgressBar:Carbs"
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Fats: {macroData.fats}g / {macroData.fatsGoal}g
        </Text>
        <Progress.Bar
          progress={
            macroData.fats / Math.max(macroData.fats, macroData.fatsGoal)
          }
          height={10}
          width={null}
          color="#FFD700"
          testID="MacroBars:ProgressBar:Fats"
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
