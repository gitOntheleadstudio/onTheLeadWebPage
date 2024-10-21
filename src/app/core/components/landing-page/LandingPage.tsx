import Banner from '../banner/Banner'
import './LandingPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProofOfValue from '../proofOfValue/ProofOfValue';
import barChart from '../../../../assets/barChart.json';
import pieChart from '../../../../assets/PieChart.json';
import funnelChart from '../../../../assets/funnelChart.json';
import Services from '../services/Services';
import NavbarC from '../navbarC/NavbarC';
import Reviews from '../reviews/Reviews';
import Formulary from '../formulary/Formulary';
import Footer from '../footer/Footer';
import Credits from '../credits/Credits';
function LandingPage() {
  const banner = {
    title: "¿Harto de promesas vacias?",
    subtitle1: "Hablemos de",
    subtitle2: "marketing",
    subtitle3: "digital en serio.",
    buttonText: "COMIENZA",
    pictures: [
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp',
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp',
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp',
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp',
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp'
    ]
  }
  const proofOfValue = {
    title: 'Marcas con las que hemos trabajado',
    clientsLogos: [
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp',
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp',
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp',
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp',
      'https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp'
    ]
  }
  const services = {
    title: "Servicios que impulsan el",
    titleFocus: "crecimiento digital de tu negocio",
    slider: [
      {
        title: "Paid Media",
        desc: "Aumenta tus clientes potenciales, reduce tus costos y logra un mayor retorno de la inversión.",
        video: "https://videos.pexels.com/video-files/7989674/7989674-hd_1920_1080_25fps.mp4"
      },
      {
        title: "Social Media",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        video: "https://videos.pexels.com/video-files/7989417/7989417-hd_1080_1920_25fps.mp4"
      },
      {
        title: "Cobertura Audiovisual",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        video: "https://videos.pexels.com/video-files/7989674/7989674-hd_1920_1080_25fps.mp4"
      },
      {
        title: "Desarrollo web UX/UI",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        video: "https://videos.pexels.com/video-files/7989674/7989674-hd_1920_1080_25fps.mp4"
      },
    ],
    counters: [
      {
        name: "Seguidores",
        desc: "",
        start: 0,
        end: 12,
        prefix: "+",
        sufix: ".8%",
        animationData: funnelChart
      },
      {
        name: "Ventas online",
        desc: "",
        start: 0,
        end: 500,
        prefix: "+",
        sufix: "",
        animationData: barChart
      }
    ]
  }
  const reviews = {
    title: "Los  hablan por nosotros",
    titleFocus: "resultados",
    reviews: [
      {
        name:"NextUI",
        web:"nextui.org",
        logo: "https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp",
        text: "Excelente servicio, velocidad y eficiencia. Excelente trabajar con ellos."
      },
      {
        name:"NextUI",
        web:"nextui.org",
        logo: "https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp",
        text: "Excelente servicio, velocidad y eficiencia. Excelente trabajar con ellos."
      },
      {
        name:"NextUI",
        web:"nextui.org",
        logo: "https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp",
        text: "Excelente servicio, velocidad y eficiencia. Excelente trabajar con ellos."
      },
      {
        name:"NextUI",
        web:"nextui.org",
        logo: "https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp",
        text: "Excelente servicio, velocidad y eficiencia. Excelente trabajar con ellos."
      },
      {
        name:"NextUI",
        web:"nextui.org",
        logo: "https://purina.com.pe/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=N2sS0lfp",
        text: "Excelente servicio, velocidad y eficiencia. Excelente trabajar con ellos."
      }
    ]
  }

  return (
    <div className='landing'>
      <NavbarC></NavbarC>
      <Banner _={banner}></Banner>
      <ProofOfValue _={proofOfValue}></ProofOfValue>
      <Services _={services}></Services>
      <Reviews _={reviews}></Reviews>
      <Formulary></Formulary>
      <Footer></Footer>
      <Credits></Credits>
    </div>
  )
}

export default LandingPage