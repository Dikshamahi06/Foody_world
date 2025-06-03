import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Lottry.css";

function Lottry() {
    const [numbers, setNumbers] = useState([]); // ✅ Use an empty array
    const [message, setMessage] = useState("");

    useEffect(() =>{
      if (message === "🎉 Congratulations! 🎉" ) {
        document.body.style.backgroundColor = "#90EE90";
      } else if (message == "❌ Try again.") {
        document.body.style.backgroundColor = "#FFCCCB";
      }

    },[message])

    const generateNumber = () => {
        const randomNums = [
            Math.floor(Math.random() * 10) + 1,
            Math.floor(Math.random() * 10) + 1,
            Math.floor(Math.random() * 10) + 1
        ];
        setNumbers(randomNums);

        const sum = randomNums.reduce((acc, num) => acc + num, 0); 

        if (sum === 15) {
            setMessage("🎉 Congratulations! 🎉"  );
        } else {
            setMessage("❌ Try again.");
        }
    };

    return (
        <div className="Cards">
            <h1><u> Welcome to the Lottery Game </u></h1>
            <button onClick={generateNumber}>Generate Numbers</button>

            {numbers.length > 0 && ( // ✅ Ensures numbers exist before rendering
                <>
                    <h2>Generated Numbers: {numbers.join(", ")}</h2> {/* ✅ Improved formatting */}
                    <br />
                    <hr />
                    <h3>Sum: {numbers.reduce((acc, num) => acc + num, 0)}</h3>
                    <h1>{message}</h1>
                </>
            )}
        </div>
    );
}

// ✅ Add PropTypes validation
Lottry.propTypes = {
    cardNum: PropTypes.number.isRequired,
};

export default Lottry;
