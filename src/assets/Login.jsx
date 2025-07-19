import { useNavigate } from "react-router-dom";

import "./login.css";

export default function Login() {
  const navigate = useNavigate();
    
  

  return (
    <>
      <div className="login">
        <h1>Foody World 🍕 Login</h1>
        <input type="text" placeholder="Phone Number, Username, Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button onClick={() => navigate("/")}>🍜 Login</button>
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
