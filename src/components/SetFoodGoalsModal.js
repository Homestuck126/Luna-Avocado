import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from "react-native";

const SetFoodGoalsModal = ({
  isVisible,
  onClose,
  goalsData,
  updateMacroGoals,
}) => {
  const macroGoals = goalsData();
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedGoalsData, setUpdatedGoalsData] = useState(macroGoals);
  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);
  const closeModal = () => {
    setModalVisible(false);
    onClose(false);
  };

  //handles updating updatedGoalsData whenever text is changed in the input boxes.
  const handleInputChange = (index, value) => {
    setUpdatedGoalsData((prevData) => {
      const newData = [...prevData]; //spread operator to create a shallow copy
      newData[index] = Number(value);
      return newData;
    });
  };

  //handles interaction when submit button is pressed. Calls the corresponding updateMacroGoals function from prop
  const handleSubmit = () => {
    //console.log("updatedGoalsData being passed from SetFoodGoalsModal on handleSubmit()");
    //console.log(updatedGoalsData);
    updateMacroGoals(updatedGoalsData);
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
          <Text style={styles.header}>Set New Goals</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="calorie goal"
              value={updatedGoalsData[0]}
              autoCapitalize="none"
              textAlign="left"
              inputMode="numeric"
              onChangeText={(text) => handleInputChange(0, text)}
              testID="SetFoodGoalsModal:CalorieTextInput:Change"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="protein goal"
              value={updatedGoalsData[1]}
              autoCapitalize="none"
              textAlign="left"
              inputMode="numeric"
              onChangeText={(text) => handleInputChange(1, text)}
              testID="SetFoodGoalsModal:ProteinTextInput:Change"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="carbohydrates goal"
              value={updatedGoalsData[2]}
              autoCapitalize="none"
              textAlign="left"
              inputMode="numeric"
              onChangeText={(text) => handleInputChange(2, text)}
              testID="SetFoodGoalsModal:CarbTextInput:Change"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="fats goal"
              value={updatedGoalsData[3]}
              autoCapitalize="none"
              textAlign="left"
              inputMode="numeric"
              onChangeText={(text) => handleInputChange(3, text)}
              testID="SetFoodGoalsModal:FatsTextInput:Change"
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
              testID="SetFoodGoalsModal:SubmitPressable:Press"
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
              testID="SetFoodGoalsModal:CancelPressable:Press"
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
    borderColor: "#708090",
    borderWidth: 3,
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
});
export default SetFoodGoalsModal;
