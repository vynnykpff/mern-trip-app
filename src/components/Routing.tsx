import {Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import {all, home, profile, profileArchive, profileHome, profileSettings} from "@/core";
import {Layout} from "@/components/Layout/Layout.tsx";
import {Loader} from "@/components/ui/Loader/Loader.tsx";
import {ProfileHome} from "@/components/ProfileContent/components/ProfileHome/ProfileHome.tsx";
import {ProfileArchive} from "@/components/ProfileContent/components/ProfileArchive/ProfileArchive.tsx";
import {ProfileSettings} from "@/components/ProfileContent/components/ProfileSettings/ProfileSettings.tsx";
import {ProfileContent} from "@/components/ProfileContent/ProfileContent.tsx";

const HomePage = lazy(() => import('@/pages/HomePage/HomePage.tsx'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage/ProfilePage.tsx'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage.tsx'));

export const Routing = () => {
	return (
		<Layout>
			<Suspense fallback={<Loader/>}>
				<Routes>
					<Route path={home} element={<HomePage/>}/>
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
