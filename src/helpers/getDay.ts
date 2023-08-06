export const getDay = () => {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const date = new Date();
	const dayIndex = date.getDay();
	return daysOfWeek[dayIndex];
}
