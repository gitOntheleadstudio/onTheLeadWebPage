import './Services.scss'
import { useEffect, useRef, useState } from 'react'
import { AiFillCamera, AiFillFacebook, AiOutlineCode, AiOutlineDollarCircle } from 'react-icons/ai'
import Counters from '../../../shared/components/counters/Counters'
import { Button } from '@nextui-org/react'
export default function Services(props: {
  _: {
    title: string,
    titleFocus: string,
    slider: { title: string, desc: string, video: string }[]
    counters: {
      name: string,
      desc: string,
      start: number,
      end: number,
      prefix: string,
      sufix: string,
      animationData: any
    }[]
  }
}) {
  const _ = props._
  const videoRef = useRef<HTMLVideoElement>(null)
  const [service, setService] = useState(0)
  useEffect(() => {
    videoRef.current?.load()
  }, [service])
  return (
    <section className="services">
      <h1>{_.title} <span className='text-focus'>{_.titleFocus}</span></h1>
      <div className="serviceButtons">
        {_.slider.map((e, i) => {
          return (
            <button key={`button-${i}`} className={`serviceButton ${i === service ? "active" : ""}`}
              onClick={() => setService(i)} ><h3>{e.title}</h3></button>
          )
        })}
      </div>
      <div className="content">
        <div className='text'>
          <h2>{_.slider[service].title}</h2>
          <h3>{_.slider[service].desc}</h3>
          <Button radius='full'>Más Información</Button>
        </div>
        <div className="video-box">
          <video ref={videoRef} autoPlay muted loop>
            <source src={_.slider[service].video} type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  )
}
