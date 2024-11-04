import Slider from 'react-slick'
import './Benefits.scss'
export default function Benefits(_: {
    title: string,
    slider: {
        title: string,
        text: string,
        video: string
    }[]
}
) {
    const { title, slider } = _
    const slideSettings = {
        className: "sliderBenefit",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    };
    return (
        <div className='benefits section'>
            <h1>{title}</h1>
            <Slider {...slideSettings}>
                {slider.map((e, i) => {
                    return (
                        <div key={`benefit-${i}`} className="benefit">
                            <div className="content">
                                <div className="text">
                                    <h2>{e.title}</h2>
                                    <p>{e.text}</p>
                                </div>
                                <div className="video">
                                    <video autoPlay playsInline muted loop>
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
