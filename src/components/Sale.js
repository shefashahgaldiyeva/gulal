import React, { useState, useEffect } from "react";
import styles from "../css/Sale.module.css";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import { loadDiscountProduct } from "../redux/reducers/products/products.thunks";

function Sale() {
  const dispatch = useDispatch();
  // const saleData = useSelector(state => state.saleProductData)
  const { isLoading, products, errorMessage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(loadDiscountProduct());
  }, []);
  if(!isLoading && products){
      console.log(products.data.data)
    }
  return (
    <div className={styles.sale}>
      <div className={styles.saleInner}>
        <div className={styles.saleLeft}>
          <h2>
            Endirimli <br /> məhsullar
          </h2>
        </div>
        <div className={styles.saleRight}>
          {!isLoading && products ? products.data.data.map((item) => (
                <div className={styles.cardWrapper}>
                  <Card item={item} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Sale;