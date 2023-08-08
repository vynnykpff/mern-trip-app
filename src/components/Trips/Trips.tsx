import {LargeButton, Loader} from "@/components";
import styles from "./Trips.module.css";
import {useUiState} from "@/hooks/useUiState.ts";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {MouseEvent, useContext} from "react";
import {homePageContext} from "@/pages/HomePage/HomePageContext.tsx";
import {Trip} from "@/types/Trip.ts";
import {AiOutlineDelete} from "react-icons/ai";
import {HiOutlinePlus, HiPencilAlt} from "react-icons/hi";
import {deleteT} from "@/pages/HomePage/HomePage.tsx";
import {getWeatherOnTrip} from "@/store/slices/weatherSlice/thunks/getWeatherOnTrip.ts";
import {setTripData} from "@/store/slices/weatherSlice";

export const Trips = () => {
	const [_, setModalActive] = useUiState("createTripModal");
	const [updateTripModal, setUpdateTripModal] = useUiState("updateTripModal");
	const {trips, isPending} = useAppSelector(state => state.tripsSliceReducer);
	const [contextState, setContextState] = useContext(homePageContext);
	const dispatch = useAppDispatch();

	const onCreateTripClick = () => {
		setModalActive(true);
	};

	const onTripClick = (trip: Trip) => {
		setContextState({currentCity: trip})
		dispatch(setTripData({cityName: trip.cityName, startDate: trip.startDate, endDate: trip.endDate}))
		dispatch(getWeatherOnTrip.asyncThunk(null));
	}

	const onUpdateTripClick = (e: MouseEvent, trip: Trip) => {
		e.stopPropagation();
		setUpdateTripModal(true, {trip})
	}

	const onDeleteTripClick = (e: MouseEvent, trip: Trip) => {
		// TODO: Modal
		e.stopPropagation();
		dispatch(deleteT.asyncThunk(trip));
	}

	const renderTrips = () => {
		if (isPending) {
			return <Loader/>;
		} else {
			const filteredTrips = trips.filter(trip => {
				if (new Date(trip.startDate).getTime() > new Date().getTime()) {
					return trip.cityName.toLowerCase().includes(contextState.filterTripsValue.toLowerCase());
				}
				dispatch(deleteT.asyncThunk(trip))
			}).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

			return filteredTrips.map((trip) => (
				<div onClick={() => onTripClick(trip)} key={trip.id} className={styles.tripCard}>
					<img className={styles.cityImage} src={trip.image} alt={trip.cityName}/>
					<div className={styles.tripDescription}>
						<p className={styles.tripTitle}>{trip.cityName}</p>
						<p className={styles.tripDate}>{trip.startDate} - {trip.endDate}</p>
					</div>
					<HiPencilAlt onClick={(e: MouseEvent) => onUpdateTripClick(e, trip)}/>
					<AiOutlineDelete onClick={(e: MouseEvent) => onDeleteTripClick(e, trip)}/>
				</div>
			));
		}
	};

	return (
		<section className={styles.tripsWrapper}>
			{renderTrips()}
			<LargeButton onClick={onCreateTripClick}>
				<HiOutlinePlus className={styles.buttonIcon}/>
				<p>Add Trip</p>
			</LargeButton>
		</section>
	);
};
