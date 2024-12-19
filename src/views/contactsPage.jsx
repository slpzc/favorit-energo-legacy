import {PhoneForm} from "../components/feedback";
import {Map} from "../components/contacts/map";
import {ContactsInfo} from "../components/contacts/contactsInfo";

export const ContactsPage = () => {
	return (
			<main>
				<Map/>
				<ContactsInfo/>
				<PhoneForm/>
			</main>
	);
}