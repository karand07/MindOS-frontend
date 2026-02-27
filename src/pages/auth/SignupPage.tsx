import { useState, type ComponentProps } from "react";
import AuthCard from "../../components/AuthCard";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../Config";
import axios, { AxiosError } from "axios";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup:ComponentProps<"form">['onSubmit'] = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please fill all fields");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res=await axios.post(`${BACKEND_URL}/auth/signup`, {
        username: username.trim(),
        password,
      });
      console.log("Response:", res)

      navigate("/", { state: { successMessage: "Account created!" } });
    } catch (err) {
      const error = err as AxiosError<any>;
      if (error.response?.data) {
        const data = error.response.data;
        setError(data.message || data.error || data.errors?.[0]?.msg || "Signup failed");
      } else if (error.request) {
        setError("Server not responding");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <AuthCard
        title="Create Account"
        fields={[
          { placeholder: "Enter Username", onChange: setUsername, type: "text" },
          { placeholder: "Enter Password", onChange: setPassword, type: "password" },
        ]}
        buttonText={loading ? "Loading..." : "Sign Up"}
        onSubmit={handleSignup}
        error={error}
        authText="Already have Account"
        redirect="/"
      />
    </div>
  );
}

export default SignupPage;