require('dotenv').config();

export default {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    username: process.env.REDIS_USERNAME,
  },
  cacheEnabled: process.env.CACHE_ENABLED || false
};
