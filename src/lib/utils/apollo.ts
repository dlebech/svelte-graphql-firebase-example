import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import type { NormalizedCacheObject } from '@apollo/client';

let client: ApolloClient<NormalizedCacheObject>;

export function initializeClient(authToken: string): void {
  console.log('Creating apollo client!');

  const httpLink = new HttpLink({
    uri: `${import.meta.env.VITE_API_URL}/v1/graphql`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  const cache = new InMemoryCache();

  client = new ApolloClient({
    link: httpLink,
    cache,
  });
}

export function query(q) {
  if (!client) {
    console.log('Cannot query!');
    return;
  }

  return client.query({
    query: q
  })
}