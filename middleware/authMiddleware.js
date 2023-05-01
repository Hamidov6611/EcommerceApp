import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignin = async (req, res, next) => {
  try {
    const decode = await jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode
    next();
  } catch (e) {
    console.log(e);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        ok: false,
        message: "Unauthorization Access",
      });
    } 
      next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ 
        ok: false, 
        error,
        message: "Error in admin middleware"
    });
  }
};
