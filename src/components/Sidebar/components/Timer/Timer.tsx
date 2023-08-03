import styles from './Timer.module.css';

export const Timer = () => {
	return (
		<div className={styles.timerWrapper}>
			<div className={styles.timeline}>
				<p className={styles.date}>30</p>
				<p className={styles.nameDate}>days</p>
			</div>
			<div className={styles.timeline}>
				<p className={styles.date}>15</p>
				<p className={styles.nameDate}>hours</p>
			</div>
			<div className={styles.timeline}>
				<p className={styles.date}>15</p>
				<p className={styles.nameDate}>hours</p>
			</div>
			<div className={styles.timeline}>
				<p className={styles.date}>30</p>
				<p className={styles.nameDate}>seconds</p>
			</div>
		</div>
	);
};
