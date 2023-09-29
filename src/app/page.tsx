"use client";

import { assets } from "@/utils/assets-utils";
import { Framework, frameworks } from "@/utils/framework-utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { cn } from "@/utils/tailwind-utils";
import { Framework_rotation } from "@/components/framework-rotation";
import { Countdowntimer } from "@/components/countdown-time";

const poppins = Poppins({
	weight: "700",
	subsets: ["latin"],
});

export default function Home() {
	const [current_framework, set_current_framework] = useState<Framework>(
		frameworks[0]
	);
	const [show_background, set_show_background] = useState(false);

	useEffect(() => {
		let current_index = 0;
		const rotate_framework = () => {
			set_current_framework(frameworks[current_index]);
			current_index = (current_index + 1) % frameworks.length;
		};
		const interval_id = setInterval(rotate_framework, 2000);
		return () => clearInterval(interval_id);
	}, []);

	useEffect(() => {
		set_show_background(true);
	}, []);

	return (
		<main>
			<div
				className={cn(
					"fixed inset-0 transition-color delay-100 duration-700 opacity-25",
					{
						"bg-purple-300": current_framework === "qwik",
						"bg-sky-300": current_framework === "safari",
						"bg-yellow-300": current_framework === "chrome",
						"bg-teal-300": current_framework === "tailwind",
						"bg-blue-300": current_framework === "react",
						"bg-green-300": current_framework === "vue",
						"bg-orange-400": current_framework === "svelte",
						"bg-red-300": current_framework === "mobile",
						"bg-neutral-300": current_framework === "desktop",
					}
				)}
			/>
			<Image
				width={1200}
				height={1200}
				role="presentation"
				alt="gradient background"
				className="fixed inset-0 w-screen h-screen object-cover"
				src={assets.gradient}
			/>
			<div
				className="fixed inset-0 opacity-30"
				style={{
					backgroundImage: `url(${assets.square})`,
					backgroundSize: "30px",
				}}
			/>
			<div
				className={cn(
					"bg-black fixed inset-0 transition-opacity duration-[1500ms]",
					!show_background ? "opacity-100" : "opacity-0"
				)}
			/>

			<div className="max-w-7xl mt-20 mx-auto">
				<div className="flex flex-col items-center relative z-10">
					<h1
						className={`text-7xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}
					>
						<Image
							alt="Figma Logo"
							className="inline-block mr-8 -mt-2"
							src={assets.figma}
							width="50"
							height="50"
						/>
						to <Framework_rotation current_framework={current_framework} /> will{" "}
						<span
							className={cn("transition-colors duration-200", {
								"text-purple-300": current_framework === "qwik",
								"text-sky-300": current_framework === "safari",
								"text-yellow-300": current_framework === "chrome",
								"text-teal-300": current_framework === "tailwind",
								"text-blue-300": current_framework === "react",
								"text-green-300": current_framework === "vue",
								"text-orange-400": current_framework === "svelte",
								"text-red-300": current_framework === "mobile",
								"text-neutral-300": current_framework === "desktop",
							})}
						>
							never
						</span>{" "}
						be the same again
					</h1>
					<p className="mb-8">
						<span className=" text-gray-300">
							Join us for an AI launch event by{" "}
						</span>
						<Image
							alt="Builder.io logo"
							className=" inline-block ml-1 -mt-1"
							width={100}
							height={20}
							src={assets.builder}
						/>
						{" + "}
						<Image
							alt="Figama log"
							className="inline-block mx-1"
							width={55}
							height={20}
							src={assets.figmatwo}
						/>
					</p>
					<div className="mb-8">
						<button
							className={cn(
								"text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
								{
									"bg-purple-300": current_framework === "qwik",
									"bg-sky-300": current_framework === "safari",
									"bg-yellow-300": current_framework === "chrome",
									"bg-teal-300": current_framework === "tailwind",
									"bg-blue-300": current_framework === "react",
									"bg-green-300": current_framework === "vue",
									"bg-orange-400": current_framework === "svelte",
									"bg-red-300": current_framework === "mobile",
									"bg-neutral-300": current_framework === "desktop",
								}
							)}
						>
							Click Here
						</button>
					</div>
					<Countdowntimer current_framework={current_framework} />
				</div>
			</div>
		</main>
	);
}
