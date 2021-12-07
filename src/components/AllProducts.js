import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import Card from '../components/Card';
import styles from '../css/AllProducts.module.css'
import bottomHeading from '../img/bottomHeading.png'
import { loadAllProductsAsync } from "../redux/reducers/products/products.thunks";
import { getProducts } from '../redux/reducers/getterReducer/product/product.thunk';



function AllProducts(props) {

    const dispatch = useDispatch()
    const {gettingProduct,products,productsErrorMessage} = useSelector((state) => state.getProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, []);
    
    SwiperCore.use([Pagination]);

 
    return (
        <div className={styles.products}>
            <div className={styles.productsInner}>
                <div className={styles.headingInner}>
                    <h2>Bütün məhsullar</h2>
                    {/* <img src={bottomHeading}/> */}
                </div>
                <div className={styles.swipWrapper}>
                    <div className={styles.swipInner}>
                    <Swiper className={styles.swiperPage} slidesPerView={4} spaceBetween={0} pagination={{"clickable": true},{ grabCursor: true}}>
                    {
                        !gettingProduct && products && products.data.map((item)=>(
                            <SwiperSlide className={styles.allProductSwip}>
                                <Card item={item}/>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts;