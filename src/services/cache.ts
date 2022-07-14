import { createClient } from 'redis';
import config from '../../config';

export default async function () {
  const client = createClient({
    // redis[s]://[[username][:password]@][host][:port][/db-number]
    url: `redis://${config.redis.username}:${config.redis.password}@${config.redis.host}:${config.redis.port}`,
  });

  await client.connect();

  client.on('error', (err) => {
    console.log('Error ' + err);
  });

  return client;
}
