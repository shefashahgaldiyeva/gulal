import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { loadProductsAsync,loadDiscountProduct } from "../redux/reducers/products/products.thunks";
import { loadAddToCartProductAsnync } from "../redux/reducers/products/products.thunks";

import Container from '../components/Container';
import NewOffer from '../components/NewOffer';
// import SelectedCard from '../components/SelectedCard';
import AllProducts from '../components/AllProducts';
import WhoWeAre from '../components/WhoWeAre'
import Sale from '../components/Sale'


function Home() {

    const dispatch = useDispatch()
    // const {isLoading,products,errorMessage} = useSelector((state) => state.products);

    // useEffect(() => {
    //     dispatch(loadProductsAsync());
    // }, []);

    // if(!isLoading && products){
    //     console.log(products.data)
    // }

    const {loading,discount,error} = useSelector((state) => state.discountReducer);
    
    useEffect(() => {
        dispatch(loadDiscountProduct());
    }, []);

    // if(!loading && discount){
    //     console.log(discount.data.data)
    // }

   
    // useSelector(state => console.log(state.cartReducer))

    return (
        <div>
            <Container/>
            <NewOffer/>
            <AllProducts/>
            {/* <SelectedCard/> */}
            <Sale data={!loading && discount && discount.data}/>
            <WhoWeAre/>
        </div>
    )
}

export default Home;
