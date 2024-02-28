import React from "react";
import Card from "./Card";
//import styles from './card.module.scss';

function Content() {
const cards =[ {id:1, color:'blue',title:"Безлимитный 300", valuta:"руб",price:"300",periud:"мес",volume:"10",description:"Объём включенного трафика не ограничен",status:'active'},
                {id:2,color:'green',title:"Безлимитный 450",valuta:"руб",price:"450",periud:"мес",volume:"50",description:"Объём включенного трафика не ограничен",status:'active'},
                {id:3,color:'red',title:"Безлимитный 550",valuta:"руб",price:"550",periud:"мес",volume:"100",description:"Объём включенного трафика не ограничен",status:'active'},
                {id:4,color:'gray',title:"Безлимитный 1000",valuta:"руб",price:"1000",periud:"мес",volume:"200",description:"Объём включенного трафика не ограничен",status:'active'}]



  return (
    <React.Fragment>
      {
        cards.map((card)=>{
          return(
            <Card {...card} />
          )
        })
      }
    </React.Fragment>
  );
}

export default Content;
