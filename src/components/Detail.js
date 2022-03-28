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
	  console.log(productDetail)
	  productDetail.data.map((item)=>{
		  console.log(item)
	  })
  }


  useEffect(() => {
    dispatch(getProductDetailAsync(productId));
  }, [productId]);
console.log(productId)

return (
    <div className={styles.detail}>
        {!gettingDetail && productDetail && 
		productDetail.data.map((item)=>(

			<div key={item.id} className={styles.detailInner}>
				<div className={styles.left}>
					<DetailSlider data={item}/>
				</div>
				<div className={styles.right}>
					<DetailRight item={item}/> 
				</div>
        	</div>
		))
		}
    </div>
  );
}

export default Detail;