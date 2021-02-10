import React from 'react';
import styles from '../styles/meal.module.css';

const practiseDatas = [
  {date: "02.02.2021", start: "09:30", stop: "10:15", time: "00:45", type: "pierś"},
  {date: "04.02.2021", start: "11:15", stop: "12:15", time: "01:00", type: "butelka"},
  {date: "06.02.2021", start: "09:00", stop: "10:15", time: "01:15", type: "pierś"},
  {date: "10.02.2021", start: "22:00", stop: "22:55", time: "00:55", type: "pierś"},
]

const MealTable = () => {
  return (
    // <table className={styles.table}>
    //   <thead >
    //     <th className={styles.table__row}>
    //       <td className={styles.table__item}>DATA</td>
    //       <td className={styles.table__item}>START</td>
    //       <td className={styles.table__item}>STOP</td>
    //       <td className={styles.table__item}>CZAS</td>
    //       <td className={styles.table__item}>RODZAJ</td>
    //     </th>
    //   </thead>
    //   <tbody>
    //     {
    //       practiseDatas.map((data) => (
    //             <th className={styles.table__row}>
    //               <td className={styles.table__item}>{data.date}</td>
    //               <td className={styles.table__item}>{data.start}</td>
    //               <td className={styles.table__item}>{data.stop}</td>
    //               <td className={styles.table__item}>{data.time}</td>
    //               <td className={styles.table__item}>{data.type}</td>
    //             </th>))
    //     }
    //   </tbody>
    // </table>

    <section className={styles.table}>
        <header className={styles.table__row}>
          <div className={styles.table__item}>DATA</div>
          <div className={styles.table__item}>START</div>
          <div className={styles.table__item}>STOP</div>
          <div className={styles.table__item}>CZAS</div>
          <div className={styles.table__item}>RODZAJ</div>
        </header>
        {
          practiseDatas.map((data) => (
                <div className={styles.table__row}>
                  <div className={styles.table__item}>{data.date}</div>
                  <div className={styles.table__item}>{data.start}</div>
                  <div className={styles.table__item}>{data.stop}</div>
                  <div className={styles.table__item}>{data.time}</div>
                  <div className={styles.table__item}>{data.type}</div>
                </div>))
        }
    </section>
  )
}

export default MealTable;