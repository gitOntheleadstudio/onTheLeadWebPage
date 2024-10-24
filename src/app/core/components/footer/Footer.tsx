import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import './Footer.scss'
import { Button } from "@nextui-org/react";
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-bkg">
                <img src="./footer.svg" alt="" />
                <div className="footer-content">
                    <div className="title">
                        <h1>Elevaremos tu ROI con resultados medibles.</h1>
                        <h3>Nos enfocamos en ventas digitales. <br/> Elevamos tu ROI con resultados medibles.</h3>
                        <Button className="bg-background text-focus "><h2>EMPEZAR</h2></Button>
                    </div>
                    <div className="footer-info">
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaLinkedin /></a>
                        <div className="contact"><FaWhatsapp /><p>+51&nbsp;983&nbsp;844&nbsp;560</p></div>
                        <div className="contact"><IoMailOutline /><p>sales@ontheleadstudio.com</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
