import express from "express";
import courseRouter from "./course/router.js";
import userRouter from "./user/router.js";
import chatRouter from "./chat/router.js";
import messageRouter from "./chat-message/router.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/chats", chatRouter);
router.use("/messages", messageRouter);
router.use("/course", courseRouter);

export default router;
