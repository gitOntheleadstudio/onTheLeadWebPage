import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import './Formulary.scss'
export default function Formulary() {
  return (
    <div className="formulary">
      <div className="description">
        <h1>¿Por qué elegirnos?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className="form">
        <h1>Conversemos</h1>
        <div className="form-inputs">
          <div className="names">
            <Input label="Nombres" labelPlacement="outside" placeholder="Ingresa tus nombres" className="border-2 border-slate-700 rounded-lg"></Input>
            <Input label="Apellidos" labelPlacement="outside" placeholder="Ingresa tus apellidos" className="border-2 border-slate-700 rounded-lg"></Input>
          </div>
          <Input label="Correo" type="email" labelPlacement="outside" placeholder="Ingresa tu correo" className="border-2 border-slate-700 rounded-lg"></Input>
          <Input label="Telefono" type="number" labelPlacement="outside" placeholder="Ingresa tu telefono" className="border-2 border-slate-700 rounded-lg"></Input>
          <Input label="DNI/RUC" type="number" labelPlacement="outside" placeholder="Ingresa tu idenitificación" className="border-2 border-slate-700 rounded-lg"></Input>
          <Select label="¿Qué perfil representa mejor a tu empresa?" labelPlacement="outside" placeholder="Elige una categoría" className="border-2 border-slate-700 rounded-lg">
            <SelectItem key={1}>Micro (Facturación anual de 1 - 150 UIT)</SelectItem>
          </Select>
          <Checkbox>Deseo que me escriban para futuros webinars y campañas</Checkbox>
          <Checkbox>Acepto los Terminos y Condiciones</Checkbox>
        </div>
        <Button className="bg-black text-white" radius="full" fullWidth>Inscribete</Button>
      </div>
    </div>
  )
}
