import BotaoWhatsapp from '../BotaoWhatsapp/BotaoWhatsapp'
import './Footer.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

function Footer(){

    return(

        <footer className='footer'>
            <div>
                <p>&copy; 2026 Cuyuya Beauty Salon</p>

            </div>
            <div className='redes'>
                <p>[Inhambane Inhassoro]</p>
                <p>Telefone: 876770219</p>
           
                <a href="" target='_blank' rel='noreferrer'> <FaFacebook/></a>
                     
                <a href="" target='_blank' rel='noreferrer'> <FaInstagram/></a>
            </div>


        </footer>

    )
}

export default Footer