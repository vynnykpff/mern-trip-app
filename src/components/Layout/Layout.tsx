import {FC, PropsWithChildren} from "react";
import {Loader} from "@/components";
import {useMounted} from "@/hooks/useMounted";

export const Layout: FC<PropsWithChildren> = ({children}) => {
	const mounted = useMounted();

	return (
		<>
			{mounted ?
				<>
					{children}
				</>
				: <Loader/>
			}
		</>
	);
};
