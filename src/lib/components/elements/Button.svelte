<script lang="ts">
  export let type = 'button';
  export let disabled = false;
  export let classNames = 'primary';
  export { classNames as class };
</script>

<button {type} class={classNames} {disabled} on:click><slot /></button>

<style lang="postcss">
  button {
    @apply flex
      flex-row
      justify-center
      items-center
      gap-2
      px-4
      py-2
      rounded
      disabled:opacity-50;
  }

  button.primary {
    @apply bg-blue-500
      text-white 
      hover:bg-blue-700;
  }

  button.secondary {
    @apply bg-transparent
      text-black
      border
      border-gray-500
      hover:bg-gray-500;
  }

  button.link {
    @apply p-0
      bg-transparent
      text-gray-900
      underline
      hover:text-gray-600;
  }
</style>
