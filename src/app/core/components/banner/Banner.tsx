import Spline from '@splinetool/react-spline'
import './Banner.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@nextui-org/react'
import Slider from "react-slick";
import { useState } from 'react';
export default function Banner(props: { _: { title: string, subtitle1: string, subtitle2: string, subtitle3: string, buttonText: string, pictures: string[] } }) {
    const _ = props._
    const splineUrl = "https://prod.spline.design/qC2fqnUhSpMpkCda/scene.splinecode"
    const [activeSlide, setActiveSlide] = useState(0)
    const slideSettings = {
        className: "slider",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => {
            setActiveSlide(next);
        },
    };
    return (
        <div>
            <section className='banner'>
                <div className={activeSlide === 0 ? 'banner-content cover' : 'banner-content'}>
                    <div className='text'>
                        <h1>{_.title}</h1>
                        <h2>{_.subtitle1}
                            <span className='text-focus'>&nbsp;{_.subtitle2}&nbsp;</span>
                            {_.subtitle3}</h2>
                        <h3>Somos una agencia
                            <span className='text-focus'>&nbsp;digital de Marketing Growth&nbsp;</span>
                            enfocada en generación de leads y conversiones
                        </h3>
                        <Button color='primary' size='lg' className='button text-background'>{_.buttonText}</Button>
                    </div>
                </div>
                <Spline className={activeSlide === 0 ? 'animation3d cover' : 'animation3d'} style={{ height: "92vh", position: "absolute", display: "block" }} scene={splineUrl} />
                <div className="slider-box">
                    <Slider {...slideSettings}>
                        {_.pictures.map((e, i) => {
                            if (i === 0) {
                                return (
                                    <div key={"slide-content" + i} className='slider-element'></div>
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
            </section>
        </div>
    )
}

