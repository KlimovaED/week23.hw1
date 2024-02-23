import styles from './card.module.scss';
import React,{useState} from 'react';

 function Card({id,color,title,valuta,price,periud,volume,description}){ 
const[active,setActive]= useState(false);

const handleChange =() =>{
    setActive(!active);
}

    return(
        <div key={id} style={active 
                                ? {transform: "scale(1.1)"} 
                                : {}}
                                className={`${styles.Card} ${styles[color]}`} onClick={handleChange}>
            <div className={styles.card_header}>
                <h3 className="title">{title}</h3></div>
            <div className={styles.card_body}>
                <span className={styles.valuta}>{valuta}</span>
                <h4 className={styles.price}>{price}</h4>
                <span className={styles.periud}> / {periud}</span>
            </div>
            <div className={styles.card_footer}>
                <p className={styles.volume}> до {volume} Мбит/сек</p>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default Card;