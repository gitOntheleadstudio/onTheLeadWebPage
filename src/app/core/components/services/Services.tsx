import './Services.scss'
import { useState } from 'react'
export default function Services(_: {
  title: string,
  slider: { title: string, desc: string, video: string }[]
}) {
  const { title, slider } = _
  const [service, setService] = useState(0)
  return (
    <div className="services section">
      <h1>{title} </h1>
      <div className="serviceButtons">
        {slider.map((e, i) => {
          return (
            <button key={`button-${i}`} className={`serviceButton ${i === service ? "active" : ""}`}
              onClick={() => setService(i)} ><h3>{e.title}</h3></button>
          )
        })}
      </div>
      <div className="content">
        <div className='text'>
          <h3>{_.slider[service].desc}</h3>
        </div>
        <div className="video-box">
          <img src={_.slider[service].video} alt="" />
        </div>
      </div>
    </div>
  )
}
