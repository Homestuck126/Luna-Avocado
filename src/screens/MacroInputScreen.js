import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { v4 as uuidv4 } from "uuid";

import MacroBars from "../components/MacroBars";
import FoodListItem from "../components/FoodListItem";
import FoodItemModal from "../components/FoodItemModal";

import SetFoodGoalsModal from "../components/SetFoodGoalsModal";

import LogFoodModal from "../components/LogFoodModal";

const IPADDR = process.env.EXPO_PUBLIC_IPADDR;
const apiUrls = "http://" + IPADDR + ":3000/users";
const MacroInputScreen = () => {
  const [foodItemModalSelectedFood, setFoodItemModalSelectedFood] =
    useState(null);
  const [foodItemModalVisible, setFoodItemModalVisible] = useState(false);
  const [foodGoalsModalVisible, setFoodGoalsModalVisible] = useState(false);
  const [logFoodModalVisible, setLogFoodModalVisible] = useState(false);
  const [macrosData, setMacrosData] = useState({
    calories: 0,
    protein: 0,
    carbohydrate: 0,
    fats: 0,
    calorieGoal: 2000,
    proteinGoal: 150,
    carbGoal: 200,
    fatsGoal: 50,
  });

  const [foodItems, setFoodItems] = useState([]);

  const getMacroGoalsData = () => {
    return Object.keys(macrosData)
      .slice(-4)
      .map((property) => macrosData[property]);
  };

  const updateMacroGoals = (newGoalsArray) => {
    setMacrosData((prevData) => {
      const newData = { ...prevData };
      const goalsToUpdate = Object.keys(newData).slice(-4);
      goalsToUpdate.forEach((property, index) => {
        newData[property] = newGoalsArray[index];
      });
      //console.log("new data after updateMacroGoals() called from MacroInputScreen: ");
      //console.log(newData);
      return newData;
    });
  };

  const updateMacrosData = (newFoodList) => {
    const updatedMacrosData = newFoodList.reduce(
      (acc, foodItem) => {
        acc.calories += foodItem.macros[0];
        acc.protein += foodItem.macros[1];
        acc.carbohydrate += foodItem.macros[2];
        acc.fats += foodItem.macros[3];
        return acc;
      },
      {
        calories: 0,
        protein: 0,
        carbohydrate: 0,
        fats: 0,
      }
    );

    setMacrosData((prevData) => ({
      ...prevData,
      calories: updatedMacrosData.calories,
      protein: updatedMacrosData.protein,
      carbohydrate: updatedMacrosData.carbohydrate,
      fats: updatedMacrosData.fats,
    }));
  };

  const addFood = (item) => {
    setFoodItems((prevData) => {
      const newFood = {
        ...item,
        id: foodItems.length + 1,
      };

      const newData = [...prevData, newFood];
      console.log("new food Item: ", newData);
      updateMacrosData(newData);
      return newData;
    });
  };

  return (
    <View style={styles.container}>
      {/* Modals/Popups */}
      <FoodItemModal
        isVisible={foodItemModalVisible}
        onClose={() => setFoodItemModalVisible(false)}
        foodData={foodItemModalSelectedFood}
      ></FoodItemModal>

      <SetFoodGoalsModal
        isVisible={foodGoalsModalVisible}
        onClose={() => setFoodGoalsModalVisible(false)}
        goalsData={getMacroGoalsData}
        updateMacroGoals={updateMacroGoals}
      ></SetFoodGoalsModal>

      <LogFoodModal
        isVisible={logFoodModalVisible}
        onClose={() => {
          setLogFoodModalVisible(false);
        }}
        addFood={addFood}
      ></LogFoodModal>

      {/* Macros top 1/4 screen */}

      <Text style={styles.header}>Today's Progress</Text>
      <MacroBars data={macrosData}></MacroBars>
      {/* ScrollView bottom 3/4 */}
      <ScrollView
        style={styles.bottomView}
        showsVerticalScrollIndicator={true}
        indicatorStyle="black"
        scrollIndicatorInsets={{ right: 1 }}
      >
        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <Text style={styles.header}>Actions</Text>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? "rgba(52,152,219,0.7)"
                  : "rgb(52,152,219)",
              },
              styles.button,
            ]}
            onPress={() => {
              setLogFoodModalVisible(true);
              console.log("food list on open modal: ", foodItems);
            }}
          >
            <Text style={styles.buttonText}>Log Food</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? "rgba(52,152,219,0.7)"
                  : "rgb(52,152,219)",
              },
              styles.button,
            ]}
            onPress={() => {
              setFoodGoalsModalVisible(true);
            }}
          >
            <Text style={styles.buttonText}>Set Goals</Text>
          </Pressable>
        </View>
        {/* Food Log */}
        <View style={styles.foodLogContainer}>
          <Text style={styles.header}>Food Log</Text>
          <Text style={styles.subText}>Tap items to view/edit</Text>
          {foodItems.map((food) => (
            <FoodListItem
              key={food.id}
              data={food}
              onPress={() => {
                setFoodItemModalVisible(true);
                setFoodItemModalSelectedFood(food);
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "vertical",
    alignItems: "center",
  },
  bottomView: {
    height: "75%",
    width: "100%",
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 5,
    borderBottomColor: "black",
    paddingBottom: 30,
  },
  foodLogContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 40,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    width: "70%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  subText: {
    fontSize: 12,
    marginLeft: 12,
    marginTop: 10,
    alignSelf: "flex-start",
    fontWeight: "bold",
    color: "#696969",
  },
});
export default MacroInputScreen;
