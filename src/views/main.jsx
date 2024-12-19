import {PhoneForm} from "../components/feedback";
import {Banner} from "../components/banner/index";
import {About} from "../components/About/index";

export const MainPage = () => {
	return (
			<main>
				<Banner/>
				<About/>
				<PhoneForm/>
			</main>
	);
}