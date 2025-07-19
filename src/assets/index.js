const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");  // Needed to connect frontend and backend
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/loginDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// Schema and Model
const loginSchema = new mongoose.Schema({
    usernameOrEmail: String,
    password: String
});

const Login = mongoose.model("Login", loginSchema);

// POST route to store login data
app.post("/api/login", async (req, res) => {
    const { usernameOrEmail, password } = req.body;
    try {
        const newLogin = new Login({ usernameOrEmail, password });
        await newLogin.save();
        res.status(201).json({ message: "Login data stored successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save login data" });
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
