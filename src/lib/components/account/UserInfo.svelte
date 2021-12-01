<script lang="ts">
  import { user } from '$lib/stores';
  import { getAuth, signOut, sendEmailVerification } from 'firebase/auth';
  import Card from '$lib/components/elements/Card.svelte';
  import Button from '$lib/components/elements/Button.svelte';
  import { errorCodeToErrorText } from '$lib/utils/firebase';
  import { gql } from '@apollo/client/core';
  import { query } from '$lib/utils/apollo';

  let verificationError: string;

  async function signout() {
    const auth = getAuth();
    await signOut(auth);
  }

  async function verifyEmail() {
    const auth = getAuth();
    auth.languageCode = 'da'; // TODO, determine from browser or setting.
    try {
    } catch (e) {
      verificationError = errorCodeToErrorText(e);
    }
    await sendEmailVerification($user, {
      url: 'http://localhost:3000/account'
    });
  }

  async function tokenStuff() {
    const token = await $user.getIdToken();
    const resp = await fetch(`http://localhost:8080/?token=${token}`);
    console.log(resp);
  }

  tokenStuff();

  async function getUser() {
    const q = gql`
      query UserQuery {
        user {
          name
        }
      }
    `;

    const userQ = await query(q);
    console.log(userQ);
  }

  setTimeout(() => {
    getUser();
  }, 1000);
</script>

<Card>
  <p>
    <b>Email:</b>
    {$user.email}
  </p>
  {#if !$user.emailVerified}
    <p>
      Your email is not verifed. <Button on:click={verifyEmail} class="link">Verify email</Button>
    </p>
    {#if verificationError}
      <p class="error">{verificationError}</p>
    {/if}
    <p />
  {/if}
  <Button on:click={signout}>Sign out</Button>
</Card>
