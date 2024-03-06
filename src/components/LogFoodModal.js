import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from "react-native";



//----------------------------------------------------------------------------------}

const LogFoodModal = ({ isVisible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [fat, setFat] = useState("");

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  const closeModal = () => {
    setModalVisible(false);
    onClose(false);
  };

  const handleSubmit = () => {
    console.log({ foodName, calories, protein, carbohydrates, fat });
    setFoodName('');
    setCalories('');
    setProtein('');
    setCarbohydrates('');
    setFat('');
  

    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Name of the food"
            value={foodName}
            onChangeText={setFoodName}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Calories"
            value={calories}
            onChangeText={setCalories}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Protein (g)"
            value={protein}
            onChangeText={setProtein}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Carbohydrates (g)"
            value={carbohydrates}
            onChangeText={setCarbohydrates}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Fat (g)"
            value={fat}
            onChangeText={setFat}
            keyboardType="numeric"
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.modalText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

// Reconstruct the object with `foodName` first
const orderedLogData = {
  foodName: console.log.foodName,
  calories: console.log.calories,
  protein: console.log.protein,
  carbohydrates: console.log.carbohydrates,
  fat: console.log.fat,
};

console.log(orderedLogData);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: "60%", // Adjusted for additional content
    width: "80%",
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
  input: {
    height: 40,
    width: "90%",
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#ddd",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  modalText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LogFoodModal;

