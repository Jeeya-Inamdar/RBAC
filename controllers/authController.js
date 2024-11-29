const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Role = require("../models/Role");

// Register user
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const userRole = await Role.findOne({ name: "User" });
    if (!userRole)
      return res.status(500).json({ message: "Default role not found" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: userRole._id,
    });

    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login user
// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Use the correct User model
    const user = await User.findOne({ email })
      .populate("role", "name -_id")
      .exec();

    // If user is not found
    if (!user) {
      res.status(401).json({
        status: 401,
        message: "Email or password is invalid!",
      });
      return;
    }

    // Validate password
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({
        status: 401,
        message: "Email or password is invalid!",
      });
      return;
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Logout user (invalidate session)
exports.logoutUser = (req, res) => {
  res.status(200).json({ message: "Logout successful" });
};
