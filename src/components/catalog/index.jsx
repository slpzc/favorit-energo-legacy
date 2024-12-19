"use client";

import React, {useState} from "react";
import styles from "./catalog.module.css";
import Link from "next/link";

export const Catalog = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	const handleMouseEnter = (card) => {
		setHoveredCard(card);
	};

	const handleMouseLeave = () => {
		setHoveredCard(null);
	};

	return (
			<section className={styles.catalogSection}>
				<div className={`globalWrapper ${styles.catalogWrapper}`}>
					<div className={styles.textBlock}>
						<h2 className={styles.title}>КАТАЛОГ</h2>
						<p className={styles.text}>
							Расскажем о деталях и гарантийных случаях, когда потребуется наше
							вмешательство
						</p>
					</div>
					<div className={styles.catalog}>
						<div className={styles.cards}>
							<div
									className={`${styles.card} ${
											hoveredCard && hoveredCard !== "генераторы" ? styles.dimmed : ""
									}`}
									onMouseEnter={() => handleMouseEnter("генераторы")}
									onMouseLeave={handleMouseLeave}
							>
								<div className={styles.content}>
									<div className={styles.cardTextBlock}>
										<h2 className={styles.cardTitle}>ГЕНЕРАТОРЫ</h2>
										<p className={styles.cardText}>
											Особый ассортимент выбора техники под ваши задачи
										</p>
										<Link href="/catalog/generators">
											<button className={styles.cardButton}>
												В ассортимент →
											</button>
										</Link>
									</div>
								</div>
							</div>
							<div
									className={`${styles.card} ${
											hoveredCard && hoveredCard !== "компрессоры"
													? styles.dimmed
													: ""
									}`}
									onMouseEnter={() => handleMouseEnter("компрессоры")}
									onMouseLeave={handleMouseLeave}
							>
								<div className={styles.content}>
									<div className={styles.cardTextBlock}>
										<h2 className={styles.cardTitle}>КОМПРЕССОРЫ</h2>
										<p className={styles.cardText}>
											Широкий выбор оборудования для любых требований
										</p>
										<Link href="/catalog/compressors">
											<button className={styles.cardButton}>
												В ассортимент →
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	);
};