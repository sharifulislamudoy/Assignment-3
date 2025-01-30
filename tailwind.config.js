import { defineConfig } from 'tailwindcss'

export default defineConfig({
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, rgb(255, 255, 255), rgb(239, 235, 227))",
      },
    },
  },
});
