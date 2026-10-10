import BotaoWhatsapp from '../BotaoWhatsapp/BotaoWhatsapp'
import './Footer.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

function Footer(){

    return(

        <footer className='footer'>
            <div>
                <p>&copy; 2026 Cuyuya Beauty Salon</p>

            </div>
            <div className='contactos'>
                <span>Inhassoro, Inhambane</span>
                <span>Horarios disponiveis: Seg a Sáb, 8h às 18h </span>
                <a href="tel: +258 87 699 8569"> +258 87 699 8569</a>   

                <div className='redes'>    
                    <a href="https://www.facebook.com/cuyuya.vilanculos?locale=pt_BR" target='_blank' rel='noreferrer' aria-label='Facebook'><FaFacebook/></a>
                    <a href="" target='_blank' rel='noreferrer' aria-label='Instagram'> <FaInstagram/></a>
                </div>
            </div>


        </footer>

    )
}

export default Footer