import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import FoodItemModal from "../../src/components/FoodItemModal";

describe("Food Item Modal", () => {
  it("calls onClose prop when Close pressable is pressed", () => {
    const mockOnPress = jest.fn();

    const foodData = {
      id: null,
      name: "testFood0",
      macros: [0, 0, 0, 0],
    };

    const { getByTestId } = render(
      <FoodItemModal
        isVisible={true}
        onClose={mockOnPress}
        foodData={foodData}
      ></FoodItemModal>
    );
    const closeButton = getByTestId("FoodItemModal:ClosePressable:Press");
    fireEvent.press(closeButton);

    expect(mockOnPress).toHaveBeenCalled();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
