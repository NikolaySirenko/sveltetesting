import { createClient } from 'redis';
import { env }from '$env/dynamic/private'


export const client = createClient({
    url: env.REDIS_URL
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();