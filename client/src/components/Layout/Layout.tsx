import {Suspense, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Loader} from "../ui/Loader/Loader.tsx";
import styles from "../../styles/index.module.css"

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
				<div className={styles.container}>
					<Suspense fallback={<Loader/>}>
						<Outlet/>
					</Suspense>
				</div>
				: <Loader/>
			}
		</>
	);
};
