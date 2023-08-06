import {LargeButton} from "@/components";
import styles from "./Trips.module.css";
import {useUiState} from "@/hooks/useUiState.ts";
import {useAppSelector} from "@/hooks/useAppSelector";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {MouseEvent, useContext} from "react";
import {homePageContext} from "@/pages/HomePage/HomePageContext.tsx";
import {Trip} from "@/types/Trip.ts";
import {AiOutlineDelete} from "react-icons/ai";
import {HiPencilAlt} from "react-icons/hi";
import {deleteT} from "@/pages/HomePage/HomePage.tsx";

export const Trips = () => {
	const [_, setModalActive] = useUiState("createTripModal");
	const [updateTripModal, setUpdateTripModal] = useUiState("updateTripModal");
	const {trips, isPending} = useAppSelector(state => state.tripsSliceReducer);
	const {setCurrentCity} = useContext(homePageContext);
	const dispatch = useAppDispatch();
	const {searchValue} = useAppSelector(store => store.searchSliceReducer);


	const onCreateTripClick = () => {
		setModalActive(true);
	};

	const onTripClick = (trip: Trip) => {
		setCurrentCity(trip)
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
			return "Content is on loading";
		} else {
			const filteredTrips = trips.filter(trip => {
				return trip.cityName.toLowerCase().includes(searchValue.toLowerCase());
			})

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
				<svg className={styles.buttonIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus">
					<path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
				</svg>
				<p>Add Trip</p>
			</LargeButton>
		</section>
	);
};
