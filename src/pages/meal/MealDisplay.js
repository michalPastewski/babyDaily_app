import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

import MealTable from './MealTable';
import styles from '../../styles/meal.module.css';


const MealDisplay = ( { onFormShow }) => {
  let {path, url} = useRouteMatch();

  const handleOnClick = () => onFormShow();
  return (
    <div className={styles.table__content}>
      <section className={styles.table__nav}>
        <div>
            <ul className={styles.table__nav__list}>
              <li role="tab">
                  <button className={styles.nav__button}>
                        <Link to={`${url}/today`} >dzisiaj</Link>
                  </button>
              </li>
              <li role="tab">
                  <button className={styles.nav__button}>
                    <Link to={`${url}/all-week`}>tydzień</Link>
                  </button>
              </li>
              <li role="tab">
                  <button className={styles.nav__button}>
                    <Link to={`${url}/all-month`}>miesiąc</Link>
                  </button>
              </li>
            </ul>
        </div>
        <button className={styles.nav__button}  onClick={handleOnClick}>dodaj</button>
      </section>
      <Switch>
        <Route exact path={path}>
          <MealTable />
        </Route>
        <Route path={`${path}/:mealTableId`}>
          <MealTable />
        </Route>
      </Switch>
  </div>
  );
}

export default MealDisplay;