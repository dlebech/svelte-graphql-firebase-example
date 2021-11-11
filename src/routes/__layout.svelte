<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
</script>

<div class="container mx-auto">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style lang="postcss">
  main {
    @apply flex flex-wrap flex-col items-center justify-center gap-4;
  }
</style>
