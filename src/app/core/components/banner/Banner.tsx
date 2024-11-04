import Spline from '@splinetool/react-spline'
import './Banner.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Link } from '@nextui-org/react'
import Slider from "react-slick";
import { useState } from 'react';
import Utils from '../../Utils/Utils';
export default function Banner(_: {
    title: string,
    subtitle1: string,
    subtitle2: string,
    buttonText: string,
    buttonUrl: string,
    pictures: string[]
    splineUrl: string
}) {
    var { title, subtitle1, subtitle2, pictures, buttonText,  splineUrl, buttonUrl} = _
    const [activeSlide, setActiveSlide] = useState(0)
    const slideSettings = {
        className: "slider",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        beforeChange: (_: number, next: number) => {
            setActiveSlide(next);
        },
    };
    return (
        <div className='banner'>
            <div className={activeSlide === 0 ? 'banner-content cover' : 'banner-content'}>
                <div className='text'>
                    <h1>{Utils.markdownConversion(title)}</h1>
                    <h1>{Utils.markdownConversion(subtitle1)}</h1>
                    <h3>{Utils.markdownConversion(subtitle2)}</h3>
                    <Button as={Link} color='primary' href={buttonUrl} className='button text-background'>{buttonText}</Button>
                </div>
            </div>
            <Spline className={activeSlide === 0 ? 'animation3d cover' : 'animation3d'} style={{ height: "92vh", position: "absolute", display: "block" }} scene={splineUrl} />
            <div className="slider-box">
                <Slider {...slideSettings}>
                    {pictures.map((e, i) => {
                        if (i === 0) {
                            return (
                                <div key={"slide-contentini" + i} className='slider-element'></div>
                            )
                        } else {
                            return (
                                <div key={"slide-content" + i} className='slider-element'>
                                    <img src={e} alt={"Promoción " + i} />
                                </div>
                            )
                        }
                    })}
                </Slider>
            </div>
        </div>
    )
}

