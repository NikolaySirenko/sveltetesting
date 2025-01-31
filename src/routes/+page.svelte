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

<div class="container">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

    <button on:click={increment}>
        Count: {count}
    </button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 50vh;
        text-align: center;
    }

    button {
        font-size: 2rem;
        padding: 1rem 2rem;
        border-radius: 8px;
        border: 2px solid #666;
        background: #f0f0f0;
        cursor: pointer;
        margin-top: 2rem;
        transition: all 0.2s;
    }

    button:hover {
        background: #e0e0e0;
        transform: scale(1.05);
    }

    button:active {
        transform: scale(0.95);
    }
</style>