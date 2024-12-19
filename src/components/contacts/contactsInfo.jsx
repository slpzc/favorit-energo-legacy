import Link from "next/link";
import styles from "./contacts.module.css";

export const ContactsInfo = () => {

	return (
			<section className={styles.contactsInfo}>
				<div className={`globalWrapper ${styles.contactsWrapper}`}>
					<div className={styles.textBlockInfo}>
						<h2 className={styles.title}>
							Напишите нам, или оставьте заявку на звонок
						</h2>
						<p className={styles.text}>
							Ответим на все ваши вопросы и проконсультируем с выбором
						</p>
					</div>
					<div className={styles.cards}>
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>+79028769422</h2>
							<h2 className={styles.cardTitle}>+79002031181</h2>
							<p className={styles.cardText}>Наш телефон</p>
						</div>
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>
								t_favorit@mail.ru
							</h2>
							<p className={styles.cardText}>Наша почта</p>
						</div>
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>6679107428</h2>
							<p className={styles.cardText}>ИНН</p>
						</div>
						<div className={styles.card}>
							<Link href="/requisites.pdf" target="_blank" className={styles.requisites}>
								Реквизиты компании
								<img src="/GrayArrow.svg" alt=""/>
							</Link>
						</div>
					</div>
				</div>
			</section>
	);
};