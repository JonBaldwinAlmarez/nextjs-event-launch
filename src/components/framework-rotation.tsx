import Image from "next/image";
import { assets } from "@/utils/assets-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";

export const Framework_rotation = ({
	current_framework,
}: {
	current_framework: Framework;
}) => {
	return (
		<div className="w-[80px] h-[80px] mx-2 -mt-2 align-middle inline-flex relative">
			{frameworks.map((name, index) => (
				<Image
					key={name}
					src={assets[name]}
					alt="Framework Logo"
					width="80"
					height="80"
					// Code below is for rotation
					className={cn(
						"w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300",
						current_framework === name
							? " opacity-100 transform-none"
							: index > frameworks.indexOf(current_framework as Framework)
							? "opacity-0 -translate-y-2"
							: "opacity-0 translate-y-2"
					)}
				/>
			))}
		</div>
	);
};
