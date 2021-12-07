import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { loadProductsAsync,loadDiscountProduct } from "../redux/reducers/products/products.thunks";
import { loadAddToCartProductAsnync } from "../redux/reducers/products/products.thunks";
import { getProductByDiscount } from '../redux/reducers/getterReducer/product/product.thunk';

import Container from '../components/Container';
import NewOffer from '../components/NewOffer';
// import SelectedCard from '../components/SelectedCard';
import AllProducts from '../components/AllProducts';
import WhoWeAre from '../components/WhoWeAre'
import Sale from '../components/Sale'
import { getProductByDiscount } from '../redux/reducers/getterReducer/product/product.thunk';


function Home() {
    const dispatch = useDispatch()
     const {gettingProduct,products,errorMessage} = useSelector((state) => state.getProducts);
    useEffect(() => {
        dispatch(getProductByDiscount());
    }, []);

    return (
        <div>
            <Container/>
            <NewOffer/>
            <AllProducts/>
            {/* <SelectedCard/> */}
            {
                !gettingProduct && products ?
                <Sale data={products.data}/> : null
            }
            <WhoWeAre/>
        </div>
    )
}

export default Home;
