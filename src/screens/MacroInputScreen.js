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

const MacroInputScreen = () => {
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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* food item popup */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
        <View style={styles.sliderContainer}>
          <Text style={styles.header}>Actions</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Log Food</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Set Goals</Text>
          </Pressable>
        </View>
        {/* Food Log */}
        <View style={styles.sliderContainer}>
          <Text style={styles.header}>Food Log</Text>
          <Text style={styles.subText}>Tap items to view/edit</Text>
          {foodItems.map((food) => (
            <FoodListItem
              key={food.id}
              data={food}
              onPress={() => setModalVisible(true)}
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
  centeredView: {
    //for modal
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomView: {
    height: "75%",
    width: "100%",
    paddingTop: 20,
  },
  sliderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 40,
    borderBottomWidth: 5,
    borderBottomColor: "black",
    paddingBottom: 30,
  },
  button: {
    backgroundColor: "#3498db",
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
