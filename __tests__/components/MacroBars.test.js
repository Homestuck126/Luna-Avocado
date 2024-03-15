import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native";
import MacroBars from "../../src/components/MacroBars";

describe("MacroBars", () => {
  it("has correct progress for all bars when (0 < macro < goal", () => {
    const mockData = {
      calories: 200,
      calorieGoal: 1000,
      protein: 30,
      proteinGoal: 100,
      carbohydrate: 50,
      carbGoal: 200,
      fats: 15,
      fatsGoal: 50,
    };

    const { getByTestId } = render(<MacroBars data={mockData}></MacroBars>);
    const calorieProgressBar = getByTestId("MacroBars:ProgressBar:Calories");
    const proteinProgressBar = getByTestId("MacroBars:ProgressBar:Protein");
    const carbProgressBar = getByTestId("MacroBars:ProgressBar:Carbs");
    const fatsProgressBar = getByTestId("MacroBars:ProgressBar:Fats");

    expect(calorieProgressBar).toHaveProp("progress", 0.2);
    expect(proteinProgressBar).toHaveProp("progress", 0.3);
    expect(carbProgressBar).toHaveProp("progress", 0.25);
    expect(fatsProgressBar).toHaveProp("progress", 0.3);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("has correct progress for all bars when (0 == macro < goal", () => {
    const mockData = {
      calories: 0,
      calorieGoal: 1000,
      protein: 0,
      proteinGoal: 100,
      carbohydrate: 0,
      carbGoal: 200,
      fats: 0,
      fatsGoal: 50,
    };

    const { getByTestId } = render(<MacroBars data={mockData}></MacroBars>);
    const calorieProgressBar = getByTestId("MacroBars:ProgressBar:Calories");
    const proteinProgressBar = getByTestId("MacroBars:ProgressBar:Protein");
    const carbProgressBar = getByTestId("MacroBars:ProgressBar:Carbs");
    const fatsProgressBar = getByTestId("MacroBars:ProgressBar:Fats");

    expect(calorieProgressBar).toHaveProp("progress", 0);
    expect(proteinProgressBar).toHaveProp("progress", 0);
    expect(carbProgressBar).toHaveProp("progress", 0);
    expect(fatsProgressBar).toHaveProp("progress", 0);
    expect(screen.toJSON()).toMatchSnapshot();
  });
  it("progress does not exceed 1 when macro > goal", () => {
    const mockData = {
      calories: 10,
      calorieGoal: 1,
      protein: 10,
      proteinGoal: 1,
      carbohydrate: 10,
      carbGoal: 1,
      fats: 10,
      fatsGoal: 1,
    };

    const { getByTestId } = render(<MacroBars data={mockData}></MacroBars>);
    const calorieProgressBar = getByTestId("MacroBars:ProgressBar:Calories");
    const proteinProgressBar = getByTestId("MacroBars:ProgressBar:Protein");
    const carbProgressBar = getByTestId("MacroBars:ProgressBar:Carbs");
    const fatsProgressBar = getByTestId("MacroBars:ProgressBar:Fats");

    expect(calorieProgressBar).toHaveProp("progress", 1);
    expect(proteinProgressBar).toHaveProp("progress", 1);
    expect(carbProgressBar).toHaveProp("progress", 1);
    expect(fatsProgressBar).toHaveProp("progress", 1);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
