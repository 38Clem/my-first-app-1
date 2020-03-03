import React from 'react';
import { ArticlePreview } from '.';
import {Article} from '../data/index';

const ArticleList = () =>
  <section className="card-list">
    {Article.map( (item, index) =>
      <ArticlePreview
        key={`article-preview${index}`}
        title={item.title}
        text={item.text}
      />
    )}
  </section>
;

export default ArticleList;
