import express from 'express'
import { forgotPasswordController, loginController, resgisterController, testController } from '../controllers/authControllers.js'
import { isAdmin, requireSignin } from '../middleware/authMiddleware.js'
import userModel from '../models/userModel.js'

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', resgisterController)

//LOGIN || METHOD POST
router.post('/login', loginController)

//Foorgot Password || POST
router.post('/forgot-password', forgotPasswordController)

//test routes
router.get('/test', requireSignin, isAdmin, testController)

//protected User route auth
router.get('/user-auth', requireSignin, (req, res) => {
    res.status(200).send({ok: true})
})

//protected Admin route auth
router.get('/admin-auth', requireSignin, (req, res) => {
    res.status(200).send({ok: true})
})
router.get('/user', async (req, res) => {
    const {_id} = req.body
    const user = await userModel.findById(_id)
    res.status(200).send({user})
})
export default router