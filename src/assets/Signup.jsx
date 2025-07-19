import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();

  function handlebutton() {
  const email = document.querySelector("input[placeholder='Mobile Number or Email']").value;
  const password = document.querySelector("input[placeholder='Password']").value;
  const fullName = document.querySelector("input[placeholder='Full Name']").value;
  const username = document.querySelector("input[placeholder='Username']").value;
  const location = document.getElementById("location").value;

  // Send data to backend
  fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, fullName, username, location }),
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      navigate("/");
    })
    .catch(err => {
      alert("Something went wrong!");
      console.error(err);
    });
}


  return (
    <>
      <div className="signup">
        <h1>🍽️ Join Foody World Today!</h1>
      
       
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
          🎉 Create Account

        </button>
        <div className="other">
        <h6>Have an account?</h6>
        <span
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer", color: "red" }}
        >
          Login
        </span>
      </div>
      </div>

      
    </>
  );
}
