import { Select } from "./select";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Select", () => {
  it("renders Select component", async () => {
    const onSelectChangeMock = jest.fn();
    render(<Select onSelectChange={onSelectChangeMock} />);
    screen.debug();
    screen.logTestingPlaygroundURL();

    const select1 = screen.getByRole("combobox", {
      name: /select what do you want to see/i,
    });
    expect(select1).toBeInTheDocument();
    expect;
    const break1 = screen.getByRole("option", { name: /break/i });

    expect(break1).toBeInTheDocument();

    const image1 = screen.getByRole("option", { name: /image/i });

    expect(image1).toBeInTheDocument();

    await userEvent.selectOptions(select1, "Break");
    expect(onSelectChangeMock).toHaveBeenCalledWith("Break");
  });
});
