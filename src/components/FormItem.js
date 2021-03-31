import React from 'react';
import '../styles/app.css';

const FormItem = ({ name, type, title, style, onChanged, value }) => {
   return (
      <div className={style} style={{ display: 'flex', flexDirection: 'column' }}>
         <label htmlFor={name} className="form__item__label">
            {title}
         </label>
         <input
            type={type}
            id={name}
            name={name}
            className="form__item__input"
            value={value}
            onChange={(e) => onChanged(e.target.name, e.target.value)}
            required
         />
      </div>
   );
};

export default FormItem;
