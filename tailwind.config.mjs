// tailwind.config.cjs
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		keyframes: {
			"scrolling-banner": {
			  from: {transform: "translateX(0)"},
			  to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
			},
			"scrolling-banner-vertical": {
			  from: {transform: "translateY(0)"},
			  to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
			},
		  },
		  animation: {
			"scrolling-banner": "scrolling-banner var(--duration) linear infinite",
			"scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
		  },
		  backgroundImage: {
			"hero-section-centered-navbar":
			"linear-gradient(137deg, #F4F4F5 20%, #FFA500 35%, #F8E5EC 46.96%, #FDD0DF 63.99%, #008000 80%, #A9EAF0 98.9%)",
		},
	},
  },
  darkMode: "class",
  plugins: [heroui()]
}