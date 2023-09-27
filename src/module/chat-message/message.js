import { Exception } from "../../exception/exception.js";
import { getMessage, postMessage } from "./model.js";
import { get_by_id } from "../user/model.js";
import { getchat_by_id } from "../chat/model.js";

export default {
  GET: async (req, res, next) => {
    const { chat } = req.body;
    const chatMessages = await getMessage(chat).catch((err) =>
      next(new Exception(err.message, 503))
    );

    if (chatMessages) res.json(chatMessages);
  },
  POST: async (req, res, next) => {
    const { chat, author, text } = req.body;

    const newMessage = await postMessage(chat, author, text).catch((err) =>
      next(new Exception(err.message, 503))
    );

    if (newMessage)
      res.status(200).json({
        status: 201,
        message: "Message successfully created",
      });
  },
};
