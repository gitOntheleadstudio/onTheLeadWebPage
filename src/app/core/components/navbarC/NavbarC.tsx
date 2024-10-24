import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import './NavBarC.scss'
import { useState } from "react";
export default function NavbarC() {
  const [activePivot, setActivePivot] = useState(0)
  const banner = document.getElementById('banner')?.clientHeight
  const pof = document.getElementById('pof')?.clientHeight
  const services = document.getElementById('services')?.clientHeight
  const benefits = document.getElementById('benefits')?.clientHeight
  const formulary = document.getElementById('formulary')?.clientHeight
  window.onscroll = function (e) {
    let scroll = window.scrollY
    console.log(scroll, banner)
    if (scroll > banner! + pof! + services! + benefits! + formulary!) {
      setActivePivot(5)
    } else if (scroll > banner! + pof! + services! + benefits!) {
      setActivePivot(4)
    } else if (scroll > banner! + pof! + services!) {
      setActivePivot(3)
    } else if (scroll > banner! + pof!) {
      setActivePivot(2)
    } else if (scroll > banner!) {
      setActivePivot(1)
    } else {
      setActivePivot(0)
    }
  }
  return (
    <Navbar isBlurred={false}>
      <NavbarBrand>
        <p className="logo">O<span>|</span>N</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive={activePivot === 0 ? true : false}>
          <Link color="foreground" href="#" >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePivot === 1 ? true : false}>
          <Link color="foreground" href="#pof">
            Clientes
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePivot === 2 ? true : false}>
          <Link color="foreground" href="#services">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePivot === 3 ? true : false}>
          <Link color="foreground" href="#benefits">
            Casos de exito
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activePivot === 4 ? true : false}>
          <Link color="foreground" href="#formulary">
            Contacto
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarItem>
        <Button as={Link} color="primary" href="#formulary" variant="flat">
          Cotizar
        </Button>
      </NavbarItem>
    </Navbar>
  )
}
