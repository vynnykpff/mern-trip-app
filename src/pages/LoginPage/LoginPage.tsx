import {useForm} from "react-hook-form";
import {AuthData} from "@/types/AuthData.ts";
import styles from "@/styles/common.module.css";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {useNavigate} from "react-router-dom";
import {home, register as registerRoute} from "@/core";
import {login} from "@/store/slices/userSlice/thunks/auth/login.ts";
import {useEffect} from "react";
import {useAppSelector} from "@/hooks/useAppSelector.ts";

const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {authorized} = useAppSelector(state => state.userSliceReducer);


    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm<AuthData>({
        mode: "onBlur",
    });

    const onSubmit = (data: AuthData) => {
        dispatch(login.asyncThunk(data));
    };

    useEffect(() => {
        if (authorized) {
            navigate(home);
        }
    }, [authorized]);

    return (
        <div className={styles.formWrapper}>
            <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.formTitle}>Login</p>
                <div className={styles.fieldsWrapper}>
                    <label className={styles.formLabel} htmlFor="username">Username
                        <p className={styles.formError}>{errors?.username &&
                            <span>{(errors?.username?.message as string) || "Error!"}</span>}
                        </p>
                    </label>
                    <input
                        {...register("username", {required: "Required field", maxLength: 20, minLength: 4})}
                        className={styles.formField} id="username" type="text"
                    />
                    <label className={styles.formLabel} htmlFor="password">Password
                        <p className={styles.formError}>{errors?.password &&
                            <span>{(errors?.password?.message as string) || "Error!"}</span>}</p>
                    </label>
                    <input
                        {...register("password", {required: "Required field", minLength: 6})}
                        className={styles.formField}
                        id="password" type="password"/>
                </div>
                <div className={styles.buttonWrapper}>
                    <a className={styles.link} onClick={() => navigate(registerRoute)}>Go to Registration</a>
                    <button type="submit" className={styles.agreeButton}>Login</button>
                </div>
            </form>
        </div>

    );
};

export default LoginPage;
