import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from "react-native";

const SetFoodGoalsModal = ({ isVisible, onClose, goalsData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedGoalsData, setUpdatedGoalsData] = useState([goalsData]);
  useEffect(() => {
    setModalVisible(isVisible);
    setUpdatedGoalsData([goalsData]);
  }, [isVisible, goalsData]);
  const closeModal = () => {
    setModalVisible(false);
    onClose(false);
  };

  const handleSubmit = () => {
    // Perform any necessary actions when the "Edit" button is pressed
    // For example, update the goalsData and call onDataUpdate
    // For now, let's just log the goalsData
    console.log(goalsData);

    // If you want to update goalsData and pass it back to the parent component:
    setUpdatedGoalsData([...updatedGoalsData]);

    // Call the onDataUpdate callback to pass the updated data to the parent component

    closeModal();
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
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="calorie goal"
              value={updatedGoalsData[4]}
              autoCapitalize="none"
              textAlign="left"
              inputMode="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="protein goal"
              value={updatedGoalsData[5]}
              autoCapitalize="none"
              textAlign="left"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="carbohydrates goal"
              value={updatedGoalsData[6]}
              autoCapitalize="none"
              textAlign="left"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="fats goal"
              value={updatedGoalsData[7]}
              autoCapitalize="none"
              textAlign="left"
            />
          </View>
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
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text style={styles.modalText}>Submit</Text>
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
            >
              <Text style={styles.modalText}>Cancel</Text>
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
    height: "40%",
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
export default SetFoodGoalsModal;
