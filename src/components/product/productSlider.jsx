"use client";

import styles from './product.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductSlider.css';
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';


export const ProductSwiper = ({media}) => {
	return (
			<div className={styles.swiperContainer}>
				<Swiper
						modules={[Navigation, Pagination]}
						navigation
						pagination={{clickable: true}}
				>
					{media.map((url, key) => (
							<SwiperSlide key={key} className={styles.slide}>
								<img src={url} alt={`Slide ${key}`} className={styles.slideImage}/>
							</SwiperSlide>
					))}
				</Swiper>
			</div>
	);
}


