import {Modal} from "@/components/ui/Modal/Modal.tsx";
import {useForm} from "react-hook-form";
import styles from "./LoginModal.module.css";
import {useUiState} from "@/hooks/useUiState.ts";
import {AuthData} from "@/types/AuthData.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {login} from "@/store/slices/userSlice/thunks/auth/login.ts";
import {MouseEvent} from "react";
import {useNavigate} from "react-router-dom";
import {profile} from "@/core";


export const LoginModal = () => {
	const [modalActive, setModalActive] = useUiState("loginModal");
	const [_, setRegisterModal] = useUiState("registerModal");
	const dispatch = useAppDispatch();
	const navigate = useNavigate();


	const {
		handleSubmit,
		register,
		reset,
		formState: {errors},
	} = useForm<AuthData>({
		mode: "onBlur",
	});

	const onSubmit = (data: AuthData) => {
		dispatch(login.asyncThunk(data));
		navigate(profile);
	}

	const onHide = () => {
		reset();
	}

	const closeModal = () => {
		setModalActive(false);
	}

	const onRegisterLinkClick = (e: MouseEvent) => {
		e.preventDefault();
		setModalActive(false);
		setRegisterModal(true);
	}

	return (
		<Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive} onHide={onHide}
		       title="Login">
			<form className={styles.modalForm} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.modalFieldsWrapper}>
					<label className={styles.modalLabel} htmlFor="username">Username
						<p className={styles.modalError}>{errors?.username &&
							<span>{(errors?.username?.message as string) || "Error!"}</span>}
						</p>
					</label>
					<input
						{...register('username', {required: "Required field", maxLength: 20, minLength: 4})}
						className={styles.modalField} id="username" type="text"
					/>
					<label className={styles.modalLabel} htmlFor="password">Password
						<p className={styles.modalError}>{errors?.password &&
							<span>{(errors?.password?.message as string) || "Error!"}</span>}</p>
					</label>
					<input
						{...register('password', {required: "Required field", minLength: 6})}
						className={styles.modalField}
						id="password" type="password"/>
				</div>

				<a onClick={onRegisterLinkClick}>Don't have account? - registration</a>

				<div className={styles.footerModal}>
					<div className={styles.buttonWrapper}>
						<button onClick={closeModal} className={styles.cancelButton}>Cancel</button>
						<button type="submit" className={styles.agreeButton}>Login</button>
					</div>
				</div>
			</form>
		</Modal>
	);
};
