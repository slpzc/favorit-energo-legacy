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
					<iframe
							className={styles.mapIframe}
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2186.940582443975!2d60.733112577138236!3d56.761157313877014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16989b3715085%3A0x72231a7d59723428!2z0YPQuy4g0JDQu9GM0L_QuNC90LjRgdGC0L7QsiwgNzfQsiwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDEw!5e0!3m2!1sru!2sru!4v1731176356884!5m2!1sru!2sru"
							width="1600"
							height="394"
							style={{border: 0}}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>
	);
};
