import { UnfoldingBlock } from "./block";
import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("UnfoldingBlock", () => {
  it("renders UnfoldingBlock component", async () => {
    //   const onSelectChangeMock = jest.fn();
    render(<UnfoldingBlock />);
    screen.debug();
    screen.logTestingPlaygroundURL();

    const button = screen.getByRole("button", { name: /more/i });
    expect(button).toBeInTheDocument();

    //expect(screen.getByText(/New's Title/i)).toHaveStyle('display: none')

    const block = screen.getByText(/Travelling door/i);
    expect(block).toHaveClass("hidden");
    fireEvent.click(button);
    expect(block).toBeVisible();

    /* expect;
    const handleBlockOpenMock = jest.fn();
    await userEvent.click(button, 'More' )
    expect(handleBlockOpenMock).toBeCalledWith('More');
    const break1 = screen.getByRole('option', { name: /break/i });

    expect(break1).toBeInTheDocument();

    const image1 = screen.getByRole('option', { name: /image/i });

    expect(image1).toBeInTheDocument();

    await userEvent.selectOptions(select1, 'Break');
    expect(onSelectChangeMock).toHaveBeenCalledWith('Break'); */
  });
});
