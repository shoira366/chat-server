import { fetchData, fetchSingleData } from "../../utils/postgres.js";

const ALL_CHATS = `
    SELECT * FROM chats;
`;

const chat_user = `
   INSERT INTO chat_user(chat_id, user_id) VALUES($1, $2) RETURNING *
`;

const GET_BY_USER = `
   SELECT
      chat.id,
      chat.name,
      chat.created_at
   FROM
      users
   JOIN
      chat_user ON users.id = chat_user.user_id
   JOIN
      chat ON chat_user.chat_id = chat.id
   WHERE
      users.id = $1
   ORDER BY
      chat.created_at ASC;
`;

const NEW_CHAT = `
   INSERT
      INTO 
   chat(name)
      VALUES($1)
   RETURNING id
`;

const GET_BY_ID = `
   SELECT * 
      FROM chat
   WHERE 
      id = $1
`;

export const getChats = (_) => fetchData(ALL_CHATS);
export const postChat = (name) => fetchData(NEW_CHAT, name);
export const chatUser = (chat, user) => fetchData(chat_user, chat, user);
export const getchat_by_id = (id) => fetchSingleData(GET_BY_ID, id);
export const getChat_by_user = (user) => fetchData(GET_BY_USER, user);
