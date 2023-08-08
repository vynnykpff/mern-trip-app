import commonStyles from "@/styles/common.module.css";
import styles from "./ProfileSettingsForm.module.css";
import {useForm} from "react-hook-form";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {patchUser} from "@/store/slices/userSlice/thunks/user/patchUser.ts";
import {PatchUser} from "@/types/PatchUser.ts";

export const ProfileSettingsForm = () => {
	const {user} = useAppSelector(state => state.userSliceReducer);
	const dispatch = useAppDispatch();

	const {
		handleSubmit,
		register,
		reset,
		formState: {errors},
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = (data: PatchUser) => {
		const newData: Partial<PatchUser> = {};

		for (const i in data) {
			const key = i as keyof PatchUser;
			if (data[key] && data[key] !== user?.[key as keyof typeof user]) {
				newData[key] = data[key]
			}
		}

		dispatch(patchUser.asyncThunk(newData));
	}

	return (
		<form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
			<label className={commonStyles.formLabel} htmlFor="username">Username
				<input defaultValue={user.username} {...register("username")}
				       className={commonStyles.formField} id="username"
				       type="text"/>
				<p className={styles.formError}>{errors?.username &&
					<span>{(errors?.username?.message as string) || "Error!"}</span>}
				</p>
			</label>

			<label className={commonStyles.formLabel} htmlFor="password">Password
				<input {...register("password")} className={commonStyles.formField}
				       id="password" type="password"/>
				<p className={styles.formError}>{errors?.userPassword &&
					<span>{(errors?.userPassword?.message as string) || "Error!"}</span>}
				</p>
			</label>

			<label className={commonStyles.formLabel} htmlFor="avatar">User Image
				<input defaultValue={user.avatar} {...register("avatar")}
				       className={commonStyles.formField}
				       id="avatar"
				       type="text"/>
				<p className={styles.formError}>{errors?.userImage &&
					<span>{(errors?.userImage?.message as string) || "Error!"}</span>}
				</p>
			</label>
			<button type="submit" className={commonStyles.agreeButton}>Save</button>
		</form>
	);
};
