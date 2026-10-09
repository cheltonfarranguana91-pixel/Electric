// src/Componentes/BotaoWhatsapp/BotaoWhatsapp.jsx
import { FaWhatsapp } from 'react-icons/fa'
import './BotaoWhatsapp.css'

function BotaoWhatsapp() {
  const numero = '258876770219'
  const mensagem = 'Olá! Gostaria de saber mais sobre os vossos serviços.'
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

  return (
    <a
      className="btn-whatsapp"
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default BotaoWhatsapp