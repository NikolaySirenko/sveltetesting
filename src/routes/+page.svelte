<script>
    export let data;
    let count = data.counter;

    async function increment() {
        count += 1;

        const response = await fetch('/api/setCounter', {
            method: 'POST',
            body: JSON.stringify({ counter: count }),
            headers: {'Content-Type': 'application/json'}
        });

        const data = await response.json();

        if (response.ok) {
            count = data.newValue;
        }
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button on:click={increment}>
    Count: {count}
</button>