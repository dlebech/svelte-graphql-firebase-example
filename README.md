# svelte-graphql-firebase-example

An example of using Firebase for authentication and Hasura as GraphQL backend together with Svelte.

## Disclaimer

This might not be best practice. Use at your own peril :D

## Setup

1. Create a firebase project
2. Copy `.env-sample` to `.env` and fill in the details based on the snippets from Firebase.
3. Copy `.firebaserc-sample` to `.firebaserc` and update the project name.
3. Deploy the Firebase cloud function with `firebase deploy --only functions`. This will ensure that the correct custom claims are set for Hasura whenever a user is created.
4. Update the `hasura/docker-compose.yml` file with the correct project Id.

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

### Start Hasura

- Use `docker-compose up` under the Hasura folder.
- Use `hasura console --admin-secret=myadminsecretkey` to start the console for testing.

### Start the website

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```