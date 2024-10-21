import Slider from 'react-slick'
import './Reviews.scss'
export default function Reviews(props: {
    _: {
        title: string,
        titleFocus: string,
        reviews: {
            name: string,
            web: string,
            logo: string,
            text: string
        }[]
    }
}) {
    const _ = props._
    const slideSettings = {
        className: "sliderReviews",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='reviews'>
            <h1 className='title'>Los <span className='text-focus'>resultados</span> hablan por sí solos</h1>
            <Slider {...slideSettings}>
                {_.reviews.map((e, i) => {
                    return (
                        <div key={`review-${i}`} className="review-box">
                            <div className="review">
                                <div className="header">
                                    <h1>{e.name}</h1>
                                    <p>{e.web}</p>
                                </div>
                                <div className="text">
                                    <img className='quotationsStart' width="60px" src="/quotationsStart.png" alt="" />
                                    <h2>{e.text}</h2>
                                    <img className='quotationsEnd' width="60px" src="/quotationsEnd.png" alt="" />
                                </div>
                                <div className="center-box">
                                    <div className="avatar">
                                        <img src={e.logo} alt="Client photo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
/**
 
 */
