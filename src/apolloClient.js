import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const GITHUB_TOKEN = "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";
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${process.env.VITE_GITHUB_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
