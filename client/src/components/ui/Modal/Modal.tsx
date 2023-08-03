import styles from './Modal.module.css';
import {useForm} from "react-hook-form";
import cn from "classnames";


export const Modal = ({modalActive, setModalActive}) => {

	console.log("MODAL:", modalActive)

	const {
		handleSubmit,
		register,
		reset,
		formState: {errors, isValid},
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	}

	const handleClick = () => {
		reset();
		setModalActive(false)
	}

	return (
		<div onClick={handleClick}
		     className={`${styles.modalOverlay}  ${modalActive ? cn(styles.modal, styles.active) : styles.modal}`}>

			<form onClick={e => e.stopPropagation()} onSubmit={handleSubmit(onSubmit)} className={styles.modalWrapper}>

				<div className={styles.modalHeader}>
					<p className={styles.modalTitle}>Create trip</p>

					<div onClick={handleClick} className={styles.closeWrapper}>
						<svg className={styles.closeIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						     stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</div>
				</div>

				<div className={styles.modalFieldsWrapper}>
					<label className={styles.modalLabel} htmlFor="city">City
						<p className={styles.modalError}>{errors?.city && <span>{errors?.city?.message || "Error!"}</span>}</p>
					</label>
					<input {...register('city', {required: "Required field"})} className={styles.modalField} id="city" type="text"
					       placeholder="Please select a city"/>
					<label className={styles.modalLabel} htmlFor="from">Start date
						<p className={styles.modalError}>{errors?.from && <span>{errors?.from?.message || "Error!"}</span>}</p>
					</label>
					<input  {...register('from', {required: "Required field"})} className={styles.modalField} id="from"
					        type="date"/>

					<label className={styles.modalLabel} htmlFor="to">End date
						<p className={styles.modalError}>{errors?.to && <span>{errors?.to?.message || "Error!"}</span>}</p>
					</label>
					<input  {...register('to', {required: "Required field"})} className={styles.modalField} id="to" type="date"/>
				</div>

				<div className={styles.footerModal}>
					<div className={styles.buttonWrapper}>
						<button onClick={handleClick} className={styles.cancelButton}>Cancel</button>
						<button onClick={handleClick} type="submit" className={styles.agreeButton}>Save</button>
					</div>
				</div>

			</form>
		</div>
	);
};
