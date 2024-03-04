import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/index.jsx';

const client = new ApolloClient({
  // uri: 'https://rickandmortyapi.com/graphql',
  uri: 'https://rick-and-morty-graphql-mo.vercel.app/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
