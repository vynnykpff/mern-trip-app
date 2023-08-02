import styles from './Modal.module.css';
import {useForm} from "react-hook-form";

export const Modal = () => {

	const {
		handleSubmit,
		register,
		formState: {errors, isValid},
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.modalWrapper}>

			<div className={styles.modalHeader}>
				<p className={styles.modalTitle}>Create trip</p>


				<div className={styles.closeWrapper}>
					<svg className={styles.closeIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					     stroke="currentColor" strokeWidth="2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</div>
			</div>

			<div className={styles.modalFieldsWrapper}>
				<label className={styles.modalLabel} htmlFor="city">City</label>
				<input {...register('city', {required: "Required field"})} className={styles.modalField} id="city" type="text"
				       placeholder="Please select a city"/>
				<label className={styles.modalLabel} htmlFor="from">Start date</label>
				<input  {...register('from', {required: true})} className={styles.modalField} id="from" type="date"/>
				<label className={styles.modalLabel} htmlFor="to">End date</label>
				<input  {...register('to', {required: true})} className={styles.modalField} id="to" type="date"/>
			</div>

			<div style={{height: 40}}>
				{errors?.city && <p>{errors?.city?.message || "Error!"}</p>}
			</div>

			<div className={styles.footerModal}>
				<div className={styles.buttonWrapper}>
					<button className={styles.cancelButton}>Cancel</button>
					<input type="submit" placeholder="Save"/>
				</div>
			</div>

		</form>
	);
};
