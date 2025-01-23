import { createClient } from 'redis';
import { env } from '$env/dynamic/private';
import { building } from '$app/environment';


export const client = createClient({
    url: env.REDIS_URL
});

client.on('error', err => console.log('Redis Client Error', err));

if (!building) await client.connect();