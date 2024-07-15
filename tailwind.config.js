/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px"
    },
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1170px',
      '2xl': '1320px',
    },
    extend: {
      backgroundImage: {
        'hero-banner-desktop': "url('../app/assets/images/banner-bg.png')",
        'hero-banner-mobile': "url('../app/assets/images/banner-bg-mobile.png')",
      },
      colors: {
        'title-color': '#283253',
        'text-color': '#535B75',
        'primary-color': '#77C47D',
      },
      fontFamily: {
        monument_extended: ['Monument Extended'],
        dm_sans: "var(--font-dm-sans)",
      },
    },
  },
  plugins: [],
};
