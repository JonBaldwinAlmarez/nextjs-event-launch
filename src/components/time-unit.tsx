import { cn } from "@/utils/tailwind-utils";
import { NumberRotation } from "./number-rotation";

export const TimeUnit = ({
	label,
	value,
	current_framework,
}: {
	label: string;
	value: number;
	current_framework: string;
}) => {
	return (
		<div className="flec flex-col">
			<div className="text-white text-3xl font-semibold">{value}</div>
			<NumberRotation number={value} />
			<div
				className={cn("text-[8px] font-medium", {
					"bg-purple-300": current_framework === "qwik",
					"bg-sky-300": current_framework === "safari",
					"bg-yellow-300": current_framework === "chrome",
					"bg-teal-300": current_framework === "tailwind",
					"bg-blue-300": current_framework === "react",
					"bg-green-300": current_framework === "vue",
					"bg-orange-400": current_framework === "svelte",
					"bg-red-300": current_framework === "mobile",
					"bg-neutral-300": current_framework === "desktop",
				})}
			>
				{label}
			</div>
		</div>
	);
};
