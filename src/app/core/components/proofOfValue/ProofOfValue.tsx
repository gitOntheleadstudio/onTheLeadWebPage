import './ProofOfValue.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';

export default function ProofOfValue(props: {
    _: {
        title: string,
        clientsLogos: string[]
    }
}) {
    const _ = props._
    const imgRef = React.useRef<HTMLImageElement>(null);
    const [bkgColor, setBkgColor] = useState("rgb(0,0,0)")
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
    const readImageData = React.useCallback(() => {
        const img = imgRef.current;
        if (!img?.width) {
            return;
        }
        const { width, height } = img;
        const canvas = document.createElement("canvas");
        canvas.height = height;
        canvas.width = width;
        const context = canvas.getContext?.("2d");
        if (context === null) {
            return;
        }
        context.drawImage(img, 0, 0);
        const imageData = context.getImageData(0, 0, width, height);
        let rgb = { r: 0, g: 0, b: 0 }
        let count = 0
        console.log(`Image Data`, imageData.data);
        for (let i = 0; i < imageData.data.length; i += 20) {
            count += 1
            rgb.r += imageData.data[i];
            rgb.g += imageData.data[i + 1];
            rgb.b += imageData.data[i + 2];
        }
        // ~~ used to floor values
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);
        console.log(`${rgb.r},${rgb.g},${rgb.b}`)
        setBkgColor(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
    }, []);
    /**
     * <div className="fillColor" style={{ backgroundColor: bkgColor }}>
                <img ref={imgRef} crossOrigin="anonymous" onLoad={readImageData} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggHMvwAwUGdfF8jdTUXwz2YhSBhZkJTjSnBdWCkXLKvnT6SI4uIuJTUWkExVR__AWIqI&usqp=CAU"  />
            </div>
     */
    return (
        <section>
            <h1 className='poftitle'>{_.title}</h1>
            <Slider {...slideSettings}>
                {_.clientsLogos.map((e, i) => {
                    return (
                        <div className='client' key={'client' + i}><img src={e} alt={"client-" + i} /></div>
                    )
                })}
            </Slider>
            
        </section>
    )
}
