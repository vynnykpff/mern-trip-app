import {Modal} from "@/components/ui/Modal/Modal.tsx";
import {useForm} from "react-hook-form";
import styles from "./LoginModal.module.css";
import {useUiState} from "@/hooks/useUiState.ts";

export const LoginModal = () => {
	const [modalActive, setModalActive] = useUiState("loginModal");
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
			<form onClick={e => e.stopPropagation()} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.modalFieldsWrapper}>
					<label className={styles.modalLabel} htmlFor="username">Username
						<p className={styles.modalError}>{errors?.username &&
							<span>{(errors?.username?.message as string) || "Error!"}</span>}</p>
					</label>
					<input {...register('username', {required: "Required field", maxLength: 20, minLength: 4})} className={styles.modalField} id="username" type="text"/>

					<label className={styles.modalLabel} htmlFor="password">Password
						<p className={styles.modalError}>{errors?.password &&
							<span>{(errors?.password?.message as string) || "Error!"}</span>}</p>
					</label>
					<input {...register('password', {required: "Required field", minLength: 6})} className={styles.modalField} id="password" type="password"/>
				</div>
			</form>
			<div className={styles.footerModal}>
				<div className={styles.buttonWrapper}>
					<button onClick={closeModal} className={styles.cancelButton}>Cancel</button>
					<button type="submit" className={styles.agreeButton}>Save</button>
				</div>
			</div>
		</Modal>
	);
};
