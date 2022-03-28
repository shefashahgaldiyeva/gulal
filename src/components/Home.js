import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { loadProductsAsync,loadDiscountProduct } from "../redux/reducers/products/products.thunks";
import { loadAddToCartProductAsnync } from "../redux/reducers/products/products.thunks";
import { loadDiscountProductsAsync } from '../redux/reducers/getterReducer/discountProducts/discount.thunk';

import styles from '../css/WhoWeAre.module.css'
import Container from '../components/Container';
import NewOffer from '../components/NewOffer';
// import SelectedCard from '../components/SelectedCard';
import AllProducts from '../components/AllProducts';
import WhoWeAre from '../components/WhoWeAre'
import Sale from '../components/Sale'


function Home() {

	const [whoWeAreScroll, setWhoWeAreScroll] = useState(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
			// console.log(window.scrollY)
			if(window.scrollY > 2000){
				setWhoWeAreScroll(styles.scrollUp)
			}else{
				setWhoWeAreScroll(null)
			}
        });
    }, [window.scrollY]);

    const dispatch = useDispatch()
    const {isLoadingDiscount,discountProducts,discountErrorMessage} = useSelector((state) => state.discountReducer);
    useEffect(() => {
        dispatch(loadDiscountProductsAsync());
    }, []);

    return (
        <div>
            <Container/>
            <NewOffer/>
            <AllProducts/>
            {/* <SelectedCard/> */}
            {
                !isLoadingDiscount && discountProducts ?
                <Sale data={discountProducts.data}/> : null
            }
            <WhoWeAre whoWeAreScrollData={whoWeAreScroll}/>
        </div>
    )
}

export default Home;
