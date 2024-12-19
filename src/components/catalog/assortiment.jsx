import React from 'react';
import Link from 'next/link';
import styles from "./catalog.module.css";


export const Assortiment = ({products, filters, category}) => {
	const filteredProducts = products.filter(product => {
		const matchesCategory = product.category.toLowerCase() === category.toLowerCase();
		const matchesType = product.filters?.type === filters.generatorType;
		console.log(matchesType)
		const productPower = parseInt(product.specifications.power);
		const matchesPower = filters.selectedPower.length === 0 || filters.selectedPower.some(power => productPower >= power);
		return matchesCategory && matchesType && matchesPower;
	});


	if (filteredProducts.length === 0) {
		return (
				<section className={styles.assortiment}>
					<div className={`globalWrapper ${styles.assortimentWrapper}`}>
						<p>Нет продуктов в этой категории</p>
					</div>
				</section>
		);
	}

	return (
			<section className={styles.assortiment}>
				<div className={`globalWrapper ${styles.assortimentWrapper}`}>
					{filteredProducts.map((product, index) => (
							<div key={product.url} className={styles.product}>
								<img
										src={product.image}
										alt={product.name}
										className={styles.productPhoto}
								/>
								<div className={styles.info}>
									<div className={styles.namePrice}>
										<h2 className={styles.name}>{product.name}</h2>
										<p className={styles.price}>{product.price.toString().toLocaleString("ru")} ₽</p>
									</div>
									<div className={styles.specifications}>
										<p className={styles.specification}>{product.specifications.power}</p>
										<p className={styles.specification}>{product.specifications.capacity}</p>
										<p className={styles.specification}>{product.specifications.weight}</p>
										<p className={styles.specification}>{product.specifications.dimensions}</p>
									</div>
								</div>
								<Link href={`product/${product.id}`}>
									<button className={styles.productButton}>подробнее</button>
								</Link>
							</div>
					))}
				</div>
			</section>
	);
};

