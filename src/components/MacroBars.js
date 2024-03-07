import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

const MacroBars = ({ data }) => {
  return (
    <View style={styles.allMacrosContainer}>
      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Calories: {data.calories} / {data.calorieGoal}
        </Text>
        <Progress.Bar
          progress={data.calories / Math.max(data.calorieGoal, data.calories)}
          height={10}
          width={null}
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Protein: {data.protein}g / {data.proteinGoal}g
        </Text>
        <Progress.Bar
          progress={data.protein / Math.max(data.protein, data.proteinGoal)}
          height={10}
          width={null}
          color="#FA8072"
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Carbohydrates: {data.carbohydrate}g / {data.carbGoal}g
        </Text>
        <Progress.Bar
          progress={
            data.carbohydrate / Math.max(data.carbohydrate, data.carbGoal)
          }
          height={10}
          width={null}
          color="#3CB371"
        ></Progress.Bar>
      </View>

      <View style={styles.macroContainer}>
        <Text style={styles.macroText}>
          Fats: {data.fats}g / {data.fatsGoal}g
        </Text>
        <Progress.Bar
          progress={data.fats / Math.max(data.fats, data.fatsGoal)}
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
