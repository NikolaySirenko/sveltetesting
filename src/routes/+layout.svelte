<script>
    import ThemeToggle from '../components/ThemeToggle.svelte';
</script>

<nav style="padding: 1rem;">
    <ThemeToggle />
</nav>

<main>
    <slot />
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 20px;
        transition: background-color 0.3s, color 0.3s;
    }
    main {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
