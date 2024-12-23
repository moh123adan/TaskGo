import { registerUser, loginUser, logoutUser  } from "../controllers/user.js";
import express from 'express';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);


export default router;
