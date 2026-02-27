import  type { ComponentProps } from "react"
import Button from "./Button"
import Input from "./Input"
import { NavLink} from "react-router-dom"



interface Field {
  placeholder: string
  onChange: (value: string) => void
  type?: string
}

interface AuthCardProps {
  title: string
  fields: Field[]
  buttonText: string
  error?: string
 onSubmit: ComponentProps<"form">["onSubmit"]
 authText:string
 redirect:string
}

function AuthCard({authText ,error ,title, fields, buttonText, onSubmit ,redirect}: AuthCardProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white border rounded-md max-w-72 p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">{title}</h2>

      {fields.map((field, index) => (
        <Input
          key={index}
          placeholder={field.placeholder}
          onChange={field.onChange}
          type={field.type ?? "text"}
        />
      ))}
      {/* ⭐ ERROR MESSAGE UI */}
      {error && (
        <p className="text-red-500 text-sm text-center">
          {error}
        </p>
      )}

      {/* type="submit" is IMPORTANT */}
      <Button text={buttonText} variant="primary" type="submit" fullWidth={true} />
      <NavLink to={redirect} ><span>{authText}</span></NavLink>
    </form>
  )
}

export default AuthCard