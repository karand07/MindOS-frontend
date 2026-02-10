import Cross from "../icon/Cross"


function CreateContentModal({open , onClose}) {
  return (
    <>
    <div className="h-screen w-screen fixed top-0 left-0 bg-slate-300 opacity-70 flex justify-center items-center" >
        <div className="bg-white p-4 rounded-md shadow-md w-md"><div className="flex justify-end text-red-800"><button onClick={onClose}><Cross/></button></div></div>
    </div>
    </>
  )
}

export default CreateContentModal