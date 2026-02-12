interface Input{
placeholder:string
onChange :()=>void
}

function Input(props:Input) {
  return (
    <input type="text" placeholder={props.placeholder} onChange={props.onChange} className="py-2 px-4 rounded-md shadow-md m-2" />
  )
}

export default Input