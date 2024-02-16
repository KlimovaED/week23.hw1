import React from "react";
import Card from "./Card";
//import styles from './card.module.scss';

function Content() {
  return (
    <React.Fragment>
      <Card
      tag={'blue'}
        title="Безлимитный 300"
        valuta="руб"
        price="300"
        periud="мес"
        volume="10"
        description="Объём включенного трафика не ограничен"
      />
      <Card
      tag={'green'}
        title="Безлимитный 450"
        valuta="руб"
        price="450"
        periud="мес"
        volume="50"
        description="Объём включенного трафика не ограничен"
      />
      <Card
      tag={'red'}
      active ={'active'}
        title="Безлимитный 550"
        valuta="руб"
        price="550"
        periud="мес"
        volume="100"
        description="Объём включенного трафика не ограничен"
      />
      <Card
      tag={'gray'}
        title="Безлимитный 1000"
        valuta="руб"
        price="1000"
        periud="мес"
        volume="200"
        description="Объём включенного трафика не ограничен"
      />
    </React.Fragment>
  );
}

export default Content;
