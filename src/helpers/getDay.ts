export const getDay = (currentDate:Date | string) => {
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const date = new Date(currentDate);
	const dayIndex = date.getDay();
	return daysOfWeek[dayIndex];
}
