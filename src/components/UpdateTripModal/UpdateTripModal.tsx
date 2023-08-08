import {Modal} from "@/components/ui/Modal/Modal.tsx";
import {useForm} from "react-hook-form";
import styles from "./UpdateTripModal.module.css";
import {useUiState} from "@/hooks/useUiState.ts";
import {CreateTrip} from "@/types/CreateTrip.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {updateTrip} from "@/store/slices/tripsSlice/thunks/updateTrip.ts";
import {FC} from "react";
import {Trip} from "@/types/Trip.ts";

export type UpdateTripModalProps = {
	trip: Trip;
}

export const UpdateTripModal: FC<UpdateTripModalProps> = ({trip}) => {
		const [modalActive, setModalActive] = useUiState("updateTripModal");
		const dispatch = useAppDispatch();

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

		return (
			<Modal className={styles.modalContainer} setModalActive={setModalActive} modalActive={modalActive}
			       onHide={onHide}
			       title="Create trip">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.modalFieldsWrapper}>
						<label className={styles.modalLabel} htmlFor="cityName">City
							<p className={styles.modalError}>{errors?.cityName &&
								<span>{(errors?.cityName?.message as string) || "Error!"}</span>}</p>
						</label>
						<input defaultValue={trip.cityName} {...register("cityName", {required: "Required field"})}
						       className={styles.modalField} id="cityName"
						       type="text"
						       placeholder="Please select a city"/>
						<label className={styles.modalLabel} htmlFor="startDate">Start date
							<p className={styles.modalError}>{errors?.startDate &&
								<span>{(errors?.startDate?.message as string) || "Error!"}</span>}</p>
						</label>
						<input defaultValue={trip.startDate}  {...register("startDate", {required: "Required field"})}
						       className={styles.modalField} id="startDate"
						       type="date"/>
						<label className={styles.modalLabel} htmlFor="endDate">End date
							<p className={styles.modalError}>{errors?.endDate &&
								<span>{(errors?.endDate?.message as string) || "Error!"}</span>}</p>
						</label>
						<input defaultValue={trip.endDate}   {...register("endDate", {required: "Required field"})}
						       className={styles.modalField} id="endDate"
						       type="date"/>
					</div>

					<div className={styles.footerModal}>
						<div className={styles.buttonWrapper}>
							<button onClick={closeModal} className={styles.cancelButton}>Cancel</button>
							<input type="submit" className={styles.agreeButton}/>Save
						</div>
					</div>
				</form>
			</Modal>
		);
	}
;
