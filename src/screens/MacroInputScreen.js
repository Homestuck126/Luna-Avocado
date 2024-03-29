import React, { useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";

import MacroBars from "../components/MacroBars";
import FoodListItem from "../components/FoodListItem";
import FoodItemModal from "../components/FoodItemModal";

import SetFoodGoalsModal from "../components/SetFoodGoalsModal";
import LogFoodModal from "../components/LogFoodModal";
import { useAuth } from "../contexts/Auth.js";

//import LoginScreen from "./LoginScreen";

const MacroInputScreen = () => {
  const { userContext, setUserContext } = useAuth()
  const IPADDR = process.env.EXPO_PUBLIC_IPADDR;
  const apiUrls = "http://" + IPADDR + ":3000/users";

  const [foodItemModalSelectedFood, setFoodItemModalSelectedFood] =
    useState(null);
  const [foodItemModalVisible, setFoodItemModalVisible] = useState(false);
  const [foodGoalsModalVisible, setFoodGoalsModalVisible] = useState(false);
  const [logFoodModalVisible, setLogFoodModalVisible] = useState(false);
  const [macrosData, setMacrosData] = useState({
    calories: userContext.calories,
    protein: userContext.protein,
    carbohydrate: userContext.carbohydrate,
    fats: userContext.fats,
    calorieGoal: userContext.calorieGoal,
    proteinGoal: userContext.proteinGoal,
    carbGoal: userContext.carbGoal,
    fatsGoal: userContext.fatsGoal,
  });
  const [foodItems, setFoodItems] = useState(userContext.FoodItems);

  const getMacroGoalsData = () => {
    return Object.keys(macrosData)
      .slice(-4)
      .map((property) => macrosData[property]);
  };
  const updateMacroGoals = (newGoalsArray) => {
    const _username = userContext.username;
    setMacrosData((prevData) => {
      const newData = { ...prevData };
      const goalsToUpdate = Object.keys(newData).slice(-4);
      goalsToUpdate.forEach((property, index) => {
        newData[property] = newGoalsArray[index];
      });
      axios
        .patch(`http://${IPADDR}:3000/users/${_username}`, {
          $set: {
            calorieGoal: newGoalsArray[0],
            proteinGoal: newGoalsArray[1],
            carbGoal: newGoalsArray[2],
            fatsGoal: newGoalsArray[3],
          },
        })
        .then((response) => {
          Alert.alert("Macros Update Successful");
          console.log("Macros data updated successfully:", response.data);
        })
        .catch((error) => {
          Alert.alert(
            "Macros Update Failed",
            "An error occurred during macros goals update"
          );
          console.log("update failed", error);
        });
      
             // Update local userContext
    const updatedUserContext = {
      ...userContext,
      proteinGoal: newGoalsArray[1],
      carbGoal: newGoalsArray[2],
      fatsGoal: newGoalsArray[3],
      calorieGoal: newGoalsArray[0]
    };

    // Update userContext using the setUserContext function
    setUserContext(updatedUserContext)
    console.log("updatedUserContext");
    console.log(userContext);

      //console.log("new data after updateMacroGoals() called from MacroInputScreen: ");
      //console.log(newData);
      return newData;
    });

  };

  const updateMacrosData = (newFoodList) => {
    const _username = userContext.username;
    console.log("newFoodList");
    console.log(newFoodList);
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
    console.log("newFoodList");
    console.log(newFoodList);

    setMacrosData((prevData) => ({
      ...prevData,
      calories: updatedMacrosData.calories,
      protein: updatedMacrosData.protein,
      carbohydrate: updatedMacrosData.carbohydrate,
      fats: updatedMacrosData.fats,
    }));

    console.log(_username);
    //const macroFoodCombined = macrosData.concat(foodItems);
    foodInfo = newFoodList[newFoodList.length -1].macros;
    foodName = newFoodList[newFoodList.length -1].name;
    console.log("foodInfo");
    console.log(foodInfo);

    axios
      .patch(`http://${IPADDR}:3000/users/${_username}`, {
        $inc: {
          protein: foodInfo[1],
          carbohydrate: foodInfo[2],
          fats: foodInfo[3],
          calories: foodInfo[0],
        },
      })
      .then((response) => {
        Alert.alert("Macros Update Successful");
        console.log("Macros data updated successfully:", response.data);
      })
      .catch((error) => {
        Alert.alert(
          "Macros Update Failed",
          "An error occurred during macros goals update"
        );
        console.log("update failed", error);
      });
    axios
      .patch(`http://${IPADDR}:3000/users/${_username}`, {
        $set: {
          FoodItems: newFoodList,
        },
      })
      .then((response) => {
        Alert.alert("Macros Update Successful");
        console.log("Macros data updated successfully:", response.data);
      })
      .catch((error) => {
        Alert.alert(
          "Macros Update Failed",
          "An error occurred during macros goals update"
        );
        console.log("update failed", error);
      });

       // Update local userContext
    const updatedUserContext = {
      ...userContext,
      protein: userContext.protein + foodInfo[1],
      carbohydrate: userContext.carbohydrate+ foodInfo[2],
      fats: userContext.fats + foodInfo[3],
      calories: userContext.calories+ foodInfo[0],
      FoodItems: newFoodList
    };

    // Update userContext using the setUserContext function
    setUserContext(updatedUserContext)
  };

  const addFood = (item) => {
    //console.log("prevData");
    //console.log(prevData);

    setFoodItems((prevData) => {
      const newFood = {
        ...item,
        id: foodItems.length + 1,
      };

      const newData = [...prevData, newFood];
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
