<script>
  import { user } from '$lib/stores';
  import Login from '$lib/components/Login.svelte';
</script>

<svelte:head>
  <title>Front page</title>
</svelte:head>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if !$user}
  <Login />
  <p>Don't have an account? <a href="/signup">Create one</a></p>
{:else}
  <p>You are logged in.</p>
{/if}
