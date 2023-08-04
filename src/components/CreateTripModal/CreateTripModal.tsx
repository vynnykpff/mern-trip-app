import {Modal} from "@/components/ui/Modal/Modal.tsx";
import {useForm} from "react-hook-form";
import styles from "./CreateTripModal.module.css";
import {useUiState} from "@/hooks/useUiState.ts";

export const CreateTripModal = () => {
	const [modalActive, setModalActive] = useUiState("createTripModal");
	const {
		handleSubmit,
		register,
		reset,
		formState: {errors},
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = (data: any) => {
		alert(JSON.stringify(data));
	}

	const onHide = () => {
		reset();
	}

	const closeModal = () => {
		setModalActive(false);
	}

	return (
		<Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive} onHide={onHide}
		       title="Create trip">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.modalFieldsWrapper}>
					<label className={styles.modalLabel} htmlFor="city">City
						<p className={styles.modalError}>{errors?.city &&
							<span>{(errors?.city?.message as string) || "Error!"}</span>}</p>
					</label>
					<input {...register('city', {required: "Required field"})} className={styles.modalField} id="city" type="text"
					       placeholder="Please select a city"/>
					<label className={styles.modalLabel} htmlFor="from">Start date
						<p className={styles.modalError}>{errors?.from &&
							<span>{(errors?.from?.message as string) || "Error!"}</span>}</p>
					</label>
					<input  {...register('from', {required: "Required field"})} className={styles.modalField} id="from"
					        type="date"/>
					<label className={styles.modalLabel} htmlFor="to">End date
						<p className={styles.modalError}>{errors?.to &&
							<span>{(errors?.to?.message as string) || "Error!"}</span>}</p>
					</label>
					<input  {...register('to', {required: "Required field"})} className={styles.modalField} id="to" type="date"/>
				</div>
			</form>
			<div className={styles.footerModal}>
				<div className={styles.buttonWrapper}>
					<button onClick={closeModal} className={styles.cancelButton}>Cancel</button>
					<input type="submit" className={styles.agreeButton}/>Save
				</div>
			</div>
		</Modal>
	);
};
