import styles from './Search.module.css';
import {LuDelete, LuSearch} from "react-icons/lu";

export const Search = () => {
	return (
		<form className={styles.form}>
			<button>
				<LuSearch/>
			</button>
			<input className={styles.input} placeholder="Search your trip" required={true} type="text"/>
			<button className={styles.reset} type="reset">
				<LuDelete/>
			</button>
		</form>
	);
};
