import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const resgisterController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name || !email || !password || !phone || !address) {
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
    const userData = { name, email, password: hashedPassword, phone, address };
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

//test controller
export const testController = (req, res) => {
  res.send("Protected routes")
}
