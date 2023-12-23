import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

const gray = {
  25: "#FCFCFD",
  50: "#F9FAFB",
  100: "#F2F4F7",
  200: "#EAECF0",
  300: "#D0D5DD",
  400: "#98A2B3",
  500: "#667085",
  600: "#475467",
  700: "#344054",
  800: "#1D2939",
  900: "#101828",
};

const primary = {
  25: "#F5FAFF",
  50: "#EFF8FF",
  100: "#D1E9FF",
  200: "#B2DDFF",
  300: "#84CAFF",
  400: "#53B1FD",
  500: "#2E90FA",
  600: "#1570EF",
  700: "#175CD3",
  800: "#1849A9",
  900: "#003366",
};

const red = {
  25: "#FFFBFA",
  50: "#FEF3F2",
  100: "#FEE4E2",
  200: "#FECDCA",
  300: "#FDA29B",
  400: "#F97066",
  500: "#F04438",
  600: "#D92D20",
  700: "#B42318",
  800: "#912018",
  900: "#7A271A",
};

const yellow = {
  25: "#FFFCF5",
  50: "#FFFAEB",
  100: "#FEF0C7",
  200: "#FEDF89",
  300: "#FEC84B",
  400: "#FDB022",
  500: "#F79009",
  600: "#DC6803",
  700: "#B54708",
  800: "#93370D",
  900: "#7A2E0E",
};

const green = {
  25: "#F6FEF9",
  50: "#ECFDF3",
  100: "#D1FADF",
  200: "#A6F4C5",
  300: "#6CE9A6",
  400: "#32D583",
  500: "#12B76A",
  600: "#039855",
  700: "#027A48",
  800: "#05603A",
  900: "#054F31",
};

// Extras
const cyan = {
  25: "#F5FEFF",
  50: "#ECFDFF",
  100: "#CFF9FE",
  200: "#A5F0FC",
  300: "#67E3F9",
  400: "#22CCEE",
  500: "#06AED4",
  600: "#088AB2",
  700: "#0E7090",
  800: "#155B75",
  900: "#164C63",
};

export const colors = {
  gray,
  primary,
  green,
  yellow,
  red,
  cyan,
};

const content = ["./src/**/*.{ts,tsx,jsx,js,astro}"];

const heights = {
  nav: "4.5rem",
};

export default {
  content,
  darkMode: "class",
  theme: {
    colors: { white: "#FFFFFF", transparent: "transparent", ...colors },
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      serif: [
        "Literata",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    fontWeight: {
      reg: "400",
      med: "500",
      semi: "600",
      bold: "700",
    },
    fontSize: {
      // D for display -- larger fonts
      "d-2xl": ["4.5rem", "5.625rem"],
      "d-xl": ["3.75rem", "4.5rem"],
      "d-lg": ["3rem", "3.75rem"],
      "d-md": ["2.25rem", "2.75rem"],
      "d-sm": ["1.875rem", "2.375rem"],
      "d-xs": ["1.5rem", "2rem"],
      // Smaller fonts
      xl: ["1.25rem", "1.875rem"],
      lg: ["1.125rem", "1.75rem"],
      md: ["1rem", "1.5rem"],
      sm: ["0.875rem", "1.25rem"],
      xs: ["0.75rem", "1.125rem"],
    },
    boxShadow: {
      xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      sm: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
      md: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
      "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
      "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
    },
    blur: {
      none: "0",
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "20px",
    },
    screens: {
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "1536px",
    },
    extend: {
      height: heights,
      minHeight: heights,
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
