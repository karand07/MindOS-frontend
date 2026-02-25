import { useState } from "react"
import AuthCard from "../../components/AuthCard";

function SigninPage() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSignIn = ()=>{
         console.log("Email:", email);
          console.log("Password:", password);
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100" >
        <AuthCard
         title="Sign-In"
         fields={[
            { placeholder: "Email", onChange: setEmail, type: "email" },
            { placeholder: "Password", onChange: setPassword, type: "password" }
         ]}
         buttonText="Sign-In"
        onSubmit={handleSignIn}
        />
    </div>
  )
}

export default SigninPage