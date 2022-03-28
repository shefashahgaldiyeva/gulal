import React, { useState, useEffect } from "react";
import styles from "../css/Sale.module.css";
import Card from "../components/Card";

function Sale(props) {
	
    return (
        <div className={styles.sale}>
            <div className={styles.saleInner}>
                <div className={styles.saleLeft}>
                    <h2>Endirimli <br /> məhsullar</h2>
                </div>
                <div className={styles.saleRight}>
                    {
                        props && props.data.map((item) => (
                            <div key={item.id} className={styles.cardWrapper}>
                                <Card key={item.id} item={item} />
                            </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Sale;