import Hero from '../Componentes/Hero/Hero'
import CartaoServico from '../Componentes/CartaoServico/CartaoServico'
import { servicos } from '../Data/Servicos'
import './Home.css'


function Home() {
  return (
    <>
      <Hero />

      <section id="pedidos" className="servicos">
        <h2>Os nossos Servicos</h2>
        <p>Escolha o servico e faz o pedido pelo nosso WhatsApp</p>
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
      <section className="cta">
        <div>
            <h3>Pronta para ficar ainda mais bonita?</h3>
        </div>
      </section>
    </>
  )
}
export default Home