import { render, screen, fireEvent, findByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Basic testing about required features", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("Test first rendering to confirm there are all elements", async () => {
    screen.debug()
    expect(screen.queryByPlaceholderText("Search Using Media Type")).toBeTruthy();
    expect(screen.queryByPlaceholderText("Search Using Query")).toBeTruthy();
    expect(screen.queryByPlaceholderText("Search Using Description")).toBeTruthy();
    expect(screen.queryByPlaceholderText("Search Using Keywords")).toBeTruthy();
    expect(screen.queryByText("Search")).toBeTruthy();
    expect(screen.queryByText("1961")).toBeTruthy();
    expect(screen.queryByText("2023")).toBeTruthy();
  });
});