import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();
const handleLogin = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("✅ Login Successful");
      navigate("/profile");  
    } else {
      alert(`❌ ${data.message}`);
    }
  } catch (err) {
    alert("Something went wrong. Please try again later.");
  }
};


    
  

  return (
    <>
      <div className="login">
        <h1>Foody World 🍕 Login</h1>
                <input
          type="text"
          placeholder="Phone Number, Username, Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>🍜 Login</button>
        <hr /> 
        <h6> OR</h6><hr />
        <br />
        <div className="yes">
        <a href="">Forgot password?</a>
        </div>
        <div className="another">
        <h3>
          Do not have an account?{" "}
        </h3>
          <span
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer", color: "red" }}
          >
            Sign up
          </span>
       
        </div>
      </div>

     
    </>
  );
}
