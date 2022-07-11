"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const config_1 = __importDefault(require("../config"));
async function default_1() {
    const client = (0, redis_1.createClient)({
        url: `redis://${config_1.default.redis.username}:${config_1.default.redis.password}@${config_1.default.redis.host}:${config_1.default.redis.port}`,
        // redis[s]://[[username][:password]@][host][:port][/db-number]
    });
    await client.connect();
    client.on('error', (err) => {
        console.log('Error ' + err);
    });
    return client;
}
exports.default = default_1;
