import React, { useState, useEffect } from "react";
import styles from "../css/Sale.module.css";
import Card from "../components/Card";

function Sale(props) {
<<<<<<< HEAD

return (
    <div className={styles.sale}>
        <div className={styles.saleInner}>
            <div className={styles.saleLeft}>
            <h2>Endirimli <br /> məhsullar</h2>
            </div>
            <div className={styles.saleRight}>
                {
                    props && props.data.map((item) => (
                        <div className={styles.cardWrapper}>
                            <Card item={item} />
                        </div>
                        ))
                }
=======
	
    return (
        <div className={styles.sale}>
            <div className={styles.saleInner}>
                <div className={styles.saleLeft}>
                <h2>Endirimli <br /> məhsullar</h2>
                </div>
                <div className={styles.saleRight}>
                    {
                        props && props.data.map((item) => (
                            <div className={styles.cardWrapper}>
                                <Card item={item} />
                            </div>
                            ))
                    }
                </div>
>>>>>>> master
            </div>
        </div>
    );
}

export default Sale;