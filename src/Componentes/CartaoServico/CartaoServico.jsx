
import './CartaoServico.css'
import BotaoPedido from '../BotaoPedido/BotaoPedido'

function CartaoServico({ servico }) {
  return (
    <article className="cartao">
      <img src={servico.imagem} alt={servico.nome} />

      <div className="cartao-info">
        <h3>{servico.nome}</h3>
        <p>{servico.descricao}</p>
        <BotaoPedido item={servico.nome}/>
      </div>
    </article>
  )
}

export default CartaoServico