import React, {useState} from "react";
import styles from "./admin.module.css";

export default function AddNewProduct({addProduct}) {
	const [product, setProduct] = useState({
		name: "",
		price: "",
		description: "",
		image: "",
		media: [],
		category: "generators",
		specifications: {
			power: "",
			capacity: "",
			dimensions: "",
			weight: "",
		},
		url: "",
		filters: {
			type: "Дизельный",
			power: "",
		},
		benefits: [],
		rentalPeriods: [
			{duration: "1 сутки", price: ""},
			{duration: "3 суток", price: ""},
			{duration: "10 суток", price: ""},
			{duration: "30 суток", price: ""},
		],
		rentalDetails: [
			{
				textLeft: "",
				textRight: "",
			},
		],
	});

	const [mediaValue, setMediaValue] = useState("");
	const [benefitsValue, setBenefitsValue] = useState("");

	const handleMediaChange = (e) => {
		setMediaValue(e.target.value);
		const mediaArray = e.target.value
				.split(",")
				.map((url) => url.trim()) // Убираем пробелы вокруг каждой ссылки
				.filter((url) => url); // Исключаем пустые строки, если пользователь оставил лишние запятые
		setProduct({...product, media: [...mediaArray]});
	};

	const handleBenefitsChange = (e) => {
		setBenefitsValue(e.target.value);
		const mediaArray = e.target.value
				.split(",")
				.map((url) => url.trim()) // Убираем пробелы вокруг каждой ссылки
				.filter((url) => url); // Исключаем пустые строки, если пользователь оставил лишние запятые
		setProduct({...product, benefits: [...mediaArray]});
	};

	// Функция для обновления значений в объектах массива
	const handleRentalDetailsChange = (index, field, value) => {
		const updatedItems = [...product.rentalDetails];
		updatedItems[index][field] = value;
		setProduct({...product, rentalDetails: updatedItems});
	};

	// Функция для добавления нового объекта
	const addRentalItem = () => {
		setProduct({
			...product,
			rentalDetails: [
				...product.rentalDetails,
				{textLeft: "", textRight: ""},
			],
		});
	};

	const handleRentalPeriodChange = (index, value) => {
		setProduct((prevProduct) => {
			// Копируем текущий массив rentalPeriods и обновляем нужный элемент
			const updatedPeriods = prevProduct.rentalPeriods.map((period, i) =>
					i === index ? {...period, price: value} : period
			);
			return {...prevProduct, rentalPeriods: updatedPeriods};
		});
	};

	const handleAddProduct = () => {
		addProduct(product);
	}

	return (
			<div className={styles.popup}>
				<div className={styles.popupWindow}>
					<h2 className={styles.popupTitle}>New product</h2>
					<div className={styles.productLabel}>
						<p>Название</p>
						<input
								value={product.name}
								onChange={(e) => setProduct({...product, name: e.target.value})}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Описание</p>
						<input
								value={product.description}
								onChange={(e) =>
										setProduct({...product, description: e.target.value})
								}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Цена</p>
						<input
								value={product.price}
								onChange={(e) =>
										setProduct({...product, price: e.target.value})
								}
								className={styles.popupInput}
								type="number"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Изображение</p>
						<input
								value={product.image}
								onChange={(e) => setProduct({...product, image: e.target.value})}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Перечень изображений (через запятую) </p>
						<input
								value={mediaValue}
								onChange={(e) => handleMediaChange(e)}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Категория</p>
						<select
								value={product.category}
								onChange={(e) =>
										setProduct({...product, category: e.target.value})
								}
								className={styles.popupInput}
								type="text"
						>
							<option value="generators">Генераторы</option>
							<option value="compressors">Компрессоры</option>
						</select>
					</div>
					<div className={styles.productLabel}>
						<p>Мощность</p>
						<input
								value={product.specifications.power}
								onChange={(e) =>
										setProduct({
											...product,
											specifications: {
												...product.specifications,
												power: e.target.value,
											},
										})
								}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Производительность</p>
						<input
								value={product.specifications.capacity}
								onChange={(e) =>
										setProduct({
											...product,
											specifications: {
												...product.specifications,
												capacity: e.target.value,
											},
										})
								}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Размеры</p>
						<input
								value={product.specifications.dimensions}
								onChange={(e) =>
										setProduct({
											...product,
											specifications: {
												...product.specifications,
												dimensions: e.target.value,
											},
										})
								}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Вес</p>
						<input
								value={product.specifications.weight}
								onChange={(e) =>
										setProduct({
											...product,
											specifications: {
												...product.specifications,
												weight: e.target.value,
											},
										})
								}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Тип</p>
						<select
								value={product.filters.type}
								onChange={(e) =>
										setProduct({
											...product,
											filters: {...product.filters, type: e.target.value},
										})
								}
								className={styles.popupInput}
								type="text"
						>
							<option value="Дизельный">Дизельный</option>
							<option value="Бензиновый">Не дизельный?</option>
						</select>
					</div>
					<div className={styles.productLabel}>
						<p>Потребление</p>
						<input
								value={product.filters.power}
								onChange={(e) =>
										setProduct({
											...product,
											filters: {...product.filters, power: e.target.value},
										})
								}
								className={styles.popupInput}
								type="text"
						/>
					</div>
					<div className={styles.productLabel}>
						<p>Особенности (через запятую)</p>
						<input
								value={benefitsValue}
								onChange={(e) => handleBenefitsChange(e)}
								className={styles.popupInput}
								type="text"
						/>
					</div>

					<div className={styles.productLabel}>
						<p>Цена за 1 сутки</p>
						<input
								value={product.rentalPeriods[0].price}
								onChange={(e) =>
										handleRentalPeriodChange(0, e.target.value)
								}
								className={styles.popupInput}
								type="number"
						/>
					</div>

					<div className={styles.productLabel}>
						<p>Цена за 3 суток</p>
						<input
								value={product.rentalPeriods[1].price}
								onChange={(e) =>
										handleRentalPeriodChange(1, e.target.value)
								}
								className={styles.popupInput}
								type="number"
						/>
					</div>

					<div className={styles.productLabel}>
						<p>Цена за 10 суток</p>
						<input
								value={product.rentalPeriods[2].price}
								onChange={(e) =>
										handleRentalPeriodChange(2, e.target.value)
								}
								className={styles.popupInput}
								type="number"
						/>
					</div>

					<div className={styles.productLabel}>
						<p>Цена за 30 суток</p>
						<input
								value={product.rentalPeriods[3].price}
								onChange={(e) =>
										handleRentalPeriodChange(3, e.target.value)
								}
								className={styles.popupInput}
								type="number"
						/>
					</div>

					<div className={styles.techLabels}>
						<p>Характеристики</p>
						<div className={styles.techLabelsContainer}>
							{product.rentalDetails.map((item, index) => (
									<div key={index} className={styles.productLabel}>
										<input
												placeholder="Название поля"
												value={item.textLeft}
												onChange={(e) => handleRentalDetailsChange(index, 'textLeft', e.target.value)}
												className={styles.popupInput}
												type="text"
										/>
										<input
												placeholder="Значение поля"
												value={item.textRight}
												onChange={(e) => handleRentalDetailsChange(index, 'textRight', e.target.value)}
												className={styles.popupInput}
												type="text"
										/>
									</div>
							))}
						</div>
						<button onClick={addRentalItem} className={styles.newRawButton}>Add new row</button>
					</div>

					<button
							onClick={handleAddProduct}
							className={styles.popupButton}
					>
						Add new product
					</button>
				</div>
			</div>
	);
}
