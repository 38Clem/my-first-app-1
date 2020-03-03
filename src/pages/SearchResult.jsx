import React from 'react'
import { Layout, ArticleList } from '../components'
import { Article } from '../data'

const SearchResult = (props) => {
  const argument = props.match.params.argument;

  const selectedArticles = Article.filter((article) =>
    article.title.includes(argument) || article.text.includes(argument)
  );

  return (
    <Layout>
      <h2>Articles correspondant au terme "{argument}" </h2>
      <ArticleList articles={selectedArticles} />
    </Layout>

  )

}

export default SearchResult