import { Button, Checkbox, Input } from "@nextui-org/react";
import './Formulary.scss'
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa6";
export default function Formulary(props: {
  _: {
    title: string,
    reviews: {
      name: string,
      role: string,
      avatar: string,
      text: string
    }[]
  }
}) {
  const _ = props._
  const slideSettings = {
    className: "sliderFormulary",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section id="formulary" className="formulary">
      <div className="description">
        <Slider {...slideSettings}>
          {_.reviews.map((e, i, arr) => {
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
      <div className="form">
        <h2>¡Quiero que me contacte un <span className="text-focus">ejecutivo</span>!</h2>
        <div className="form-inputs">
          <Input label="Nombre Completo" labelPlacement="outside" placeholder="Ingresa tus nombres" className="border-2 border-slate-700 rounded-lg"></Input>
          <div className="form-contact">
            <Input label="Correo" type="email" labelPlacement="outside" placeholder="Ingresa tu correo" className="border-2 border-slate-700 rounded-lg"></Input>
            <Input label="Whatsapp o celular" labelPlacement="outside" placeholder="Ingresa tu telefono" className="border-2 border-slate-700 rounded-lg"></Input>
          </div>
          <Input label="Objetivo de Marketing" labelPlacement="outside" placeholder="Ingresa tu objetivo" className="border-2 border-slate-700 rounded-lg"></Input>
          <Checkbox>Deseo que me escriban para futuros webinars y campañas</Checkbox>
          <Checkbox>Acepto los Terminos y Condiciones</Checkbox>
        </div>
        <Button className="bg-focus text-white" radius="full" fullWidth>ENVIAR</Button>
      </div>
    </section>
  )
}
