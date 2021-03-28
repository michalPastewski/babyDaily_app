import React from 'react';
import '../styles/app.css';

const PageWrapper = ({ title, children }) => (
   <div className="page__wrapper">
      <h1 className="page__title">{title}</h1>
      <div>{children}</div>
   </div>
);

export default PageWrapper;
