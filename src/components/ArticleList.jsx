import React from 'react';
import { ArticlePreview } from '.';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';


const ArticleList = (props) =>
  <section className="card-list">
    {props.articles.map( (item, index) =>
      <ArticlePreview
        key={`article-preview${index}`}
        title={item.title}
        text={item.text}
        index={index}
      />
    )}
  </section>
;

ArticleList.propTypes = exact({
  articles: PropTypes.array.isRequired,
});

export default ArticleList;
