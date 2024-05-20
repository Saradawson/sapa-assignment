import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      greenOne: '#103c00 ',
      greenTwo: '#35711f',
      greenThree:  '#60a543',
      greenFour: '#e6efc5',
      tanOne: '#4f463c',
      tanTwo: '#e7cbaf',
      greyOne: '#333333',
      greyTwo: '#808080',
      greyThree: '#f2f2f2'
    },
    fontFamily: {
      'sans': ['"Proxima Nova"']
    }
  },
  plugins: [],
};
export default config;
