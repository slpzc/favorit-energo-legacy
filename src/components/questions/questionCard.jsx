import styles from "./question.module.css";
import {useRef, useState} from "react";

export const QuestionCard = ({aboutItem}) => {
	const ref = useRef()
	const [isShow, setIsShow] = useState(false);

	const toggleAccordion = () => {
		if (ref.current) {
			setIsShow(!isShow);
			if (!isShow) {
				return ref.current.style.height = ref.current.scrollHeight + "px";
			}
			ref.current.style.height = "85px";
		}

	};

	return (
			<li onClick={() => toggleAccordion()} ref={ref} className={`${styles.accordionItem} ${isShow && styles.active}`}>
				<div
						className={styles.accordionHeader}

				>
					{aboutItem.q}
					<img className={`${styles.arrow} ${isShow && styles.rotate}`} src="/accordionArrow.svg" alt=""/>
				</div>
				<div className={`${styles.accordionBody}`}>
					{aboutItem.a}
				</div>
			</li>
	);
};