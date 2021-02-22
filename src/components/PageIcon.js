import React from 'react';
import '../styles/app.css';

const PageIcon = ({ image, alt}) => (
  <div className="icon">
    <img src={image} className="icon__img" alt={alt}/>
  </div>
);

export default PageIcon;
