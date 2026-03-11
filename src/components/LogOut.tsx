import Button from "./Button"
import { useNavigate } from "react-router-dom";
function LogOut() {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate('/')
    }
  return (
    <>
    <Button text="Log Out" onClick={handleLogout} variant="primary" fullWidth/>
    </>
  )
}

export default LogOut