import React,{ useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import styles from "../css/Detail.module.css";
import DetailSlider from "../components/DetailSlider";
import DetailRight from "../components/DetailRight";
import { getProductDetailAsync } from "../redux/reducers/getterReducer/productDetail/productDetail.thunk";

function Detail() {

  const dispatch = useDispatch();
  const match = useRouteMatch();
  const productId = match.params.productId;
  console.log(productId)

  const { gettingDetail, productDetail, detailErrorMessage } = useSelector(
    (state) => state.productDetailReducer
  );
  if(!gettingDetail && productDetail){
	  console.log(productDetail.data[0])
  }


  useEffect(() => {
    dispatch(getProductDetailAsync(productId));
  }, [productId]);


  return (
    <div className={styles.detail}>
        <div className={styles.detailInner}>
            <div className={styles.left}>
                {/* { !gettingDetail && productDetail ? <DetailSlider data={productDetail.data[0]}/> : null } */}
            </div>
            <div className={styles.right}>
                {
                    !gettingDetail && productDetail ? <DetailRight item={productDetail.data[0]}/> : null
                }
            </div>
        </div>
    </div>
  );
}

export default Detail;