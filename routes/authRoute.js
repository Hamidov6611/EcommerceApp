import express from 'express'
import { loginController, resgisterController, testController } from '../controllers/authControllers.js'
import { isAdmin, requireSignin } from '../middleware/authMiddleware.js'

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', resgisterController)

//LOGIN || METHOD POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSignin, isAdmin, testController)

export default router