import Cross from "../icon/Cross"
import Button from "./Button"
import Input from "./Input"


function CreateContentModal({open , onClose}) {
  return (
    <>
    {open&&  <div className="h-screen w-screen fixed top-0 left-0 bg-slate-300 opacity-70 flex justify-center items-center" >
        <div className="bg-white p-4 rounded-md shadow-md w-sm p-4 flex flex-col justify-center">
          <div className="flex justify-end text-red-800">
            <button className="cursor-pointer" onClick={onClose}><Cross/></button>
          </div>
          <Input placeholder="enter url" />
          <Input placeholder="Enter the title"/>
          
          <Button  text="Submit" variant="primary"  />
          </div>
    </div>}
    
    </>
  )
}

export default CreateContentModal