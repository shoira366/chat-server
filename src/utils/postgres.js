import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgres://jriyanli:TZRsgKa2xq9XLl9yPF5NydOmBwlRXZK0@rajje.db.elephantsql.com/jriyanli",
});

// postgres://postgres:shoira@localhost:5432/test

export const fetchData = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params.length ? params : null);
    return rows;
  } finally {
    client.release();
  }
};

export const fetchSingleData = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const {
      rows: [row],
    } = await client.query(SQL, params.length ? params : null);
    return row;
  } finally {
    client.release();
  }
};
