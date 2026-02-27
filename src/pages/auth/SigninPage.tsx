  import  { useState, type ComponentProps } from "react"
  import AuthCard from "../../components/AuthCard";
  import axios from "axios";
  import { BACKEND_URL } from "../../Config";
  import { useNavigate } from "react-router-dom";
  function SigninPage() {
      const [username,setUsername]=useState("")
      const [password,setPassword]=useState("")
      const [error,setError]=useState("")
      const [loading,setLoading]=useState(false)
      const navigate= useNavigate()

    const handleSignIn :ComponentProps<"form">["onSubmit"]= async (e) => {
            e.preventDefault();
            if (!username || !password) {
              setError("Please fill all fields");
                  return;
                }
            
            try {
              setLoading(true);
            setError("")
              const res = await axios.post(`${BACKEND_URL}/auth/signin`,{
                username,
                password
              })
              if(res.data.token){
                localStorage.setItem("token",res.data.token);
                alert("Login Successful!")
                navigate("/dashboard")
              }else{
                setError(res.data.message||"Invalid Crediantials")
              }            
            } catch (error) {
              console.error("Login Error",error)
              setError("server Error Please try again later")
            }finally{
              setLoading(false)
            }
    };
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100" >
          <AuthCard
          title="Sign-In"
          fields={[
              { placeholder: "Enter Username", onChange: setUsername, type: "text" },
              { placeholder: "Enter Password", onChange: setPassword, type: "password" }
          ]}
          buttonText={loading ? "Signing in..." : "Sign-In"}
          onSubmit={handleSignIn}
          error={error}
          authText="Create Account"
          redirect="/signup"
          />
      </div>
    )
  }

  export default SigninPage