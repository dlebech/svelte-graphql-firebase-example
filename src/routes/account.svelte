<script>
  import { user } from '$lib/stores';
  import UserInfo from '$lib/components/account/UserInfo.svelte';
</script>

<svelte:head>
  <title>Account page</title>
</svelte:head>

{#if $user}
  <UserInfo />
{:else}
  <p>You are <b>not</b> logged in</p>
{/if}
