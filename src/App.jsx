import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Componentes/NavBar'
import Contairs from './Componentes/Contairs' 
import Home from './Paginas/Home'
import Footer from './Componentes/Footer'
import './App.css'

function App() {

  return(
    <Router>
      <div className={styles.appLayout}>
        <NavBar/>
        <main>
          <Contairs customClass="min-height">
            <Routes>
          
              <Route path="/Home" element={<Home />}></Route>


            </Routes>
          </Contairs>
          
        </main>
        <Footer/>

      </div>
            
    </Router>
  )


  

  
}

export default App
