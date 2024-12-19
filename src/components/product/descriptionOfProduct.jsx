import styles from "./product.module.css";

export const Description = ({description}) => {
	return (
			<div className={styles.productDescription}>
				<h2 className={styles.subtitle}>Описание</h2>
				<div className={styles.description}>
					<p className={styles.descriptionText}>{description}</p>
				</div>
			</div>
	);
};
