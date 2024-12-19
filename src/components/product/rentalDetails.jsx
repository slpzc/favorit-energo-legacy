"use client";

import styles from './product.module.css';

export const RentalDetails = ({rentalDetails}) => {
	const scrollToPhoneForm = () => {
		const element = document.getElementById('phoneForm');
		if (element) {
			element.scrollIntoView({behavior: 'smooth'});
		}
	};

	return (
			<div className={styles.rentalDetails}>
				<h2 className={styles.subtitle}>Характеристики</h2>
				<div className={styles.details}>
					{rentalDetails.map((detail, key) => (
							<div key={key} className={styles.detail}>
								<p className={styles.textLeft}>
									{detail.textLeft}
								</p>
								<hr className={styles.divider}/>
								<p className={styles.textRight}>
									{detail.textRight}
								</p>
							</div>
					))}
				</div>
				<button onClick={scrollToPhoneForm} className={styles.QuestionButton}>Задать вопрос о технике</button>
			</div>
	);
};