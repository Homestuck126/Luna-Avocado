import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import FoodListItem from "../../src/components/FoodListItem";

describe("FoodListItem", () => {
  it("calls onPress when isPressable == true", () => {
    const mockOnPress = jest.fn();
    const mockData = {
      id: null,
      name: "test food",
      macros: [2000, 100, 90, 80],
    };

    const { getByTestId } = render(
      <FoodListItem
        data={mockData}
        onPress={mockOnPress}
        isPressable={true}
      ></FoodListItem>
    );

    const foodListItemPressable = getByTestId("FoodListItem:ItemPressable");

    fireEvent.press(foodListItemPressable);
    expect(mockOnPress).toHaveBeenCalled();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("displays same info from data in Text components", () => {
    const mockData = {
      id: null,
      name: "test food",
      macros: [2000, 100, 90, 80],
    };

    render(<FoodListItem data={mockData} onPress={() => {}}></FoodListItem>);

    expect(screen.getByText("test food")).toHaveTextContent("test food");
    expect(
      screen.getByText(
        "Calories",
        (options = {
          exact: false,
        })
      )
    ).toHaveTextContent("Calories: 2000");
    expect(
      screen.getByText(
        "Protein",
        (options = {
          exact: false,
        })
      )
    ).toHaveTextContent("Protein: 100");
    expect(
      screen.getByText(
        "Carbs",
        (options = {
          exact: false,
        })
      )
    ).toHaveTextContent("Carbs: 90");
    expect(
      screen.getByText(
        "Fat",
        (options = {
          exact: false,
        })
      )
    ).toHaveTextContent("Fat: 80");
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
