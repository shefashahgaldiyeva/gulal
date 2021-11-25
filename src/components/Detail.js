import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import styles from "../css/Detail.module.css";
import DetailSlider from "../components/DetailSlider";
import DetailRight from "../components/DetailRight";
import { useEffect } from "react";

import { loadProductDetail } from "../redux/reducers/products/products.thunks";

function Detail() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const productId = match.params.productId;

  const { isLoading, products, errorMessage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(loadProductDetail(productId));
  }, [productId]);

  if (!isLoading && products) {
    console.log(products.data.data[0]);
  }
  return (
    //   <></>
    <div className={styles.detail}>
        <div className={styles.detailInner}>
            <div className={styles.left}>
                {/* { !isLoading && products ? <DetailSlider data={products.data.data[0]}/> : null } */}
                
            </div>
            <div className={styles.right}>
                {
                    !isLoading && products ? <DetailRight item={products.data.data[0]}/> : null
                }
            </div>
        </div>
    </div>
  );
}

export default Detail;