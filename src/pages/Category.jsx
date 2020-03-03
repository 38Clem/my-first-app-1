import React from 'react'
import { Layout, ArticleList } from '../components';
import { NotFoundPage } from '.';
import { Article } from '../data/index';
import {Category} from '../data/index';

const Categories = (props) =>{
  const id = Number(props.match.params.id);
  const category = Category[id];

  if (!category){
    return <NotFoundPage />;
  };

  const selectedArticles = Article.filter(item =>
    item.categoryId === id
    );
    console.log(selectedArticles);
    

  return (<Layout>
    <h1>{category.name}</h1>
    <ArticleList articles = {selectedArticles} />
  </Layout>
  );

};

export default Categories