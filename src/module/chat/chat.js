import { Exception } from "../../exception/exception.js";
import { getChats, postChat, chatUser, getChat_by_user } from "./model.js";
// import { findMany } from "../user/model.js";

export default {
  GET: async (req, res) => {
    const { user } = req.body;

    const chatsByUser = await getChat_by_user(user);
    if (chatsByUser) res.json(chatsByUser);
  },
  POST: async (req, res, next) => {
    const { name, users } = req.body;

    const newChat = await postChat(name).catch((err) =>
      next(new Exception(err.message, 503))
    );

    newChat.map((e) => {
      users.map(async (user) => {
        const chat_user = await chatUser(e.id, user);
        console.log(chat_user);
      });
    });

    if (newChat)
      res.status(201).json({
        status: 201,
        message: "Chat successfully created",
        data: newChat,
      });
  },
};
