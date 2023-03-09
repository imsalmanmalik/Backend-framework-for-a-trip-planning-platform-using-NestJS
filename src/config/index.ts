import * as dotenv from 'dotenv';
dotenv.config();

export const Config = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  port: process.env.PORT,
  secret: process.env.SECRET,
};
