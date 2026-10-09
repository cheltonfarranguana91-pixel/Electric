import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header">
        <a href="/" className='logo'>
            <img src={logo} alt="Logo Salon" />
        </a>
      
      <nav className={menuAberto ? 'menu aberto' : 'menu'}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <NavLink to="/sobre">Sobre Nos</NavLink>
         </nav>
      <button  className ="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>☰</button>
    </header>
  )
}
export default Header