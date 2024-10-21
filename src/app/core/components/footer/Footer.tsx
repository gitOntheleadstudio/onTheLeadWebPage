import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import './Footer.scss'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-bkg">
                <img src="./footer.svg" alt="" />
                <div className="footer-content">
                    <div className="title">
                        <h1>Empecemos <br></br> <span className='text-focus'>ahora</span></h1>
                    </div>
                    <div className="footer-info">
                        <div className="footer-contact">
                            <p><FaWhatsapp />+51 983 844 560</p>
                            <p><IoMailOutline />sales@ontheleadstudio.com</p>
                        </div>
                        <div className="footer-social">
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaLinkedin /></a>
                            <a href=""><FaFacebookSquare /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
