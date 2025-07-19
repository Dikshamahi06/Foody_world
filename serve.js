require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json()); 


mongoose.connect("mongodb://localhost:27017/", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ MongoDB Connection Error:", err));


const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: {type:String},
  fullName: {type:String},
  username: {type:String},
  location:{type:String}
});

const User = mongoose.model("User", userSchema);


app.post('/api/signup', async (req, res) => {
  const { email, password, fullName, username, location } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      fullName,
      username,
      location
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





app.post('/api/signup', async (req, res) => {
  const { email, password, fullName, username, location } = req.body;

  try {
    const newUser = new User({ email, password, fullName, username, location });
    await newUser.save(); 

    console.log("✅ New user saved:", newUser);
    res.status(201).json({ message: `User ${fullName} signed up and saved!` });
  } catch (err) {
    console.error("❌ Error saving user:", err);
    res.status(500).json({ message: "Server error. Could not save user." });
  }
});
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();  
    res.status(200).json(users);      
  } catch (err) {
    console.error("❌ Error fetching users:", err);
    res.status(500).json({ message: "Server error. Could not fetch users." });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
app.put("/api/users/:id", async (req, res) => {
  const { email, password, fullName, username, location } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { email, password, fullName, username, location }, // Fields to update
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
app.get("/api/profile", verifyToken, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ user });
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/api/users`);
});
