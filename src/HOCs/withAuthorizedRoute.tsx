import {FC} from "react";
import {AuthorizedRoute} from "@/components/AuthroizedRoute.tsx";

export function withAuthorizedRoute<T extends {}>(Component: FC<T>) {
	return (props: T) => {
		return (
			<AuthorizedRoute>
				<Component {...props}/>
			</AuthorizedRoute>
		)
	}
}
