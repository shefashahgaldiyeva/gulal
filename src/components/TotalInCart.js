import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../css/TotalInCart.module.css'
import { HiOutlineRefresh } from 'react-icons/hi'

const TotalInCart = () =>{

    const cardData = useSelector(state => state.bucketReducer)
    
        let subTotal = 0;
        cardData.map(item=>{
            subTotal += item.total
        })
        // console.log(subTotal)

    // console.log(total)
    // let total = 0;
    // let totall = 0;
    // useEffect(() => function shippingClick() {
    //     const [total,setTotal] = useState(0)
    //     let val = document.querySelector('input[name="shipping"]:checked').value;
    //     let totall = subTotal + Number(val);
    //     setTotal(totall)
        
    //     return setTotal

    // }, [])
    const [total, setTotal] = useState(0)

    const shippingClick = () => {
        console.log("yeah")
        let val = document.querySelector('input[name="shipping"]:checked').value;
        // console.log(val)
        // let totall = subTotal + Number(val);
        // setTotal(totall)
        // console.log(totall)
        // return totall
    }
    // console.log(setTotal)

    return (
        <div className={styles.total}>
            <div className={styles.subTotal}>
                <h3>Toplam</h3>
                <div className={styles.sum}>
                    <span>Ümumi cəm:</span>
                    <span>{subTotal.toFixed(2)} azn</span>
                </div>
                <form>
                    <p>Çatdırılma:</p>
                    <div className={styles.shipping}>
                        <label for='free'>
                            <input checked onChange={shippingClick} id='free' name='shipping' value={0} type='radio'/>
                            Mağazadan alış:
                        </label>
                        <span>0.00 azn</span>
                    </div>
                    <div className={styles.shipping}>
                        <label for='standart'>
                            <input onChange={shippingClick} id='standart' name='shipping' value={5} type='radio'/>
                            Standard çatdırılma: 
                        </label>
                        <span>5.00azn</span>
                    </div>
                    <div className={styles.shipping}>
                        <label for='express'>
                            <input onChange={shippingClick} id='express' name='shipping' value={10} type='radio'/>
                            Express:
                        </label>
                        <span>10.00 azn</span>
                    </div>
                </form>
                <div className={styles.adres}>
                    <h2>Bölgəni seçin</h2>
                    <a href='#'>Adres daxil et</a>
                </div>
                <div className={styles.totalSpan}>
                    <span>Toplam:</span>
                    <span>{total}.00 azn</span>
                </div>
                <a className={styles.btn} href='#'>ÇIXIŞA GET</a>
            </div>
            <div>
            <Link className={styles.continue} to='/'>
                ALIŞ VERİŞƏ DAVAM ET
                <HiOutlineRefresh/>
            </Link>
            </div>
        </div>
    )
}

export default TotalInCart;
