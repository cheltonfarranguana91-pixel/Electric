import { FaWhatsapp } from 'react-icons/fa'
import './BotaoPedido.css'


function BotaoPedido({item}){
    const numero = '258876998569'

    function fazerPedido(){
        const mensagem = `Olá! Quero fazer o pedido: ${item},`
        const texto = encodeURIComponent(mensagem)
        window.location.href = `whatsapp://send?phone= ${numero}&text=${texto}`

        setTimeout(() => {
            if (!document.hidden) {
                window.open(`https://wa.me/${numero}?text=${texto}`, '_blank')
            }
        }, 1500)
    }

    return(

        <button className="btn-pedido" id='bntP' onClick={fazerPedido}> <FaWhatsapp/> Fazer Pedido</button>

    )
}

export default BotaoPedido