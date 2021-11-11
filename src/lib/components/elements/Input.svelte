<script lang="ts">
  export let id: string;
  export let type = 'text';
  export let value = '';
  export let placeholder = '';

  // https://stackoverflow.com/a/57393751/2021517
  function handleInput(e) {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
  }
</script>

<input {id} {type} {placeholder} {value} on:input={handleInput} />

<style lang="postcss">
  input {
    @apply p-2
      block
      w-full
      shadow-sm
      sm:text-sm
      border
      bg-gray-50
      border-gray-300
      border-opacity-50
      rounded-md
      focus:border-blue-500
      focus:outline-none;
  }
</style>
