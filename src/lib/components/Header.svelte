<script lang="ts">
  import { page } from '$app/stores';
</script>

<header>
  <nav>
    <ul>
      <li class:active={$page.path === '/'}><a href="/">Home</a></li>
      <li class:active={$page.path === '/account'}><a href="/account">Account</a></li>
    </ul>
  </nav>
</header>

<style lang="postcss">
  header {
    @apply flex justify-between;
  }

  nav {
    @apply flex mx-auto;
  }

  ul {
    @apply h-12 flex justify-center items-center;
  }

  nav a {
    @apply px-3
      py-0
      text-blue-600
      text-sm
      font-bold
      uppercase
      no-underline
      tracking-widest
      hover:text-blue-400
      hover:transition
      hover:duration-200
      hover:ease-linear;
  }

  li.active a {
    @apply text-yellow-500;
  }
</style>
