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
          <a href="https://wa.me/message/THGWETKI4R3JH1?src=qr"><img src="data:image/jpeg;base64,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" alt="" /></a>
        </button>
      </div>
      {Utils.asyncComponent(NavbarC, navbar, loaded)}
      <section id='banner'>
        {Utils.asyncComponent(Banner, banner, loaded)}
      </section>
      <section id='pof'>
        {Utils.asyncComponent(ProofOfValue, pof, loaded)}
      </section>
      <section id='services'>
        {Utils.asyncComponent(Services, services, loaded)}
      </section>
      <section id='benefits'>
        {Utils.asyncComponent(Benefits, benefits, loaded)}
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