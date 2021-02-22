import React from 'react';
import '../styles/app.css';

const Button = ({title, onClick}) => (
  <button className="button" onClick={onClick}>{title}</button>
);

export default Button;
