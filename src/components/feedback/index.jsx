"use client";

import {useState} from "react";
import axios from "axios";
import styles from "./feedback.module.css";

export const PhoneForm = () => {
	const [phone, setPhone] = useState("");

	const handleInputChange = (event) => {
		const value = event.target.value;
		if (/^\d*$/.test(value)) {
			setPhone(value);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("Телефон:", phone);

		// Отправка сообщения в Telegram
		const token = "7020328790:AAFKDuNbaGjwwMl5CUx-ca5ImBNMJ66_PGc"; // Замените на токен вашего бота
		const chatId = "838970527"; // Замените на ваш чат ID или имя пользователя
		const message = `Новый номер телефона: ${phone}`;

		try {
			await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
				chat_id: chatId,
				text: message,
			});
			console.log("Сообщение отправлено в Telegram");
		} catch (error) {
			console.error("Ошибка при отправке сообщения в Telegram", error);
		}

		setPhone("");
	};

	return (
			<section id="phoneForm" className={styles.contacts}>
				<div className={`globalWrapper ${styles.globalWrapper}`}>
					<div className={styles.contactsText}>
						<h2 className={styles.title}>Обсудим вашу задачу</h2>
						<p className={`text ${styles.text}`}>Перезвоним в течение 15 минут</p>
					</div>
					<form onSubmit={handleSubmit} className={styles.phoneForm}>
						<label htmlFor="phone" className={`text ${styles.phoneLabel}`}>
							Ваш телефон
						</label>
						<input
								role="presentation"
								autoComplete="off"
								type="tel"
								maxLength={11}
								id="phone"
								value={phone}
								onChange={handleInputChange}
								className={styles.phoneInput}
								placeholder="+7 902 876 94 22"
								required
						/>
						<button type="submit" className={styles.phoneSubmit}>
							<img src="/BlackArrow.svg" alt=""/>
						</button>
					</form>
				</div>
			</section>
	);
};
