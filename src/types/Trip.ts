export type Trip = {
    id: string;
    cityName: string;
    startDate: string;
    endDate: string;
    image: string;
}

export type ResponseTrip = Omit<Trip, "image">;
