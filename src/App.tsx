import {Routing} from "@/components/Routing.tsx";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {refresh} from "@/store/slices/userSlice/thunks/auth/refresh.ts";
import {getUserData} from "@/store/slices/userSlice/thunks/user/getUserData.ts";

export const App = () => {

	return (
		<>
			<Routing/>
		</>
	);
};
