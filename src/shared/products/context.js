"use client";
import {createContext, useContext, useEffect, useState} from "react";
import {getData, getProductsData} from "./api";
import axios from "axios";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
	const [products, setProducts] = useState([]);
	const [productsDatas, setProductsDatas] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			setProducts(await getData());
			setProductsDatas(await getProductsData());
		};
		fetchProducts();
	}, []);

	const addProduct = async (product) => {
		try {
			await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/products`, product);
			setProducts((prevProducts) => [...prevProducts, product]);
		} catch (error) {
			console.error("Error adding product:", error);
		}
	};

	const deleteProduct = async (productIndex) => {
		try {
			await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
				data: {index: productIndex},
			});
			setProducts((prevProducts) =>
					prevProducts.filter((_, index) => index !== productIndex)
			);
		} catch (error) {
			console.error("Error deleting product:", error);
		}
	};

	const updateProductPrice = async (productIndex, newPrice) => {
		try {
			console.log(productIndex)
			const newData = {price: newPrice};
			await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
				index: productIndex,
				newData,
			});
			setProducts((prevProducts) => {
				const updatedProducts = [...prevProducts];
				updatedProducts[productIndex] = {
					...updatedProducts[productIndex],
					price: newPrice,
				};
				return updatedProducts;
			});
		} catch (error) {
			console.error("Error updating product price:", error);
		}
	};

	return (
			<ProductsContext.Provider
					value={{productsDatas, products, addProduct, deleteProduct, updateProductPrice}}
			>
				{children}
			</ProductsContext.Provider>
	);
};


export const useProductsContext = () => {
	return useContext(ProductsContext);
};
