import styles from './product.module.css';
import {ProductSwiper} from './productSlider';
import {OrderOfProduct} from './orderOfProduct';
import {Description} from './descriptionOfProduct';
import {RentalDetails} from './rentalDetails';

export const Product = ({product}) => {
	return (
			<section className={styles.product}>
				<div className={`globalWrapper ${styles.globalWrapper}`}>
					<ProductSwiper media={product.media}/>
					<OrderOfProduct product={product}/>
					<Description description={product.description}/>
					<RentalDetails rentalDetails={product.rentalDetails}/>
				</div>
			</section>
	);
};