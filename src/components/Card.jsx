import styles from './card.module.scss';
import React,{useState} from 'react';

 function Card({card}){ 
const[active,setActive]= useState(false);

const handleChange =() =>{
    setActive(!active);
}

    return(
        <div key={card.id} style={active 
                                ? {transform: "scale(1.1)"} 
                                : {}}
                                className={`${styles.Card} ${styles[card.color]}`} onClick={handleChange}>
            <div className={styles.card_header}>
                <h3 className="title">{card.title}</h3></div>
            <div className={styles.card_body}>
                <span className={styles.valuta}>{card.valuta}</span>
                <h4 className={styles.price}>{card.price}</h4>
                <span className={styles.periud}> / {card.periud}</span>
            </div>
            <div className={styles.card_footer}>
                <p className={styles.volume}> до {card.volume} Мбит/сек</p>
                <p className={styles.description}>{card.description}</p>
            </div>
        </div>
    )
}

export default Card;