import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {lazy, Suspense, useEffect} from 'react';
import {all, home, login, profile, profileArchive, profileHome, profileSettings, register} from "@/core";
import {Layout} from "@/components/Layout/Layout.tsx";
import {Loader} from "@/components/ui/Loader/Loader.tsx";
import {ProfileHome} from "@/components/ProfileContent/components/ProfileHome/ProfileHome.tsx";
import {ProfileArchive} from "@/components/ProfileContent/components/ProfileArchive/ProfileArchive.tsx";
import {ProfileSettings} from "@/components/ProfileContent/components/ProfileSettings/ProfileSettings.tsx";
import {ProfileContent} from "@/components/ProfileContent/ProfileContent.tsx";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {setUiState} from "@/store/slices/uiSlice.ts";
import {addListener} from "@reduxjs/toolkit";

const HomePage = lazy(() => import('@/pages/HomePage/HomePage.tsx'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage/ProfilePage.tsx'));
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage.tsx'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage/RegisterPage.tsx'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage.tsx'));


export const Routing = () => {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const uiState = useAppSelector(state => state.uiSliceReducer);
	const {authorized} = useAppSelector(state => state.userSliceReducer);
	const navigate = useNavigate();

	useEffect(() => {
		const keys: (keyof typeof uiState)[] = [];
		for (const i in uiState) {
			const key = i as keyof typeof uiState;
			if (uiState[key]) {
				keys.push(key);
			}
		}

		for (const key of keys) {
			dispatch(setUiState({[key]: false}));
		}


	}, [location.pathname]);

	return (
		<Layout>
			<Suspense fallback={<Loader/>}>
				<Routes>
					<Route path={home} element={<HomePage/>}/>

					<Route path={login} element={<LoginPage/>}/>
					<Route path={register} element={<RegisterPage/>}/>

					<Route path={profile} element={<ProfilePage/>}>
						<Route path={profile} element={<ProfileContent/>}/>
						<Route path={profileHome} element={<ProfileHome/>}/>
						<Route path={profileArchive} element={<ProfileArchive/>}/>
						<Route path={profileSettings} element={<ProfileSettings/>}/>
					</Route>

					<Route path={all} element={<NotFoundPage/>}/>
				</Routes>
			</Suspense>
		</Layout>
	)
}
