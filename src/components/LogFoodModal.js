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

const LogFoodModal = ({ isVisible, onClose, addFood }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [fat, setFat] = useState(0);

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  const closeModal = () => {
    setModalVisible(false);
    onClose(false);
  };

  const handleSubmit = () => {
    //console.log({ foodName, calories, protein, carbohydrates, fat });
    if (calories > 0 && protein > 0 && carbohydrates > 0 && fat > 0) {
      addFood({
        id: null,
        name: foodName,
        macros: [
          Number(calories),
          Number(protein),
          Number(carbohydrates),
          Number(fat),
        ],
      });
    }
    setFoodName("");
    setCalories(0);
    setProtein(0);
    setCarbohydrates(0);
    setFat(0);
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
              onPress={handleSubmit}
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
  modalText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LogFoodModal;
