import styles from './footer.module.css';
import Link from "next/link";

export const Footer = () => {
	return (
			<footer className={styles.footer}>
				<div className={`globalWrapper ${styles.globalWrapper}`}>
					<Link href={"/"}>
						<p className={styles.logo}>Favorit <span className={styles.logoSpan}>Energo</span></p>
					</Link>
					<div className={styles.footerLists}>
						<div className={styles.footerList}>
							<p className={`text ${styles.text}`}>Аренда</p>
							<ul className={styles.footerLinks}>
								<Link href={"/catalog/compressors"}>
									<li className={`text ${styles.footerItem}`}>Аренда компрессоров</li>
								</Link>
								<Link href={"/catalog/generators"}>
									<li className={`text ${styles.footerItem}`}>Аренда генераторов</li>
								</Link>

							</ul>
						</div>
						<div className={styles.footerList}>
							<p className={`text ${styles.text}`}>Компания</p>
							<ul className={styles.footerLinks}>
								<Link href={"/review"}>
									<li className={`text ${styles.footerItem}`}>Отзывы</li>
								</Link>
								<Link href={"/contacts"}>
									<li className={`text ${styles.footerItem}`}>Контакты</li>
								</Link>
							</ul>
						</div>
						<div className={styles.footerList}>
							<p className={`text ${styles.text}`}>Прочее</p>
							<ul className={styles.footerLinks}>
								<Link href={"/about"}>
									<li className={`text ${styles.footerItem}`}>FAQ</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</footer>

	);
}