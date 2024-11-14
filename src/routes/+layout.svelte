<script lang="ts">
    import "../app.css";
    let { children } = $props();
</script>

<svelte:head>
    <title>TigerBash 🎉</title>
    <meta property="og:title" content="TigerBash 🎉" />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
</svelte:head>

{@render children()}
