import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyles from './components/GlobalStyles';
import App from './components/Carousel';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000'
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
