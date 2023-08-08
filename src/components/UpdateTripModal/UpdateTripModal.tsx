import {Modal} from "@/components/ui/Modal/Modal.tsx";
import {useForm} from "react-hook-form";
import styles from "@/components/CreateTripModal/CreateTripModal.module.css";
import commonStyles from "@/styles/common.module.css";
import {useUiState} from "@/hooks/useUiState.ts";
import {CreateTrip} from "@/types/CreateTrip.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {ChangeEvent, FC, useState} from "react";
import {Trip} from "@/types/Trip.ts";
import {updateTrip} from "@/store/slices/tripsSlice/thunks/updateTrip.ts";

const toDateString = (d: Date) => {
	return d.toLocaleDateString('fr-ca')
}

const addDaysToDate = (date: Date, days: number) => {
	date.setDate(date.getDate() + days);
	return date;
}

export type UpdateTripModalProps = {
	trip: Trip;
}

export const UpdateTripModal: FC<UpdateTripModalProps> = ({trip}) => {
	const [modalActive, setModalActive] = useUiState("updateTripModal");
	const [longTrip, setLongTrip] = useState("");
	const dispatch = useAppDispatch();

	const startDate = toDateString(addDaysToDate(new Date(trip.startDate), 1));
	const endDate = toDateString(addDaysToDate(new Date(trip.startDate), 15));

	const {
		handleSubmit,
		register,
		reset,
		formState: {errors},
	} = useForm<CreateTrip>({
		mode: "onBlur",
	});

	const onSubmit = (data: CreateTrip) => {
		dispatch(updateTrip.asyncThunk({...data, id: trip.id}));
		setModalActive(false);
	};

	const onHide = () => {
		reset();
	};

	const closeModal = () => {
		setModalActive(false);
	};

	const onStartDateChange = (e: ChangeEvent) => {
		setLongTrip((e.target as HTMLInputElement).value)
	}

	const endLongTrip = toDateString(addDaysToDate(new Date(longTrip), 14));

	return (
		<Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive}
		       onHide={onHide}
		       title="Update Trip">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={commonStyles.fieldsWrapper}>
					<label className={commonStyles.formLabel} htmlFor="cityName">City
						<p className={commonStyles.formError}>{errors?.cityName &&
							<span>{(errors?.cityName?.message as string) || "Error!"}</span>}</p>
					</label>
					<input defaultValue={trip.cityName} {...register("cityName", {required: "Required field"})}
					       className={commonStyles.formField}
					       id="cityName"
					       type="text"
					       placeholder="Please select a city"/>
					<label className={commonStyles.formLabel} htmlFor="startDate">Start date
						<p className={commonStyles.formError}>{errors?.startDate &&
							<span>{(errors?.startDate?.message as string) || "Error!"}</span>}</p>
					</label>
					<input defaultValue={trip.startDate}  {...register("startDate", {required: "Required field"})}
					       onChange={e => onStartDateChange(e)}
					       min={startDate} max={endDate}
					       className={commonStyles.formField} id="startDate"
					       type="date"/>
					<label className={commonStyles.formLabel} htmlFor="endDate">End date
						<p className={commonStyles.formError}>{errors?.endDate &&
							<span>{(errors?.endDate?.message as string) || "Error!"}</span>}</p>
					</label>
					<input defaultValue={trip.endDate}  {...register("endDate", {required: "Required field"})}
					       disabled={!longTrip}
					       className={commonStyles.formField}
					       min={longTrip} max={endLongTrip}
					       id="endDate"
					       type="date"/>
				</div>
				<div className={styles.footerModal}>
					<div className={styles.buttonWrapper}>
						<button onClick={closeModal} className={styles.cancelButton}>Cancel</button>
						<button type="submit" className={commonStyles.agreeButton}>Save</button>
					</div>
				</div>
			</form>

		</Modal>
	);
};
