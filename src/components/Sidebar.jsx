import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {Article} from '../data/index';
import {Category} from '../data/index';

const Sidebar = () =>
  <aside>
    <h2>Articles</h2>
    <ListGroup>
      {Article.map( (item, index) =>
        <ListGroup.Item key={`article-link${index}`}>{item.title}</ListGroup.Item>
      )}
    </ListGroup>
    <h2>Categories</h2>
    <ListGroup>
      {Category.map((item) =>
      <ListGroup.Item>{item.name}</ListGroup.Item>
      )}
    </ListGroup>
  </aside>
;

export default Sidebar;
