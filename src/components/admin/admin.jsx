"use client";

import {useProductsContext} from "@/src/shared/products/context";
import React, {useEffect, useState} from "react";
import styles from "./admin.module.css";
import AddNewProduct from "./AddNewProduct";
import {useRouter} from "next/navigation";

export default function Admin() {
	const router = useRouter();

	useEffect(() => {
		const pass = prompt("Введите пароль")
		if (pass !== "Bomba2005") {
			router.push("/")
		}
	}, [])

	const {products, updateProductPrice, deleteProduct, addProduct} =
			useProductsContext();

	const [selectedProduct, setSelectedProduct] = useState(null);
	const [selectPrice, setSelectPrice] = useState("");
	const [isShowPricePopup, setShowPricePopup] = useState(false);
	const [isShowNewProductPopup, setShowAddProductPopup] = useState(false);

	const toggleChangePrice = (index) => {
		setShowPricePopup(!isShowPricePopup);
		setSelectedProduct(index);
	};

	return (
			<>
				<main className={styles.main}>
					<div className={styles.titleInfo}>
						<h1 className={styles.title}>Admin Panel</h1>
						<button
								onClick={() => setShowAddProductPopup(true)}
								className={styles.addProductBtn}
						>
							Add new product
						</button>
					</div>
					<div className={styles.productsListContainer}>
						<h2>Products list</h2>
						<div className={styles.productsList}>
							{products.map((product, index) => (
									<div key={index} className={styles.productItem}>
										<div className={styles.productInfo}>
											<h3 className={styles.productName}>{product.name}</h3>
											<p className={styles.productPrice}>Price: ${product.price}</p>
										</div>
										<div className={styles.productActions}>
											<button
													className={styles.productBtn}
													onClick={() => toggleChangePrice(index)}
											>
												Alter price
											</button>
											<button
													className={styles.productBtn}
													onClick={() => deleteProduct(product, index)}
											>
												{index}
												Delete
											</button>
										</div>
									</div>
							))}
						</div>
					</div>
				</main>
				{isShowPricePopup && (
						<div className={styles.popup}>
							<div className={styles.popupWindow}>
								<h2 className={styles.popupTitle}>New price</h2>
								<input
										value={selectPrice}
										onChange={(e) => setSelectPrice(e.target.value)}
										className={styles.popupInput}
										type="number"
								/>
								<button
										className={styles.popupButton}
										onClick={() => {
											updateProductPrice(selectedProduct, selectPrice);
											setShowPricePopup(false);
										}}
								>
									{" "}
									Change Price{" "}
								</button>
							</div>
						</div>
				)}
				{isShowNewProductPopup && (
						<AddNewProduct addProduct={addProduct}/>
				)}
			</>
	);
}
