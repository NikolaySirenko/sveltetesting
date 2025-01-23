import { json } from '@sveltejs/kit';
import { client } from '../../../lib/dbredis.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { counter } = await request.json();

    console.log('Setting counter to', counter);

    const newValue = await client.incr('counter');

    return json({ newValue });
};