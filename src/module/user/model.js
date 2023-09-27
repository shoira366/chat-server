import { fetchData, fetchSingleData } from "../../utils/postgres.js";

const ALL_USERS = `
    SELECT * FROM users;
`;

const NEW_USER = `
    INSERT 
       INTO
    users(username)
       VALUES($1)
    RETURNING id
`;

const GET_BY_ID = `
    SELECT *
       FROM users
    WHERE id = $1
`;

const FIND_MANY = `
    SELECT
       *
    FROM users
    WHERE id = ANY($1)
`;

export const getUsers = (_) => fetchData(ALL_USERS);
export const postUsers = (username) => fetchData(NEW_USER, username);
export const get_by_id = (id) => fetchSingleData(GET_BY_ID, id);
