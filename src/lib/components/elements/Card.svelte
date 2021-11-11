<div class="card">
  <slot />
</div>

<style lang="postcss">
  .card {
    @apply flex
      flex-wrap
      flex-col
      gap-3
      p-8
      bg-white border
      border-gray-300
      rounded-md;
  }
</style>
