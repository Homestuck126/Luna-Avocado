import { render, screen, fireEvent } from "@testing-library/react-native";
import LogFoodModal from "../../src/components/LogFoodModal";
import "@testing-library/jest-native";

describe("Log Food Modal", () => {
  it("calls onClose prop when Submit pressable is pressed", () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(
      <LogFoodModal
        isVisible={true}
        onClose={mockOnPress}
        addFood={() => {}}
      ></LogFoodModal>
    );
    const submitButton = getByTestId("LogFoodModal:SubmitPressable:Press");
    fireEvent.press(submitButton);

    expect(mockOnPress).toHaveBeenCalled();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("calls onClose prop when Cancel pressable is pressed", () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(
      <LogFoodModal
        isVisible={true}
        onClose={mockOnPress}
        addFood={() => {}}
      ></LogFoodModal>
    );
    const submitButton = getByTestId("LogFoodModal:CancelPressable:Press");
    fireEvent.press(submitButton);

    expect(mockOnPress).toHaveBeenCalled();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("displays input name and macros when TextInput changes", () => {
    render(
      <LogFoodModal
        isVisible={true}
        onClose={() => {}}
        addFood={() => {}}
      ></LogFoodModal>
    );

    const nameTextInput = screen.getByTestId(
      "LogFoodModal:NameTextInput:Change"
    );
    const CalorieTextInput = screen.getByTestId(
      "LogFoodModal:CalorieTextInput:Change"
    );
    const ProteinTextInput = screen.getByTestId(
      "LogFoodModal:ProteinTextInput:Change"
    );
    const CarbTextInput = screen.getByTestId(
      "LogFoodModal:CarbTextInput:Change"
    );
    const FatTextInput = screen.getByTestId("LogFoodModal:FatTextInput:Change");

    fireEvent.changeText(nameTextInput, "test");
    fireEvent.changeText(CalorieTextInput, "2000");
    fireEvent.changeText(ProteinTextInput, "100");
    fireEvent.changeText(CarbTextInput, "200");
    fireEvent.changeText(FatTextInput, "300");

    expect(nameTextInput).toHaveDisplayValue("test");
    expect(CalorieTextInput).toHaveDisplayValue("2000");
    expect(ProteinTextInput).toHaveDisplayValue("100");
    expect(CarbTextInput).toHaveDisplayValue("200");
    expect(FatTextInput).toHaveDisplayValue("300");
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
