import { fetchData } from "../../utils/postgres.js";

const NEW_MESSAGE = `
   INSERT
      INTO 
   chat_message(chat_id, author, body)
      VALUES($1, $2, $3)
   RETURNING id
`;

const CHAT_MESSAGES = `
   SELECT
      chat_message.id,
      chat_message.body AS text,
      users.username AS author_username,
      chat_message.created_at
   FROM
      chat_message
   JOIN
      chat ON chat_message.chat_id = chat.id
   JOIN
      users ON chat_message.author = users.id
   WHERE
      chat.id = $1
   ORDER BY
      chat_message.created_at ASC;
`;

export const getMessage = (chat_id) => fetchData(CHAT_MESSAGES, chat_id);
export const postMessage = (chat, author, body) =>
  fetchData(NEW_MESSAGE, chat, author, body);
