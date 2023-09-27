import express from "express";
import message from "./message.js";

const router = express.Router();

export default router.post("/get", message.GET).post("/add", message.POST);
