import React from 'react';
import "../styles/app.css";

const PageWrapper = ({ title, children}) => (
  <section className="page__wrapper">
    <h1 className="page__title">{title}</h1>
    <div className="page__content">{children}</div>
  </section>
);

export default PageWrapper;