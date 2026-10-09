import { Routes, Route } from 'react-router-dom'
import Header from './Componentes/Header/Header'
import Footer from './Componentes/Footer/Footer'
import Home from './Paginas/Home'
import Sobre from './Paginas/Sobre'
import Contacto from './Paginas/Contacto'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
export default App