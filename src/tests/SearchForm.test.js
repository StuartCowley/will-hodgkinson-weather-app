import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Test Search Text",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  test("renders", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("button displays correct text", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    const button = screen.getByText(/Search/i);

    expect(button).toBeInTheDocument();
  });
});
