<script lang="ts">
  import { goto } from '$app/navigation';
  import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  } from 'firebase/auth';
  import Button from '$lib/components/elements/Button.svelte';
  import Input from '$lib/components/elements/Input.svelte';
  import Card from '$lib/components/elements/Card.svelte';
  import { errorCodeToErrorText } from '$lib/utils/firebase';

  export let isLogin = true;
  let email = '';
  let password = '';
  let errorMessage: string;
  let isLoading = false;

  async function signin() {
    isLoading = true;
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e, e.code, e.message);
      errorMessage = errorCodeToErrorText(e);
    }
    isLoading = false;
  }

  async function signup() {
    isLoading = true;
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e, e.code, e.message);
      errorMessage = errorCodeToErrorText(e);
    }
    isLoading = false;
  }
</script>

<div class="login">
  <Card>
    <form on:submit|preventDefault={isLogin ? signin : signup}>
      <div class="form-field">
        <label for="email">Email</label>
        <Input id="email" type="email" placeholder="Email" bind:value={email} />
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <Input id="password" type="password" placeholder="Password" bind:value={password} />
      </div>
      <Button type="submit" disabled={isLoading}>
        {#if isLogin}
          Sign in
        {:else}
          Sign up
        {/if}
      </Button>
      {#if errorMessage}
        <p class="error">{errorMessage}</p>
      {/if}
    </form>
  </Card>
</div>

<style lang="postcss">
  .login {
    @apply w-full lg:max-w-md;
  }

  form {
    @apply flex flex-col gap-4;
  }

  .form-field {
    @apply flex flex-col gap-1;
  }
</style>
