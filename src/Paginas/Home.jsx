import Hero from '../components/Hero/Hero'
import CartaoServico from '../components/CartaoServico/CartaoServico'
import { servicos } from '../data/servicos'

function Home() {
  return (
    <>
      <Hero />

      <section id="pedidos" className="servicos">
        <h2>Electric Coins</h2>
        <div className="cartoes">
          {servicos.map((item) => (
            <CartaoServico key={item.id} servico={item} />
          ))}
        </div>
      </section>

      <section className="como-funciona">{/* passos */}</section>
      <section className="cta">{/* chamada final */}</section>
    </>
  )
}
export default Home