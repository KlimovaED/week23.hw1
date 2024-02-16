import styles from './card.module.scss';
import React from 'react';

 function Card(props){
    const {title,valuta,price,periud,volume,description,tag,active} = props;  
    return(
        <div className={`${styles.Card} ${styles[tag]}  ${styles[active]}`}>
            <div className={styles.card_header}>
                <h3 className={styles.card-title}>{title}</h3></div>
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