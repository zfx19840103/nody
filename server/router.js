import express from 'express'
 
import { userGet } from './API/user.js'
 
const router = express.Router()
router.get('/user', userGet)
 
export default router