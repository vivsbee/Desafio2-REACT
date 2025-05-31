/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorPixelSunset: '#352C73',
        colorNeonDrift:'#384773',
        colorForestSignal:'#3E328C',
        colorGlitchPulse: '#1F2740',
        colorDreambyte:'#F0F2F2',






        // colorFondoInicio:'#F5CCCA',
        // colorFondo1: '#D9BFBE',
        // colorFondo2: '#C9BFBE',
        // colorFondo3: '#C8D3D5',
        // colorFondo4: '#B9D3D4',
        // colorFondoFinal: '#586667',
        // colorFondo:'#F0F2F2',
        // colorTitulo: '#331626',
        // colorTitulo: '#F2F2F2',
        // colorTexto:'#001F26',
        // colorNavbar:'#73A605',
        // colorBotonClaro:'#F28891',
        // colorBotonOscuro:'#F25270',
        // colorFondoTitulo:'#4A5B73',
        
      },
      fontFamily:{
        tipographyTexto: ['Montserrat', 'sans-serif'],
        tipographyTitulo: ['Orbitron', 'sans-serif']
      }
    },
  },
  plugins: [],
}

