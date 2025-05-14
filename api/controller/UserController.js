import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const addUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists with this email' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10); // hash password here
  
      const newUser = new User({
        name,
        email,
        password: hashedPassword, // store hashed password
      });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding user' });
    }
  };
  
  export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
    
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
  
      const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT Token
      const token = jwt.sign(
        { userId: existingUser._id, email: existingUser.email },
        process.env.JWT_SECRET || 'yoursecretkey', 
        { expiresIn: '1d' }
      );
  
      res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error logging in user' });
    }
  };