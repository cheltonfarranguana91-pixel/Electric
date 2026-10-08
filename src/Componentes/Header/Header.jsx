import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header">
      {/* logo */}
      <nav className={menuAberto ? 'menu aberto' : 'menu'}>
        {/* NavLink para: Home (/), Contacto (/contacto), Sobre Nós (/sobre) */}
      </nav>
      <button onClick={() => setMenuAberto(!menuAberto)}>{/* hambúrguer */}</button>
    </header>
  )
}
export default Header