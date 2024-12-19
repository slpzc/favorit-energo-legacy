import styles from "./about.module.css";

export const About = () => {
	return (
			<section className={styles.aboutSection}>
				<div className={`globalWrapper ${styles.aboutWrapper}`}>
					<h1 className={styles.title}>о нас</h1>
					<div className={styles.about}>
						<p className={styles.text}>
							<span className={styles.boldText}>Favorit Energo —</span>{" "}
							специализированное предприятие по продаже, аренде, обслуживанию и
							ремонту компрессоров, дизель-генераторов, сварочных агрегатов,
							систем подготовки сжатого воздуха и систем внедрения энергетических
							проектов. Мы предлагаем своим заказчикам услугу по аренде дизельных
							электростанции в диапазоне мощностей от 16 до 560 кВт. Дизельные
							генераторы марок AIRMAN и WILSON – это надежная, экономичная и очень
							тихая в своей работе техника.
						</p>
						<img className={styles.textImage} src="/products/Airman SDG60S/SDG60S-3A6.jpg"/>
					</div>
					<div className={styles.aboutCards}>
						<div className={styles.card}>
							<img src="/images/qual.png"/>
							<div className={styles.textBlock}>
								<h2 className={styles.cardTitle}>ЧЕСТНОСТЬ</h2>
								<p className={styles.cardText}>
									Мы всегда открыты и честны. Прозрачность в каждом действии.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<img src="/images/safe.png"/>
							<div className={styles.textBlock}>
								<h2 className={styles.cardTitle}>НАДЕЖНОCТЬ</h2>
								<p className={styles.cardText}>
									Наши клиенты могут на нас положиться. Гарантируем стабильность.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<img src="/images/prof.png"/>
							<div className={styles.textBlock}>
								<h2 className={styles.cardTitle}>ПРОФЕССИОНАЛЬНОСТЬ</h2>
								<p className={styles.cardText}>
									Опыт и компетентность. Профессиональный подход к каждому
									проекту.
								</p>
							</div>
						</div>
					</div>
					<h1 className={styles.title}>наше оборудование</h1>
					<div className={styles.benefits}>
						<div className={styles.benefit}>
							<img src="/images/benefit2.png"/>
							<div className={styles.textBlock}>
								<h2 className={styles.cardTitle}>НАДЕЖНОCТЬ</h2>
								<p className={styles.cardText}>
									Ваш уверенный выбор. Надёжные решения для вашего бизнеса.
								</p>
							</div>
						</div>
						<div className={styles.benefit}>
							<img src="/images/benefit.png"/>
							<div className={styles.textBlock}>
								<h2 className={styles.cardTitle}>КАЧЕСТВО</h2>
								<p className={styles.cardText}>
									Высокие стандарты во всем. Качество, которому можно доверять.
								</p>
							</div>
						</div>
						<div className={styles.benefit}>
							<img src="/images/benefit3.png"/>
							<div className={styles.textBlock}>
								<h2 className={styles.cardTitle}>СЕРТИФИЦИРОВАННОСТЬ</h2>
								<p className={styles.cardText}>
									Признанные профессионалы. Наши достижения подтверждены опытом.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
	);
};
