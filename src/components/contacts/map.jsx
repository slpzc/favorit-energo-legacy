import styles from "./contacts.module.css";

export const Map = () => {
	return (
			<section className={styles.map}>
				<div className={`globalWrapper ${styles.contactsWrapper}`}>
					<div className={styles.textBlock}>
						<h2 className={styles.title}>Контакты</h2>
						<p className={styles.text}>А также немного о нас</p>
					</div>
					<div className={styles.textBlock}>
						<h2 className={styles.title}>Мы в екатеринбурге, рядом с вами</h2>
						<p className={styles.text}>
							Залогом явной и лучшей коммуникации является доступность
						</p>
					</div>
					<iframe className={styles.mapIframe} src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=191824912502"
					         height="400"
					        style={{border: 0}}></iframe>
				</div>
			</section>
	);
};
