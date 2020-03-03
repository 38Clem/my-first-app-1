import React from 'react';
import { Layout, ArticleList } from '../components';
import { Article } from '../data';

const Home = (props) =>
  <Layout>
    <h1>Kame Ricano</h1>
    <h2>Bienvenue !</h2>
    <ArticleList articles= {Article} />
  </Layout>
;

export default Home;
