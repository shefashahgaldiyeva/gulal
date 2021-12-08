import React from 'react'
import styles from '../css/NewOfferCard.module.css'
import flower from '../img/flower.jpg'

function NewOfferCard(props) {
    return (
        <div key={props.data.id} className={styles.newOfferCard}  onMouseOver={(e)=> e.target.src = props.data.photo} onMouseOut={(e)=> e.target.src = props.data.photo}>
            <div className={styles.left}>
                <img src={props.data.photo}/>
            </div>
            <div className={styles.right}>
                <h3><a href='#'>{props.data.name}</a></h3>
                <p className={styles.price}>{props.data.price}azn</p>
                <span className={styles.review}>({props.data.review}5 baxis)</span>
            </div>
        </div>
    )
}

export default NewOfferCard;
