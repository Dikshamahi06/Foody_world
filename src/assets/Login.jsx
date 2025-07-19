import { useNavigate } from "react-router-dom";

import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = async () => {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,  // replace with actual state values
      password: password
    })
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    alert("✅ Login Successful");
    navigate("/");  // or wherever you want
  } else {
    alert(`❌ ${data.message}`);
  }
};

    
  

  return (
    <>
      <div className="login">
        <h1>Foody World 🍕 Login</h1>
        <input type="text" placeholder="Phone Number, Username, Email" />
        <br />
        <input type="password" placeholder="Password" />
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
