import { Button, Checkbox, Input } from "@nextui-org/react";
import './Formulary.scss'
import { FormEvent, useRef, useState } from "react";
export default function Formulary(_: {
  title: string
}) {
  const {title} = _
  const formRef = useRef<HTMLFormElement>(null)
  const [isContact, setIsContact] = useState(false)
  const [isAccept, setIsAccept] = useState(false)
  
  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (isAccept) {
      const formData = new FormData(formRef.current!)
      let complete = true
      formData.forEach((v) => {
        if (v === undefined) {
          complete = false
        }
      })
      if (complete) {
        formData.append("CanContact", `${isContact}`)
        formData.append("Accepted", `${isAccept}`)
        formData.forEach((v, k) => { console.log(`${k}: ${v}`) })
        fetch("https://script.google.com/macros/s/AKfycbxbDnKPn9t5U6if6ktfv2-4_TwGXXVk2xJzjgSUUew89ZNp46qnCpI0zTSSzSvsRnpn8w/exec",
          { method: "POST", body: formData, mode: "no-cors" }
        ).then((value) => { console.log(value) })
        alert("Muchas gracias, nos pondremos en contacto")
      }
    } else {
      alert("Aceptar los terminos y condiciones")
    }
  }
  return (
    <form  ref={formRef} className="form" onSubmit={(e) => submitHandler(e)}>
        <h2>{title}</h2>
        <div className="form-inputs">
          <Input required label="Nombre Completo" name="Name" labelPlacement="outside" placeholder="Ingresa tus nombres" className="border-2 border-slate-700 rounded-lg"></Input>
          <div className="form-contact">
            <Input required label="Correo" type="email" name="Email" labelPlacement="outside" placeholder="Ingresa tu correo" className="border-2 border-slate-700 rounded-lg"></Input>
            <Input required label="Whatsapp o celular" name="Phone" labelPlacement="outside" placeholder="Ingresa tu telefono" className="border-2 border-slate-700 rounded-lg"></Input>
          </div>
          <Input required label="Objetivo de Marketing" name="Objective" labelPlacement="outside" placeholder="Ingresa tu objetivo" className="border-2 border-slate-700 rounded-lg"></Input>
          <Checkbox isSelected={isContact} onValueChange={setIsContact}>Deseo que me escriban para futuros webinars y campañas</Checkbox>
          <Checkbox required isSelected={isAccept} onValueChange={setIsAccept}>Acepto los Terminos y Condiciones</Checkbox>
        </div>
        <Button type="submit" className="bg-focus text-white" radius="full" fullWidth>ENVIAR</Button>
      </form>
  )
}
