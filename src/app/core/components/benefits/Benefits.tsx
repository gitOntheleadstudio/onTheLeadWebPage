import Slider from 'react-slick'
import './Benefits.scss'
export default function Benefits(props: {
    _: {
        title: string,
        slider: {
            title: string,
            text: string,
            video: string
        }[]
    }
}
) {
    const _ = props._
    const slideSettings = {
        className: "sliderBenefit",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    };
    return (
        <div className='benefits'>
            <h1>{_.title}</h1>
            <Slider {...slideSettings}>
                {_.slider.map((e, i) => {
                    return (
                        <div key={`benefit-${i}`} className="benefit">
                            <div className="content">
                                <div className="text">
                                    <h2>{e.title}</h2>
                                    <p>{e.text}</p>
                                </div>
                                <div className="video">
                                    <video autoPlay muted loop>
                                        <source src={e.video} type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
