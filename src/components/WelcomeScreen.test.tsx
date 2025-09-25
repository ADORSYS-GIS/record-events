import { render, screen, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { vi } from "vitest";
import i18n from "../i18n";
import { ThemeProvider } from "../contexts/ThemeContext";
import WelcomeScreen from "./WelcomeScreen";

// Mock the onGetStarted function
const mockOnGetStarted = vi.fn();

// Setup test wrapper with i18n provider
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>{component}</ThemeProvider>
    </I18nextProvider>,
  );
};

describe("WelcomeScreen", () => {
  beforeEach(() => {
    // Reset mock function before each test
    mockOnGetStarted.mockClear();
  });

  it("renders welcome title", () => {
    renderWithProviders(
      <WelcomeScreen onGetStarted={mockOnGetStarted} i18n={i18n} />,
    );

    expect(screen.getByText("Presidential Election 2025")).toBeInTheDocument();
  });

  it("renders language selection buttons", () => {
    renderWithProviders(
      <WelcomeScreen onGetStarted={mockOnGetStarted} i18n={i18n} />,
    );

    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Français")).toBeInTheDocument();
  });

  it("renders get started button", () => {
    renderWithProviders(
      <WelcomeScreen onGetStarted={mockOnGetStarted} i18n={i18n} />,
    );

    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("calls onGetStarted when get started button is clicked", () => {
    renderWithProviders(
      <WelcomeScreen onGetStarted={mockOnGetStarted} i18n={i18n} />,
    );

    const getStartedButton = screen.getByText("Get Started");
    fireEvent.click(getStartedButton);

    expect(mockOnGetStarted).toHaveBeenCalledTimes(1);
  });

  it("changes language when language buttons are clicked", () => {
    renderWithProviders(
      <WelcomeScreen onGetStarted={mockOnGetStarted} i18n={i18n} />,
    );

    const frenchButton = screen.getByText("Français");
    fireEvent.click(frenchButton);

    // The language should change (this tests the component's language switching functionality)
    expect(i18n.language).toBe("fr");
  });
});
