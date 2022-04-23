import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#56FBB1",
        },
        blue: {
          DEFAULT: "#0A3149",
        },
        ui: {
          light: "#F7F7FA",
          DEFAULT: "#EEF0F5",
          medium: "#D9DFE8",
          dark: "#89959C",
        },
      },
    },
  },
});
