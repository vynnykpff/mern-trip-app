import {ResponseTrip} from "@/types/Trip.ts";

export type CreateTrip = Omit<ResponseTrip, 'id'>
