import { useState } from "react";
import AuthCard from "../../components/AuthCard";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Call API here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <AuthCard
        title="Create Account"
        fields={[
          { placeholder: "Email", onChange: setEmail, type: "email" },
          { placeholder: "Password", onChange: setPassword, type: "password" }
        ]}
        buttonText="Sign Up"
        onSubmit={handleSignup}
      />
    </div>
  );
}

export default SignupPage;