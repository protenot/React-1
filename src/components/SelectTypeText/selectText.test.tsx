import { SelectTypeText } from "./selectText";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SelectTypeText", () => {
  it("renders SelectType component", async () => {
    const onSelectChangeMock = jest.fn();

    render(<SelectTypeText onSelectTypeChange={onSelectChangeMock} />);
    screen.debug();
    screen.logTestingPlaygroundURL();

    const select1 = screen.getByRole("combobox");
    expect(select1).toBeInTheDocument();

    await userEvent.selectOptions(select1, "italic");
    expect(onSelectChangeMock).toHaveBeenCalledWith("italic");
  });
});
