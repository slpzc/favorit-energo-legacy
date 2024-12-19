import React, {useEffect, useState} from "react";
import styles from "./catalog.module.css";

export const Filters = ({onFilterChange}) => {
	const [generatorType, setGeneratorType] = useState("Дизельный");
	const [isOpenGenerator, setIsOpenGenerator] = useState(false);
	const [isOpenMaxPower, setIsOpenMaxPower] = useState(false);
	const [selectedPower, setSelectedPower] = useState([]);

	const handleCheckboxChange = (type) => {
		setGeneratorType(type);
	};

	const toggleOpenGenerator = () => {
		setIsOpenGenerator(!isOpenGenerator);
	};

	const toggleOpenMaxPower = () => {
		setIsOpenMaxPower(!isOpenMaxPower);
	};

	const handlePowerChange = (power) => {
		setSelectedPower((prevSelectedPower) =>
				prevSelectedPower.includes(power)
						? prevSelectedPower.filter((p) => p !== power)
						: [...prevSelectedPower, power]
		);
	};

	useEffect(() => {
		onFilterChange({generatorType, selectedPower});
	}, [generatorType, selectedPower, onFilterChange]);

	return (
			<section className={styles.filterSection}>
				<div className={`globalWrapper ${styles.filterWrapper}`}>
					<div className={styles.textBlock}>
						<h2 className={styles.title}>аренда дизельных генераторов</h2>
						<p className={styles.text}>
							Используйте удобные фильтры и поиск для подбора генератора
						</p>
					</div>
					<div className={styles.filters}>
						<div className={styles.filter}>
							<label className={styles.label} onClick={toggleOpenGenerator}>
								Тип генератора
								<img
										src="/accordionArrow.svg"
										alt="arrow"
										className={`${styles.arrow} ${
												isOpenGenerator ? styles.open : ""
										}`}
								/>
							</label>
							{isOpenGenerator && (
									<div className={styles.checkboxGroup}>
										<label
												className={`${styles.checkboxLabel} ${
														generatorType === "Дизельный" ? styles.active : ""
												}`}
										>
											<input
													type="radio"
													name="generatorType"
													value="Дизельный"
													checked={generatorType === "Дизельный"}
													onChange={() => handleCheckboxChange("Дизельный")}
													className={styles.checkbox}
											/>
											<span className={styles.checkboxText}>Дизельный</span>
										</label>
										<label
												className={`${styles.checkboxLabel} ${
														generatorType === "Бензиновый" ? styles.active : ""
												}`}
										>
											<input
													type="radio"
													name="generatorType"
													value="Бензиновый"
													checked={generatorType === "Бензиновый"}
													onChange={() => handleCheckboxChange("Бензиновый")}
													className={styles.checkbox}
											/>
											<span className={styles.checkboxText}>Бензиновый</span>
										</label>
									</div>
							)}
						</div>

						<div className={styles.filter}>
							<label className={styles.label} onClick={toggleOpenMaxPower}>
								Максимальная мощность, кВт
								<img
										src="/accordionArrow.svg"
										alt="arrow"
										className={`${styles.arrow} ${
												isOpenMaxPower ? styles.open : ""
										}`}
								/>
							</label>
							{isOpenMaxPower && (
									<div className={styles.checkboxGroup}>
										{[16, 30, 40, 100, 300].map((power) => (
												<label
														key={power}
														className={`${styles.checkboxLabel} ${
																selectedPower.includes(power) ? styles.active : ""
														}`}
												>
													<input
															type="checkbox"
															name="maxPower"
															value={power}
															checked={selectedPower.includes(power)}
															onChange={() => handlePowerChange(power)}
															className={styles.checkbox}
													/>
													<span className={styles.checkboxText}>{power}</span>
												</label>
										))}
									</div>
							)}
						</div>
					</div>
				</div>
			</section>
	);
};
