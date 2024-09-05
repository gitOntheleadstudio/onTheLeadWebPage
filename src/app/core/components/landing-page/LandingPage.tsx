import Spline from '@splinetool/react-spline'
import './LandingPage.scss'

function LandingPage() {
  const items = [{title:"primero", desc : "aqui va descripcion"}]
  const slides = [<p>hola</p>,<p>hola</p>,<p>hola</p>,<p>hola</p>,<p>hola</p>]
  const counter = [{name: 'primer', desc: 'primer counter', start: 0, end:1000},{name: 'segundo', desc: 'segundo counter', start: 0, end:1000}]
  return (
    <div>
      <Spline style={{ height: "100vh", position: "sticky" }} scene="https://prod.spline.design/3R7hJqeKzbu8wVLN/scene.splinecode" />
    </div>
  )
}

export default LandingPage