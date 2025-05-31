import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { About } from './components/About.jsx'
import { Gallery } from './components/Gallery.jsx'
import { RegistrationForm } from './components/RegistrationForm.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <>
    <div className='bg-colorGlitchPulse p-4'>
      
      {/* Encabezado */}
      <header className='bg-colorPixelSunset p-3 px-6 flex gap-20 rounded-full items-center justify-center'>
        <Header/>
      </header>

      {/* Contenido principal */}
      <main>
        <section>
          <div className='bg-colorNeonDrift m-1 mt-3 p-3 flex rounded-2xl'>
            <About/>
          </div>
        </section>
        <section>
          <div className='bg-colorDreambyte m-1 mt-3 p-3 flex rounded-2xl'>
            <Gallery/>
          </div>          
        </section>
      </main>

      {/* Formulario de registro */}
      <RegistrationForm/>

      {/* pie de pagina */}
      <footer>
          <Footer/>
      </footer>
    </div>

    </>
  )
}

export default App