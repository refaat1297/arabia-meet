/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        am: {
          100: '#2e3b50',
          200: '#212836',
          300: '#151a23',

          blue: {
            primary: '#5596e6'
          }
        },
      }
    },
  },
  plugins: [],
}
