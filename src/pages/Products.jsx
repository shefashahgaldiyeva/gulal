import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsAsync } from "../redux/reducers/products/products.thunks";

const ProductsListing = () => {
	const dispatch = useDispatch();
	const { isLoading, products, errorMessage } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(loadProductsAsync());
	}, []);


	// products.data.map((item) => {
	// 	console.log(item)
	// })

	return (
		<div>
			<h1>Products Listing</h1>
			{/* {isLoading && <h3>Loading...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>} */}
			{products && products.data.map((product) => <h5 key={product.id}>{product.name}</h5>)}
		</div>
	);
};

export default ProductsListing;