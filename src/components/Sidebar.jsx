import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Article } from '../data/index';
import { Category } from '../data/index';
import { Link } from 'react-router-dom';

const SidebarSection = (props) =>
  <section>
    <h2>{props.title}</h2>
    <ListGroup>
      {props.items.map((item, index) =>
        <ListGroup.Item key={`article-link${index}`}>
          <Link to={`/category/${index}`}>
          {item}
          </Link>
          </ListGroup.Item>
      )}
    </ListGroup>
  </section>


const Sidebar = () =>
  <aside>
    <SidebarSection
      title="Articles"
      items={Article.map((item) => item.title)} />

    <SidebarSection
      title="Categories"
      items={Category.map((item) => item.name)} />
  </aside>
  ;

export default Sidebar;
