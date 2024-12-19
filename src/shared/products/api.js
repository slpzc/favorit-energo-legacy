import axios from "axios";

export const getData = async () => {
	const response = await axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
			.then(response => response.data)
			.catch(error => console.error(error));
	return response;
}

export const getProductsData = async () => {
	const response = await axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/products/data`)
			.then(response => response.data)
			.catch(error => console.error(error));
	return response;
}