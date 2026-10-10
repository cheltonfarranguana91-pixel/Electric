import Hero from '../Componentes/Hero/Hero'
import CartaoServico from '../Componentes/CartaoServico/CartaoServico'
import { servicos } from '../Data/Servicos'
import './Home.css'
import BotaoPedido from '../Componentes/BotaoPedido/BotaoPedido'


function Home() {
  return (
    <>
      <Hero />

      <section id="pedidos" className="servicos">
        <h2>Os nossos Serviços</h2>
        <p id='desc'>Escolha o serviço e faz o pedido pelo nosso WhatsApp</p>
        <div className="cartoes">
          {servicos.map((item) => (
            <CartaoServico key={item.id} servico={item} />
          ))}
        </div>
      </section>

      <section className="como-funciona">
        <div>
            <h3>Como fazer o Pedido?</h3>
            <ol className='passos'>
                <li className='lista'>Escolhe o serviço que queres.</li>
                <li className='lista'>Clica em "Fazer pedido" e fala connosco no WhatsApp.</li>
                <li className='lista'>Combinamos o dia e a hora.</li>
                <li className='lista'>Vem ao salão e relaxa.</li>
            </ol>
        </div>
      </section>
    </>
  )
}
export default Home