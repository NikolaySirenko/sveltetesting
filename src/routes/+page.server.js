import { client } from '../lib/dbredis.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let counter = await client.get('counter');

    // Set initial value
    if (counter === null) {
        counter = '0';
        await client.set('counter', 0);
    }

    return { counter: parseInt(counter, 10)  };
};
