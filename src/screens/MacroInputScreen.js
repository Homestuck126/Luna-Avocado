import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";
import MacroBars from "../components/MacroBars";
import FoodListItem from "../components/FoodListItem";
import FoodItemModal from "../components/FoodItemModal";

const MacroInputScreen = () => {
  const [foodItemModalVisible, setFoodItemModalVisible] = useState(false);
  const [logFoodModalVisible, logFoodItemModalVisible] = useState(false);
  const foodItems = [
    {
      id: 1,
      name: "chicken",
      macros: [200, 25, 15, 20], //[protein, carbs, fats]
    },
    {
      id: 2,
      name: "beef",
      macros: [300, 30, 8, 18], //[protein, carbs, fats]
    },
    {
      id: 3,
      name: "pork",
      macros: [350, 13, 12, 15], //[protein, carbs, fats]
    },
    {
      id: 4,
      name: "banana",
      macros: [70, 2, 0, 0], //[protein, carbs, fats]
    },
  ];

  return (
    <View style={styles.container}>
      {/* Modals/Popups */}
      <FoodItemModal
        isVisible={foodItemModalVisible}
        onClose={() => setFoodItemModalVisible(false)}
      ></FoodItemModal>

      {/* Macros top 1/4 screen */}
      <Text style={styles.header}>Today's Progress</Text>
      <MacroBars></MacroBars>
      {/* ScrollView bottom 3/4 */}
      <ScrollView
        style={styles.bottomView}
        showsVerticalScrollIndicator={true}
        indicatorStyle="black"
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
              onPress={() => setFoodItemModalVisible(true)}
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
