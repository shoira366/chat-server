CREATE DATABASE test;

CREATE TABLE users(
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    username varchar(64) unique not null,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chat(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name varchar(32) unique not null,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chat_user(
    chat_id uuid REFERENCES chat(id) not null,
    user_id uuid REFERENCES users(id) not null
);

CREATE TABLE chat_message(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    chat_id uuid,
       FOREIGN KEY(chat_id)
       REFERENCES chat(id)
       ON DELETE CASCADE,
    author uuid,
        FOREIGN KEY(author)
        REFERENCES users(id)
        ON DELETE SET NULL,
    body text,
    created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);