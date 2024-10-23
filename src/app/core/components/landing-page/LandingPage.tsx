import Banner from '../banner/Banner'
import './LandingPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProofOfValue from '../proofOfValue/ProofOfValue';
import barChart from '../../../../assets/barChart.json';
import funnelChart from '../../../../assets/funnelChart.json';
import Services from '../services/Services';
import NavbarC from '../navbarC/NavbarC';
import Formulary from '../formulary/Formulary';
import Footer from '../footer/Footer';
import Credits from '../credits/Credits';
import Benefits from '../benefits/Benefits';
function LandingPage() {
  const banner = {
    title: "¿Harto de promesas vacias?",
    subtitle1: "Hablemos de",
    subtitle2: "marketing",
    subtitle3: "digital en serio.",
    buttonText: "DESCUBRELO AQUÍ",
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
    title: "Digitalizate. Crece",
    slider: [
      {
        title: "Paid Media",
        desc: "Diseñamos y construimos sitios web impactantes que potencian tu marca y maximizan la experiencia del usuario.",
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
  const formulary = {
    title: "¡Quiero que me contacte un ejecutivo!",
    reviews: [
      {
        name: "Enrique Moris1",
        role: "CCO de Tradeando",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-zf8Ix7KbWz3bGEdhuXxmKdni01fwZPx7_0HT1Vyo2YPcv8Q",
        text: "Para mí, David es el número 1 en España en sistemas de venta automatizados. Cualquier proyecto que quiera llegar al éxito necesita contar con una persona como él."
      },
      {
        name: "Enrique Moris2",
        role: "CCO de Tradeando",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-zf8Ix7KbWz3bGEdhuXxmKdni01fwZPx7_0HT1Vyo2YPcv8Q",
        text: "Para mí, David es el número 1 en España en sistemas de venta automatizados. Cualquier proyecto que quiera llegar al éxito necesita contar con una persona como él."
      },
      {
        name: "Enrique Moris3",
        role: "CCO de Tradeando",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-zf8Ix7KbWz3bGEdhuXxmKdni01fwZPx7_0HT1Vyo2YPcv8Q",
        text: "Para mí, David es el número 1 en España en sistemas de venta automatizados. Cualquier proyecto que quiera llegar al éxito necesita contar con una persona como él."
      },
      {
        name: "Enrique Moris4",
        role: "CCO de Tradeando",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-zf8Ix7KbWz3bGEdhuXxmKdni01fwZPx7_0HT1Vyo2YPcv8Q",
        text: "Para mí, David es el número 1 en España en sistemas de venta automatizados. Cualquier proyecto que quiera llegar al éxito necesita contar con una persona como él."
      },
      {
        name: "Enrique Moris5",
        role: "CCO de Tradeando",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-zf8Ix7KbWz3bGEdhuXxmKdni01fwZPx7_0HT1Vyo2YPcv8Q",
        text: "Para mí, David es el número 1 en España en sistemas de venta automatizados. Cualquier proyecto que quiera llegar al éxito necesita contar con una persona como él."
      },
      {
        name: "Enrique Moris6",
        role: "CCO de Tradeando",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-zf8Ix7KbWz3bGEdhuXxmKdni01fwZPx7_0HT1Vyo2YPcv8Q",
        text: "Para mí, David es el número 1 en España en sistemas de venta automatizados. Cualquier proyecto que quiera llegar al éxito necesita contar con una persona como él."
      },
    ]
  }
  const benefits = {
    title: "Tus éxitos. Nuestro Objetivo.",
    slider: [
      {
        title: 'Resultados que inspiran',
        text: 'Aumenta tus clientes potenciales (leads), reduce tus costos y logra un mayor retorno de la inversión (ROI)',
        video: 'https://videos.pexels.com/video-files/7989674/7989674-hd_1920_1080_25fps.mp4'
      },
      {
        title: 'Resultados que inspiran',
        text: 'Aumenta tus clientes potenciales (leads), reduce tus costos y logra un mayor retorno de la inversión (ROI)',
        video: 'https://videos.pexels.com/video-files/7989674/7989674-hd_1920_1080_25fps.mp4'
      },
      {
        title: 'Resultados que inspiran',
        text: 'Aumenta tus clientes potenciales (leads), reduce tus costos y logra un mayor retorno de la inversión (ROI)',
        video: 'https://videos.pexels.com/video-files/7989674/7989674-hd_1920_1080_25fps.mp4'
      }
    ]
  }

  return (
    <div className='landing'>
      <NavbarC></NavbarC>
      <Banner _={banner}></Banner>
      <ProofOfValue _={proofOfValue}></ProofOfValue>
      <Services _={services}></Services>
      <Benefits _={benefits}></Benefits>
      <Formulary _={formulary}></Formulary>
      <Footer></Footer>
      <Credits></Credits>
    </div>
  )
}

export default LandingPage