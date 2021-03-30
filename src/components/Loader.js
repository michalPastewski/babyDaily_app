import React from 'react';
import '../styles/app.css';

const Loader = () => {
   return (
      <div className="loader">
         <div className="loader__content">
            <h3 className="loader__title">loading</h3>
            <span className="loader__item item__one"></span>
            <span className="loader__item item__two"></span>
            <span className="loader__item item__three"></span>
         </div>
      </div>
   );
};

export default Loader;
