import express from "express";
import { home, test } from "../controllers/user.controller.js";
const router = express.Router();

router.get('/',home)
router.get('/test',test)

export default router;