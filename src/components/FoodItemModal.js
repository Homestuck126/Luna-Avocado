import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

const FoodItemModal = ({ isVisible, onClose, modalValue }) => {
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
          <Text style={styles.modalText}>Hello World!</Text>
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
          >
            <Text style={styles.modalText}>Hide Modal</Text>
          </Pressable>
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
  modalText: {},
  button: {
    padding: 10,
    borderRadius: 8,
    width: "70%",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default FoodItemModal;
