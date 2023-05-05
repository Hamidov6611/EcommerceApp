import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const resgisterController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer, } = req.body;
    //validations
    if (!name || !email || !password || !phone || !address || !answer) {
      return res.send({ message: "All fields is required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting User
    if (exisitingUser) {
      return res.status(200).json({
        ok: false,
        message: "Already Register please login",
      });
    }
    //register User
    const hashedPassword = await hashPassword(password);
    //save
    const userData = { name, email, password: hashedPassword, phone, address, answer };
    const user = await userModel.create(userData);

    res.status(201).json({
      ok: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const {email, password} = req.body
    //validation
    if(!email || !password) {
        return res.status(404).send({ 
            ok: false,
            error: "Invalid email or password",
        });
    }
    //check user
    const user = await userModel.findOne({email})
    if(!user) {
        return res.status(404).send({
            ok: false,
            message: "Email is not registered"
        })
    }
    const match = await comparePassword(password, user.password)
    if(!match) {
        return res.status(200).send({
            ok: false,
            message: "Invalid Password"
        })
    }
    //token
    const token = await jwt.sign({_id: user._id},process.env.JWT_SECRET,{expiresIn: '7d'})
    res.status(200).send({
        ok: true,
        message: 'User Login Successfully',
        user: {
            _id: user._id,
            role: user.role,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
        },
        token
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      ok: false,
      message: "Error in login",
      error,
    });
  }
};

//forgotPasswordController
export const forgotPasswordController = async (req, res) => {
  try {
    const {email, answer, newPassword} = req.body
    if(!email) {
      res.status(400).send({
        ok: false,
        message: "Email is required"
      })
    }
    if(!answer) {
      res.status(400).send({
        ok: false,
        message: "Answer is required"
      })
    }
    if(!newPassword) {
      res.status(400).send({
        ok: false,
        message: "New password is required"
      })
    }
    //check
    const user = await userModel.findOne({email, answer})
    //validation
    if(!user) {
      return res.status(404).send({
        ok: false,
        message: 'Wrong Email or Answer'
      })
    }
    const hashed = await hashPassword(newPassword)
    await userModel.findByIdAndUpdate(user.id, {password: hashed})
    res.status(200).send({
      ok: true,
      message: "Successfully reset password"
    })
  } catch (e) {
    console.log(e)
    res.status(500).send({
      ok: false,
      message: 'Something went wrong',
      error
    })
  }
}

//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected routes")
  } catch (error) {
    console.log(error)
    res.send({error})
  }
}
