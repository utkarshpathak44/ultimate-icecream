import "@testing-library/jest-dom";
import React from "react";

import { render, screen } from "@testing-library/react";
import IceCreamHolder from "../IceCreamHolder";


describe("IceCreamHolder Component", () => {
  const mockIceCream = {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Vanilla Delight",
    price: 5.99,
    stock: 10,
    about: "A delicious vanilla ice cream.",
  };

  test("renders ice cream name", () => {
    render(<IceCreamHolder {...mockIceCream} />);
    expect(screen.getByText(mockIceCream.name)).toBeInTheDocument();
  });

  test("renders price correctly", () => {
    render(<IceCreamHolder {...mockIceCream} />);
    expect(screen.getByText(`$${mockIceCream.price}`)).toBeInTheDocument();
  });

  test("renders image with correct src and alt", () => {
    render(<IceCreamHolder {...mockIceCream} />);
    const imgElement = screen.getByAltText(mockIceCream.name);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockIceCream.image);
  });

  test("renders stock correctly when available", () => {
    render(<IceCreamHolder {...mockIceCream} />);
    expect(screen.getByText(`${mockIceCream.stock} in stock`)).toBeInTheDocument();
  });

  test("renders out-of-stock message when stock is 0", () => {
    const outOfStockIceCream = { ...mockIceCream, stock: 0 };
    render(<IceCreamHolder {...outOfStockIceCream} />);
    expect(screen.getByText("Currently out of stock")).toBeInTheDocument();
  });

  test("renders ice cream description", () => {
    render(<IceCreamHolder {...mockIceCream} />);
    expect(screen.getByText(mockIceCream.about)).toBeInTheDocument();
  });
});
