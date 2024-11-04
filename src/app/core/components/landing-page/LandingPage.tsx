import Banner from '../banner/Banner'
import './LandingPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProofOfValue from '../proofOfValue/ProofOfValue';
import Services from '../services/Services';
import NavbarC from '../navbarC/NavbarC';
import Formulary from '../formulary/Formulary';
import Footer from '../footer/Footer';
import Credits from '../credits/Credits';
import Benefits from '../benefits/Benefits';
import { FaWhatsapp } from 'react-icons/fa6';
import db from '../../routers/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ComponentProps, useEffect, useState } from 'react';
import { bannerConv, benefitsConv, FooterConv, FormularyConv, iPages, NavbarConv, PofConv, ServicesConv } from '../../Utils/Interfaces';
import Utils from '../../Utils/Utils';
import Reviews from '../reviews/Reviews';

function LandingPage() {
  const q = collection(db, "pages")
  const [loaded, setLoaded] = useState(false)
  const [navbar, setNavbar] = useState<ComponentProps<typeof NavbarC>>()
  const [banner, setBanner] = useState<ComponentProps<typeof Banner>>()
  const [pof, setPof] = useState<ComponentProps<typeof ProofOfValue>>()
  const [benefits, setBenefits] = useState<ComponentProps<typeof Benefits>>()
  const [services, setServices] = useState<ComponentProps<typeof Services>>()
  const [formulary, setFormulary] = useState<ComponentProps<typeof Formulary>>()
  const [footer, setFooter] = useState<ComponentProps<typeof Footer>>()

  useEffect(() => {
    getDocs(q).then((v) => {
      v.forEach((e) => {
        const res = e.data() as iPages
        setNavbar(NavbarConv(res))
        setBanner(bannerConv(res))
        setPof(PofConv(res))
        setBenefits(benefitsConv(res))
        setServices(ServicesConv(res))
        setFormulary(FormularyConv(res))
        setFooter(FooterConv(res))

        //console.log(setBanner(bannerConv(res)))
      })
    }).then(() => setLoaded(true))
  }, [])


  return (
    <div className='landing'>
      <div className="wsp">
        <button>
          <a href="https://wa.me/message/THGWETKI4R3JH1?src=qr"><FaWhatsapp /></a>
        </button>
      </div>
      {Utils.asyncComponent(NavbarC, navbar, loaded)}
      <section id='banner'>
        {Utils.asyncComponent(Banner, banner, loaded)}
      </section>
      <section id='pof'>
        {Utils.asyncComponent(ProofOfValue, pof, loaded)}
      </section>
      <section id='benefits'>
        {Utils.asyncComponent(Benefits, benefits, loaded)}
      </section>
      <section id='services'>
        {Utils.asyncComponent(Services, services, loaded)}
      </section>
      <section className='formulary'>
        {Utils.asyncComponent(Reviews, formulary, loaded)}
        <div id='formulary'>
          {Utils.asyncComponent(Formulary, formulary, loaded)}
        </div>
      </section>
      {Utils.asyncComponent(Footer, footer, loaded)}
      <Credits></Credits>
    </div>
  )
}

export default LandingPage