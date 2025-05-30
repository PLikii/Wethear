import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        background: "var(--background)",
        title: "var(--title)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        destructive: "var(--destructive)",
        description: "var(--description)",
        accent: "var(--accent)",
        border: "var(--border)",
        card: "var(--card)",
        cardBorder: "var(--cardBorder)",
        input: "var(--input)",
        gradientFrom: "var(--gradientFrom)",
        gradientTo: "var(--gradientTo)",
      },
    },
  },
  plugins: [],
};
export default config;
