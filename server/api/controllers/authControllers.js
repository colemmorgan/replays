const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");


const registerUser = async (req, res) => {
  try {
    const {email, password, epicId, epicUsername } = req.body;
    if (!epicUsername) {
      return res.json({ error: "Name is required" });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long.",
      });
    }
    if(epicId.length != 32) {
      return res.json({error: "Invalid Epic Id Size."})
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email is taken already" });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      email,
      password: hashedPassword,
      epicId,
      epicUsername
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "No user found" });
    }
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, epicId: user.epicId, epicUsername: user.epicUsername, games: user.games },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    } else {
      return res.json({ error: "Password does not match." });
    }
  } catch (error) {
    console.log(error);
  }
};


const logoutUser = (req, res) => {
  try {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred during logout' });
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) {
        res.status(401).json({ error: "Invalid token" });
      } else {
        res.json(user);
      }
    });
  } else {
    res.status(401).json({ error: "No token provided" });
  }
};

module.exports = {
  logoutUser,
  registerUser,
  loginUser,
  getProfile
};
