import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import './NavBarC.scss'
import { useState, useRef } from "react";
import useOnScreen from "../../../shared/hooks/onScreen";
export default function NavbarC(_: {
  button: string,
  buttonUrl: string,
  menu: {
    name: string,
    url: string,
  }[]
}) {
  const { button, buttonUrl, menu } = _
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="logo">O<span>|</span>N</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menu.map((e, i) => {
          let ref = useRef<HTMLElement>(document.getElementById(e.url.replace("#", "")))
          return (
            <NavbarItem key={`nvItem${i}`} isActive={ref.current === null ? false : useOnScreen(ref)}>
              <Link color="foreground" href={e.url} >{e.name}</Link>
            </NavbarItem>
          )
        })}
        <NavbarItem>
          <Button as={Link} color="primary" href={buttonUrl} variant="flat">
            {button}
          </Button>
        </NavbarItem>
        <NavbarMenu>
          {menu.map((e, i) => {
            let ref = useRef<HTMLElement>(document.getElementById(e.url))
            return (
              <NavbarItem key={`nvItem${i}`} isActive={ref.current === null ? false : useOnScreen(ref)}>
                <Link color="foreground" href={`#${e.url}`} >{e.name}</Link>
              </NavbarItem>
            )
          })}
          <NavbarItem>
            <Button as={Link} color="primary" href={buttonUrl} variant="flat">
              {button}
            </Button>
          </NavbarItem>
        </NavbarMenu>

      </NavbarContent>
    </Navbar>
  )
}
