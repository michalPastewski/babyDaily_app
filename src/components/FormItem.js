import React from 'react';
import '../styles/app.css';

const FormItem = ({name, type, title, style}) => {
  return (
    <div className={style} style={{display:"flex", flexDirection:"column"}}>
      <label htmlFor={name} className="form__item__label">{title}</label>
      <input type={type} id={name} className="form__item__input"/>
    </div>
  );
}

export default FormItem;