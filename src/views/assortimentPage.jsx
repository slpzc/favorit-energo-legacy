"use client";
import React, {useCallback, useState} from "react";
import {Filters} from "../components/catalog/Filters";
import {Assortiment} from "../components/catalog/assortiment";
import {useProductsContext} from "../shared/products/context";

export const AssortimentPage = ({category}) => {
	const {products} = useProductsContext();
	const [filters, setFilters] = useState({
		generatorType: "Дизельный",
		selectedPower: [],
	});

	const handleFilterChange = useCallback((newFilters) => {
		setFilters(newFilters);
	}, []);

	return (
			<>
				{products.length > 0 ? (
						<main>
							{category.toLowerCase() === "generators" && (
									<Filters onFilterChange={handleFilterChange}/>
							)}
							<Assortiment
									products={products}
									category={category}
									filters={filters}
							/>
						</main>
				) : (
						<p>Loading...</p>
				)}
			</>
	);
};
