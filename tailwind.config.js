module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#251D58",
          secondary: "#F6F6F6",
          netural: "#F4F7FC",
          "base-100": "#FFFFFF",
          info: "#F4F7FC",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}