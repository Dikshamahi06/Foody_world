import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();

  function handlebutton() {
    alert("Sign up successfully");
    navigate("/"); // Navigate to Login page after signup
  }

  return (
    <>
      <div className="signup">
        <h1>SIGN UP</h1>
        {/* <h3>Get yourself what you are craving for?</h3> */}
       
<br />
        <hr />
        <br /><br />
        <input type="text" placeholder="Mobile Number or Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="text" placeholder="Full Name" />
        <br />
        <input type="text" placeholder="Username" />
        <div className="location">
           <label htmlFor="location">Select your Location:</label>

              <select id="location" name="location">
                <option value="">-- Select Location --</option>
                <option value="punjab">Punjab</option>
                <option value="delhi">Delhi</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
                <option value="tamilnadu">Tamil Nadu</option>
              </select>
        </div>
        <h2>
          People who use our service may have uploaded <br />
          your contact information to Instagram{" "}
          <a href="#">Learn More</a>
        </h2>
        <h4>
          By signing up, you agree to our Terms, <br />
          Privacy Policy and Cookies Policy.
        </h4>
        <button onClick={handlebutton}>
          Sign up
        </button>
        <div className="other">
        <h6>Have an account?</h6>
        <span
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer", color: "blue" }}
        >
          Login
        </span>
      </div>
      </div>

      
    </>
  );
}
