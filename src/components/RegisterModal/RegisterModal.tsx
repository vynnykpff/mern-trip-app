import {Modal} from "@/components/ui/Modal/Modal.tsx";
import {useForm} from "react-hook-form";
import styles from "@/components//LoginModal/LoginModal.module.css";
import {useUiState} from "@/hooks/useUiState.ts";
import {AuthData} from "@/types/AuthData.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {register as registerThunk} from "@/store/slices/userSlice/thunks/auth/register.ts";
import {MouseEvent} from "react";
import {useNavigate} from "react-router-dom";
import {profile} from "@/core";

export const RegisterModal = () => {
	const [modalActive, setModalActive] = useUiState("registerModal");
	const [_, setLoginModal] = useUiState("loginModal");
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
		dispatch(registerThunk.asyncThunk(data));
		navigate(profile);
	}

	const onHide = () => {
		reset();
	}

	const closeModal = () => {
		setModalActive(false);
	}

	const onLoginLinkClick = (e: MouseEvent) => {
		e.preventDefault();
		setModalActive(false);
		setLoginModal(true);
	}

	return (
		<Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive} onHide={onHide}
		       title="Register">
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

				<a onClick={onLoginLinkClick}>You have already account? - login</a>

				<div className={styles.footerModal}>
					<div className={styles.buttonWrapper}>
						<button onClick={closeModal} className={styles.cancelButton}>Cancel</button>
						<button type="submit" className={styles.agreeButton}>Register</button>
					</div>
				</div>
			</form>
		</Modal>
	);
};
