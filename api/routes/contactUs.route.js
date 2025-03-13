import express from "express";
import { contactUs } from "../controllers/contactUs.controller.js";

const router = express.Router();

router.post("/", contactUs);

export default router;
