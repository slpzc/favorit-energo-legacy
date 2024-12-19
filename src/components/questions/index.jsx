import styles from './question.module.css';
import {QuestionCard} from "./questionCard.jsx";

const AboutList = [
	{
		q: "За чей счет доставка?",
		a: "Доставка осуществляется за счет Арендатора. Нанимаем манипулятор и выставляем в счёт, либо самовывоз."
	},
	{
		q: "Если ДГУ вышло из строя?",
		a: "В случае выхода ДГУ из строя, сервисная служба производит оперативный ремонт. Если исправить на месте не получается, то производим замену ДГУ той же мощности за свой счёт. "
	},

	{
		q: "Кто производит сервисное обслуживание?",
		a: "Сервисное обслуживание арендного оборудования мы производим сами и за свой счет, В удобное для Арендатора время."
	},
	{
		q: "Предоставляете ли вы дизельное топливо?",
		a: "Нет, заправку ДГУ осуществляет Арендатор."
	}
];

export const Questions = () => {
	return (
			<section className={styles.about}>
				<div className={`globalWrapper ${styles.aboutWrapper}`}>
					<div className={styles.textBlock}>
						<h2 className={styles.title}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
						<p className="text">Расскажем о деталях, когда потребуется наше вмешательство</p>
					</div>
					<ul className={styles.accordion}>
						{AboutList.map((aboutItem, index) => (
								<QuestionCard key={index} aboutItem={aboutItem}/>
						))}
					</ul>
				</div>
			</section>
	);
};





