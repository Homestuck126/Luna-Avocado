import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SetFoodGoalsModal from "../../src/components/SetFoodGoalsModal";
import LogFoodModal from "../../src/components/LogFoodModal";

describe("SetFoodGoalsModal", () => {
  it("calls onClose when Submit pressable is pressed", () => {
    const mockOnClose = jest.fn();
    const goals = () => {
      return [0, 0, 0, 0];
    };

    const { getByTestId } = render(
      <SetFoodGoalsModal
        isVisible={true}
        onClose={mockOnClose}
        goalsData={goals}
        updateMacroGoals={() => {}}
      ></SetFoodGoalsModal>
    );
    const submitButton = getByTestId("SetFoodGoalsModal:SubmitPressable:Press");
    fireEvent.press(submitButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when Cancel pressable is pressed", () => {
    const mockOnClose = jest.fn();
    const goals = () => {
      return [0, 0, 0, 0];
    };

    const { getByTestId } = render(
      <SetFoodGoalsModal
        isVisible={true}
        onClose={mockOnClose}
        goalsData={goals}
        updateMacroGoals={() => {}}
      ></SetFoodGoalsModal>
    );
    const submitButton = getByTestId("SetFoodGoalsModal:CancelPressable:Press");
    fireEvent.press(submitButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls updateMacroGoals when Submit pressable is pressed", () => {
    const mockOnSubmit = jest.fn();
    const goals = () => {
      return [0, 0, 0, 0];
    };

    const { getByTestId } = render(
      <SetFoodGoalsModal
        isVisible={true}
        onClose={() => {}}
        goalsData={goals}
        updateMacroGoals={mockOnSubmit()}
      ></SetFoodGoalsModal>
    );
    const submitButton = getByTestId("SetFoodGoalsModal:CancelPressable:Press");
    fireEvent.press(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("displays new macro goals when TextInput changes - all", () => {
    const goals = () => {
      return [0, 0, 0, 0];
    };
    render(
      <LogFoodModal
        isVisible={true}
        onClose={() => {}}
        goalsData={goals}
        updateMacroGoals={() => {}}
      ></LogFoodModal>
    );

    const calorieGoalTextInput = screen.getByPlaceholderText(
      "calorie",
      (options = {
        exact: false,
      })
    );
    const proteinGoalTextInput = screen.getByPlaceholderText(
      "protein",
      (options = {
        exact: false,
      })
    );
    const carbsGoalTextInput = screen.getByPlaceholderText(
      "carb",
      (options = {
        exact: false,
      })
    );
    const fatsGoalTextInput = screen.getByPlaceholderText(
      "fat",
      (options = {
        exact: false,
      })
    );

    fireEvent.changeText(calorieGoalTextInput, "100");
    fireEvent.changeText(proteinGoalTextInput, "200");
    fireEvent.changeText(carbsGoalTextInput, "300");
    fireEvent.changeText(fatsGoalTextInput, "400");

    expect(calorieGoalTextInput).toHaveDisplayValue("100");
    expect(proteinGoalTextInput).toHaveDisplayValue("200");
    expect(carbsGoalTextInput).toHaveDisplayValue("300");
    expect(fatsGoalTextInput).toHaveDisplayValue("400");
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
