/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#EC6C17",
            highlighted: "#87FF00",
            secondary: {
               100: "#FFFFFF",
               150: "#F6F6F6",
               200: "#A7A7A7",
               300: "#646364",
               400: "#2D3237",
               500: "#212529",
            },
            success: {
               100: "#D4EDDA",
               200: "#A1EFA4",
               300: "#72D57D",
               400: "#2E854B",
            },
            danger: {
               100: "#F8D7DA",
               200: "#F1B0B6",
               300: "#E87C81",
               400: "#D61C2A",
            },
            warning: {
               100: "#FFF3CD",
               200: "#FFE69C",
               300: "#FFD966",
               400: "#FFC107",
            },
            info: {
               100: "#D1ECF1",
               200: "#A3DAE6",
               300: "#75CCE0",
               400: "#17A2B8",
            },
            light: {
               100: "#F8F9FA",
               200: "#F1F3F5",
               300: "#E9ECEF",
               400: "#DEE2E6",
            },
            dark: {
               100: "#343A40",
               200: "#212529",
               300: "#1C1C1C",
               400: "#000000",
            },
         },
         fontFamily: {
            nunito: ["Nunito"],
         },
      },
   },
   plugins: [],
}
