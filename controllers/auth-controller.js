import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
   
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid username or password');
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } 
};

export const registerDoctor = async (req, res) => {
  const data = req.body;
  try {
    
    const user = await User.findOne({ username: data.username });
    if (user) {
      return res.status(403).send("Doctor with that username already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, parseInt(process.env.SALT_ROUNDS));
    data.password = hashedPassword;

    const newUser = new User(data);
    const result = await newUser.save();

    return res.status(201).send("Doctor created successfully!");

  } catch (error) {
    console.error(error);
    return res.status(500).send("Could not create doctor");
  }
};