import Slider from 'react-slick'
import './Reviews.scss'
import { FaQuoteRight } from 'react-icons/fa6'
export default function Reviews(_: {
    reviews: {
        name: string,
        role: string,
        avatar: string,
        text: string
    }[]
}) {
    const { reviews } = _
    const slideSettings = {
        className: "sliderFormulary",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="description">
            <Slider {...slideSettings}>
                {reviews.map((e, i, arr) => {
                    if (i % 2 === 0) {
                        return (
                            <div key={`review${i}`} className="review-box">
                                <div className="reviews">
                                    <div className="review top">
                                        <div className="avatar">
                                            <img src={e.avatar} alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="header">
                                                <h3>{e.name} <br /> {e.role}</h3>
                                                <FaQuoteRight />
                                            </div>
                                            <div className="description">
                                                <p>{e.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review bottom">
                                        <div className="avatar">
                                            <img src={arr[i + 1].avatar} alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="header">
                                                <h3>{arr[i + 1].name} <br /> {arr[i + 1].role}</h3>
                                                <FaQuoteRight />
                                            </div>
                                            <div className="description">
                                                <p>{arr[i + 1].text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return ""
                })}

            </Slider>
        </div>
    )
}
