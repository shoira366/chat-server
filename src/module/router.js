import express from "express";
import userRouter from "./user/router.js";
import chatRouter from "./chat/router.js";
import messageRouter from "./chat-message/router.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/chats", chatRouter);
router.use("/messages", messageRouter);

export default router;
