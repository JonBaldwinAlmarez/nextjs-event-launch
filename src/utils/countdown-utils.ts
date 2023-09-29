export const calculate_time_to_event = () => {
	const event_date = new Date("2023-10-12T09:00:00-07:00");
	const current_date = new Date();
	const remaining_time = event_date.getTime() - current_date.getTime();

	// Calculate days, hours, minutes, and seconds
	const days = Math.floor(remaining_time / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((remaining_time % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((remaining_time % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds };
};
