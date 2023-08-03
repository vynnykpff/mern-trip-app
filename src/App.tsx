import {Route, Routes} from 'react-router-dom';
import {lazy} from 'react';
import {Modals} from "@/components/Modals/Modals.tsx";
import {Layout} from "@/components";
import {all, home, profile} from "@/core";

const HomePage = lazy(() => import('./pages/HomePage/HomePage.tsx'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.tsx'));

export const App = () => {
	return (
		<>
			<Routes>
				<Route path={home} element={<Layout/>}>
					<Route path={home} element={<HomePage/>}/>
					<Route path={profile} element={<ProfilePage/>}/>
					<Route path={all} element={<NotFoundPage/>}/>
				</Route>
			</Routes>
			<Modals/>
		</>
	);
};
