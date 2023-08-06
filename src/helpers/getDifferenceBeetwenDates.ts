type DifferenceBeetwenDate = {
	days: number,
	hours: number,
	minutes: number,
	seconds: number,
}

export const getDifferenceBeetwenDates = (targetDate: Date): DifferenceBeetwenDate => {
	const currentDate = new Date();
	const timeDifferenceMs = targetDate.getTime() - currentDate.getTime();
	const days = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDifferenceMs % (1000 * 60)) / 1000);

	return {days, hours, minutes, seconds};
}
