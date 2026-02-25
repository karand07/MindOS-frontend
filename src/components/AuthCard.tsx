import Button from "./Button"
import Input from "./Input"

interface Field {
  placeholder: string
  onChange: (value: string) => void
  type?: string
}

interface AuthCardProps {
  title: string
  fields: Field[]
  buttonText: string
  onSubmit: () => void
}

function AuthCard({ title, fields, buttonText, onSubmit }: AuthCardProps) {
  return (
    <div className="bg-white border rounded-md max-w-72 p-6 space-y-4">
      <h2 className="text-xl font-semibold text-center">{title}</h2>

      {fields.map((field, index) => (
        <Input
          key={index}
          placeholder={field.placeholder}
          onChange={field.onChange}
          type={field.type ?? "text"}
        />
      ))}

      <Button text={buttonText} variant="primary" onClick={onSubmit} />
    </div>
  )
}

export default AuthCard