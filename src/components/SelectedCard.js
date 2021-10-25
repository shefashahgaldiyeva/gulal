import React from 'react'
import styles from '../css/SelectedCard.module.css'
import {FiHeart} from 'react-icons/fi'
import {FaRegEye} from 'react-icons/fa'
import {BsCartPlus} from 'react-icons/bs'
import flower from '../img/flower.jpg'

function SelectedCard() {
    return (
        <div className={styles.box}>
        <div className={styles.shoppingCardWrapper}>
            {/* {
                selectorAll.map((item)=>{ */}
                    <div className={styles.ShoppingCard}>
                    <div className={styles.image}>
                        <div className={styles.view}>
                            {/* <a href='#' onClick={() => handleAddWishlist(props.item)}><span>add to wishlist</span><FiHeart/></a> */}
                            <a href='#'><span>add to wishlist</span><FiHeart/></a>
                            {/* <Link to={`/${item.id}`} title='quick view'><FaRegEye/></Link> */}
                            <a href='#' title='quick view'><FaRegEye/></a>
                        </div>
                        {/* <img src={props.item.img} onMouseOver={(a)=>{a.target.src = props.item.img2}} onMouseOut={(a)=>{a.target.src = props.item.img}}/> */}
                        <img src={flower}/>
                    </div>
                    <div className={styles.bottom}>
                        {/* <div className={styles.category}><a href='#'>{props.item.category}</a></div> */}
                        {/* <h3><a href='#'>{props.item.h3}</a></h3> */}
                        <h3><a href='#'>Welcome Little One Bouquet</a></h3>
                        {/* <span className={styles.price}>{props.item.price}</span> */}
                        <span className={styles.price}>{50}azn</span>
                        <div>
                            {/* <div className={styles.stars}>stars</div> */}
                            {/* <span className={styles.review}>({props.item.review}review)</span> */}
                            <span className={styles.review}>({5} baxis)</span>
                        </div>
                        <div className={styles.btn}>
                            {/* <a href='#' onClick={() => handleAdd(props.item)}><span>{props.item.btnIcon}</span>{props.item.btn}</a> */}
                            <a href='#'><span><BsCartPlus/></span>Satin al</a>
                        </div>
                    </div>
            </div>
                {/* })
            } */}
            
        </div>
        </div>
    )
}

export default SelectedCard;
