import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function NavbarC() {
  return (
    <Navbar isBlurred={false}>
      <NavbarBrand>
        <p className="font-bold text-inherit">O|N</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive>
          <Link color="foreground" href="#" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground"  href="#">
            Clientes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Casos de exito
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Conversemos
          </Button>
        </NavbarItem>
    </Navbar>
  )
}
