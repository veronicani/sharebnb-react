import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RoutesList from "./RoutesList";

jest.mock("./pages/Properties/PropertiesPage", () => {
  return function MockPropertiesPage() {
    return <div data-testid="properties-page">Properties Page</div>;
  };
});

jest.mock("./pages/AddProperty/AddPropertyPage", () => {
  return function MockAddPropertyPage() {
    return <div data-testid="add-property-page">Add Property Page</div>;
  };
});

describe("RoutesList Component", () => {
  const mockProps = {
    properties: [],
    addProperty: jest.fn(),
    search: jest.fn(),
  };

  test("renders PropertiesPage at the root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RoutesList {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("properties-page")).toBeInTheDocument();
  });

  test("renders AddPropertyPage at /add-property", () => {
    render(
      <MemoryRouter initialEntries={["/add-property"]}>
        <RoutesList {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("add-property-page")).toBeInTheDocument();
  });

  test("renders PropertiesPage when a search term is provided", () => {
    render(
      <MemoryRouter initialEntries={["/pool"]}>
        <RoutesList {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("properties-page")).toBeInTheDocument();
  });

  test("redirects invalid paths to the homepage", () => {
    render(
      <MemoryRouter initialEntries={["/this-route-does-not-exist"]}>
        <RoutesList {...mockProps} />
      </MemoryRouter>
    );

    // Should redirect to "/" which renders PropertiesPage
    expect(screen.getByTestId("properties-page")).toBeInTheDocument();
  });
});