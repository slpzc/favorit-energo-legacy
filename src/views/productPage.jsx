"use client";
import {Product} from "../components/product/Product";
import {PhoneForm} from "../components/feedback";
import {useProductsContext} from "../shared/products/context";


export const ProductPage = ({id}) => {
	const {productsDatas} = useProductsContext();

	const product = productsDatas.find(p => p.id === parseInt(id));

	if (!product) {
		return <div>Товар не найден</div>;
	}

	return (
			<main>
				<Product product={product}/>
				<PhoneForm/>
			</main>
	);
}