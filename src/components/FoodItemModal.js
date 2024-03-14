import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import FoodListItem from "./FoodListItem";

const FoodItemModal = ({ isVisible, onClose, foodData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);
  const closeModal = () => {
    setModalVisible(false);
    onClose(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        closeModal;
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <FoodListItem data={foodData} isPressable={false}></FoodListItem>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonClose,
                {
                  backgroundColor: pressed
                    ? "rgba(52,152,219,0.7)"
                    : "rgb(52,152,219)",
                },
              ]}
            >
              <Text style={styles.modalText}>Edit</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonClose,
                {
                  backgroundColor: pressed
                    ? "rgba(52,152,219,0.7)"
                    : "rgb(52,152,219)",
                },
              ]}
              onPress={() => {
                closeModal();
              }}
              testID="FoodItemModal:ClosePressable:Press"
            >
              <Text style={styles.modalText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: "24%",
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#708090",
    padding: 5,
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
  modalText: {},
  button: {
    padding: 10,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(245,245,245)",
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    color: "#333",
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
});

export default FoodItemModal;
