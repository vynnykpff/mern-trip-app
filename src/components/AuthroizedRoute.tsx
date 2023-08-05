import {FC, PropsWithChildren, useEffect} from "react";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {useNavigate} from "react-router-dom";
import {UserService} from "@/services/UserService.ts";
import {login} from "@/core";

export const AuthorizedRoute: FC<PropsWithChildren> = ({children}) => {
	const {authorized} = useAppSelector(state => state.userSliceReducer);
	const navigate = useNavigate();

	const onMount = async () => {
		try {
			await UserService.getUserData();
		} catch (e) {
			if (!authorized) {
				navigate(login);
			}
		}
	}

	useEffect(() => {
		void onMount();
	}, [])

	return (
		<>
			{children}
		</>
	)
}
