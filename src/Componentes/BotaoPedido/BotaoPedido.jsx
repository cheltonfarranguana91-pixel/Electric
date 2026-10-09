import './BotaoPedido.css'


function BotaoPedido({item}){
    const numero = '258876770219'

    function fazerPedido(){
        const mensagem = `Olá! Quero fazer o pedido: ${item}`
        const texto = encodeURIComponent(mensagem)
        window.location.href = `whatsapp://send?phone= ${numero}&text=${texto}`

        setTimeout(() => {
            if (!document.hidden) {
                window.open(`https://wa.me/${numero}?text=${texto}`, '_blank')
            }
        }, 1500)
    }

    return(

        <button className="bnt-pedido" onClick={fazerPedido}>Fazer Pedido</button>

    )
}

export default BotaoPedido