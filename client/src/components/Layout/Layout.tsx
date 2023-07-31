import {Suspense, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Container} from "../../styles/Common.styled.tsx";
import {Loader} from "../ui/Loader/Loader.tsx";

export const Layout = () => {
	const [isLoad, setIsLoad] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoad(true);
		}, 500)
	}, [])

	return (
		<>
			{isLoad ?
				<Container>
					<Suspense fallback={<Loader/>}>
						<Outlet/>
					</Suspense>
				</Container>
				: <Loader/>
			}
		</>
	);
};
