import styles from './Button.module.css';

export const Button = ({setModalActive, modalActive}) => {
	return (
		<button onClick={() => setModalActive(!modalActive)} className={styles.button}>
			<svg className={styles.buttonIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus">
				<path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
			</svg>
			<p>Add Trip</p>
		</button>
	);
};
