
<script>
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
    <slot />
</main>

<style>
    main {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>