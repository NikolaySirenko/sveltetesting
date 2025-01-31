<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import { theme } from '$lib/stores/theme';
    
    function toggleTheme() {
        theme.update(current => current === 'light' ? 'dark' : 'light');
    }
</script>

<div class={$theme}>
    <Navbar />
    <main>
        <slot />
    </main>
    <button class="theme-toggle" on:click={toggleTheme}>
        {$theme === 'light' ? '🌙' : '☀️'}
    </button>
</div>

<style>
    .light {
        background-color: #ffffff;
        color: #1a1a1a;
        min-height: 100vh;
    }

    .dark {
        background-color: #1a1a1a;
        color: #ffffff;
        min-height: 100vh;
    }

    main {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .theme-toggle {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        padding: 0.5rem;
        border-radius: 50%;
        border: none;
        background: transparent;
        cursor: pointer;
        font-size: 1.5rem;
    }

</style>