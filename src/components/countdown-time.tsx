import { calculate_time_to_event } from "@/utils/countdown-utils";
import { type Framework } from "@/utils/framework-utils";
import { useState, useEffect } from "react";
import { TimeUnit } from "./time-unit";

export const Countdowntimer = ({
	current_framework,
}: {
	current_framework: Framework;
}) => {
	const [count_down, set_count_down] = useState(calculate_time_to_event());

	useEffect(() => {
		const Interval = setInterval(() => {
			set_count_down(calculate_time_to_event());
		}, 1000);

		return () => clearInterval(Interval);
	}, []);

	return (
		<div className={"text-center flex gap-[10px]"}>
			<TimeUnit
				label="DAYS"
				value={count_down.days}
				currentFramework={current_framework}
			/>
			<TimeUnit
				label="HOURS"
				value={count_down.hours}
				currentFramework={current_framework}
			/>
			<TimeUnit
				label="MINUTES"
				value={count_down.minutes}
				currentFramework={current_framework}
			/>
			<TimeUnit
				label="SECONDS"
				value={count_down.seconds}
				currentFramework={current_framework}
			/>
		</div>
	);
};
