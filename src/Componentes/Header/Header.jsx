import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const areaMenu = useRef(null)

  useEffect(() => {
    if (!menuAberto) return

    function fecharSeFora(evento) {
      if (areaMenu.current && !areaMenu.current.contains(evento.target)) {
        setMenuAberto(false)
      }
    }

    function fecharComEsc(evento) {
      if (evento.key === 'Escape') setMenuAberto(false)
    }

    document.addEventListener('pointerdown', fecharSeFora)
    document.addEventListener('keydown', fecharComEsc)

    return () => {
      document.removeEventListener('pointerdown', fecharSeFora)
      document.removeEventListener('keydown', fecharComEsc)
    }
  }, [menuAberto])

  function fechar() {
    setMenuAberto(false)
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Cuyuya Beauty Salon" />
      </Link>

      <div className="menu-area" ref={areaMenu}>
        <nav className={menuAberto ? 'menu aberto' : 'menu'}>
          <NavLink to="/" end onClick={fechar}>Home</NavLink>
          <NavLink to="/contacto" onClick={fechar}>Contacto</NavLink>
          <NavLink to="/sobre" onClick={fechar}>Sobre Nós</NavLink>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header