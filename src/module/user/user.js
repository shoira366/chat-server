import { Exception } from "../../exception/exception.js";
import { getUsers, postUsers } from "./model.js";

export default {
  GET: async (_, res, next) => {
    const allUsers = await getUsers().catch((err) =>
      next(new Exception(err.message, 503))
    );
    if (allUsers) res.json(allUsers);
  },
  POST: async (req, res, next) => {
    const { username } = req.body;
    const newUser = await postUsers(username).catch((err) =>
      next(new Exception(err.message, 503))
    );
    if (newUser)
      res.status(201).json({
        status: 201,
        message: "User successfully created",
      });
  },
};
