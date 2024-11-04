import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import './Footer.scss'
import { Button, Link } from "@nextui-org/react";
export default function Footer(_: {
    title: string,
    subtitle: string,
    button: string,
    buttonUrl: string,
    igLink: string,
    faLink: string,
    wsp: string,
    mail: string
}) {
    const { title, subtitle, button, igLink, faLink, wsp, mail, buttonUrl } = _
    return (
        <section className='footer'>
            <div className="footer-bkg">
                <div className="footer-bkg-image">
                    <img src="./footer.svg" alt="" />
                </div>
                <div className="footer-content">
                    <div className="title">
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                        <Button className="bg-background text-focus " as={Link} href={buttonUrl}><h2>{button}</h2></Button>
                    </div>
                    <div className="footer-info">
                        <div className="icons">
                            <a href={igLink}><FaInstagram /></a>
                            <a href={faLink}><FaLinkedin /></a>
                        </div>
                        <div className="contact"><FaWhatsapp /><p>{wsp}</p></div>
                        <div className="contact"><IoMailOutline /><p>{mail}</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
