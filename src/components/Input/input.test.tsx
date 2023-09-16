import { Input } from "./input";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Input", () => {
  it("calls onInputChange when input value changes", async () => {
    const onInputChangeMock = jest.fn();
    render(<Input onInputChange={onInputChangeMock} />);
    screen.debug();
    screen.logTestingPlaygroundURL();
    const inputElement = screen.getByPlaceholderText(
      "Enter digit from 1 to 6",
    ) as HTMLInputElement;

    await userEvent.type(inputElement, "2");

    expect(onInputChangeMock).toHaveBeenCalledWith("2");
  });
});
