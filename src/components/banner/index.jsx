import styles from "./banner.module.css";
import Link from "next/link";

export const Banner = () => {
	return (
			<section className={styles.banner}>
				<div className={`globalWrapper ${styles.globalWrapper}`}>
					<div className={styles.bannerContent}>
						<div className={styles.bannerBenefits}>
							<span className={`text ${styles.text}`}>Команда лучших</span>
							<span className={`text ${styles.text}`}>Лучшая техника</span>
						</div>
						<h1 className={styles.bannerTitle}>
							Работа на профессиональном <br/> уровне
						</h1>
						<p className={`text ${styles.text}`}>
							Работаем в одной команде, достигая лучших результатов вместе с
							Заказчиком
						</p>
						<div className={styles.bannerButtons}>
							<Link href="/catalog">
								<p
										className={`text ${(styles.text, styles.bannerButton)}`}

								>
									Перейти к услугам
								</p>
							</Link>
							<Link href="/catalog">
								<p
										className={`text ${styles.text} ${styles.bannerButton}`}
								>
									<img src="/images/arrow-right.svg" alt="arrow svg"/>
								</p>
							</Link>
						</div>
					</div>
				</div>
			</section>
	);
};
