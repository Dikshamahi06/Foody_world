const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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
  email: {type:String},
  password: {type:String},
  fullName: {type:String},
  username: {type:String},
  location:{type:String}
});

const User = mongoose.model("User", userSchema);




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


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/api/users`);
});
