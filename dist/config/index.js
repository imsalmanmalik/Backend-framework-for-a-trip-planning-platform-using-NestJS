"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.Config = {
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
//# sourceMappingURL=index.js.map