import express from 'express'
import { forgotPasswordController, loginController, resgisterController, testController } from '../controllers/authControllers.js'
import { isAdmin, requireSignin } from '../middleware/authMiddleware.js'

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

export default router