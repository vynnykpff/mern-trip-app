import axios from "axios";

export const cityApi = axios.create({
	baseURL: "https://api.teleport.org/api"
});

export const weatherApi = axios.create({
	baseURL: ""
});
