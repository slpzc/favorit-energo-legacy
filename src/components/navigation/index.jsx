import styles from './navigation.module.css';
import Link from "next/link";

export const Navigation = () => {
	return (
			<nav className={styles.nav}>
				<div className={`globalWrapper ${styles.wrapper}`}>
					<Link href={"/"}>
						<p className={styles.logo}>Favorit <span className={styles.logoSpan}>Energo</span></p>
					</Link>
					<ul className={styles.list}>
						<Link className='text' href={"/review"}>Отзывы</Link>
						<Link className='text' href={"/catalog"}>Каталог</Link>
						<Link className='text' href={"/about"}>FAQ</Link>
						<Link className='text' href={"/contacts"}>Контакты</Link>
					</ul>
				</div>
			</nav>
	);
}