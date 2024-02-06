"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Fox from "./ui/fox.jpg";
import LogoFont from "@/styles/fonts";

export function HeroScrollDemo() {
	return (
		<div className="flex flex-col overflow-hidden">
			<ContainerScroll

				titleComponent={
					<div className="">
						<h1 className="text-4xl font-semibold text-black dark:text-white flex flex-col">
							Three clicks to
							<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
								Your own ChatBot
							</span>
						</h1>
					</div>
				}
			/>
		</div>
	);
}

