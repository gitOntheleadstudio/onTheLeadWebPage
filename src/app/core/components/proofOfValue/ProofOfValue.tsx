import './ProofOfValue.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProofOfValue(_: {
    title: string,
    clientsLogos: string[]
}) {
    const { title, clientsLogos } = _
    const slideSettings = {
        className: "sliderProofOfValue",
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    };
    return (
        <section id='pof' className='pof  section'>
            <h1 className='poftitle'>{title}</h1>
            <Slider {...slideSettings}>
                {clientsLogos.map((e, i) => {
                    return (
                        <div className='client' key={'client' + i}><img src={e} alt={"client-" + i} /></div>
                    )
                })}
            </Slider>

        </section>
    )
}
