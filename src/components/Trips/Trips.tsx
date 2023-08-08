import {LargeButton, Loader} from "@/components";
import styles from "./Trips.module.css";
import {useUiState} from "@/hooks/useUiState.ts";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {MouseEvent, useContext, useState} from "react";
import {homePageContext} from "@/pages/HomePage/HomePageContext.tsx";
import {Trip} from "@/types/Trip.ts";
import {AiOutlineDelete} from "react-icons/ai";
import {HiOutlinePlus} from "react-icons/hi";
import {deleteT} from "@/pages/HomePage/HomePage.tsx";
import {getWeatherOnTrip} from "@/store/slices/weatherSlice/thunks/getWeatherOnTrip.ts";
import {deleteTripData, setTripData} from "@/store/slices/weatherSlice";
import cn from "classnames";
import {FiEdit} from "react-icons/fi";

export const Trips = () => {
	const setModalActive = useUiState("createTripModal")[1];
	const setUpdateTripModal = useUiState("updateTripModal")[1];
	const {trips, isPending} = useAppSelector(state => state.tripsSliceReducer);
	const [contextState, setContextState] = useContext(homePageContext);
	const [selectedTripId, setSelectedTripId] = useState("");

	const dispatch = useAppDispatch();

	const onCreateTripClick = () => {
		setModalActive(true);
	};

	const onTripClick = (trip: Trip) => {
		setContextState({currentCity: trip})
		setSelectedTripId(trip.id);
		dispatch(setTripData({cityName: trip.cityName, startDate: trip.startDate, endDate: trip.endDate}))
		dispatch(getWeatherOnTrip.asyncThunk(null));
	}

	const onUpdateTripClick = (e: MouseEvent, trip: Trip) => {
		e.stopPropagation();
		setUpdateTripModal(true, {trip})
	}

	const onDeleteTripClick = (e: MouseEvent, trip: Trip) => {
		e.stopPropagation();
		dispatch(deleteT.asyncThunk(trip));
		dispatch(deleteTripData());
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
				<div onClick={() => onTripClick(trip)} key={trip.id}
				     className={styles.tripCard}>
					<img className={styles.cityImage} src={trip.image} alt={trip.cityName}/>
					<div
						className={selectedTripId === trip.id ? cn(styles.tripDescription, styles.selectTripCard) : styles.tripDescription}>
						<p className={styles.tripTitle}>{trip.cityName}</p>
						<p className={styles.tripDate}>{trip.startDate} - {trip.endDate}</p>
						<div className={styles.customizeButtonsBlock}>
							<FiEdit className={styles.updateIcon} onClick={(e: MouseEvent) => onUpdateTripClick(e, trip)}/>
							<AiOutlineDelete className={styles.updateIcon} onClick={(e: MouseEvent) => onDeleteTripClick(e, trip)}/>
						</div>
					</div>
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
