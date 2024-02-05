import { signupUser } from "../controller/user-controller.js";
import express from "express";


const router= express.Router();
router.post('/signup',signupUser)


export default router;