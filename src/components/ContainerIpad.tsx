"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Fox from "./ui/fox.jpg";
export function HeroScrollDemo() {
	return (
		<div className="flex flex-col overflow-hidden">
			<ContainerScroll
				users={users}
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

export const users = [
	{
		name: "Chat Gpt ",
		designation: "Founder, Algochurn",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Chat Singh",
		designation: "Founder, Sarah's Kitchen",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "John Doe",
		designation: "Software Engineer, Tech Corp",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Jane Smith",
		designation: "Product Manager, Innovate Inc",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Robert Johnson",
		designation: "Data Scientist, DataWorks",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Emily Davis",
		designation: "UX Designer, DesignHub",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Michael Miller",
		designation: "CTO, FutureTech",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Sarah Brown",
		designation: "CEO, StartUp",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "James Wilson",
		designation: "DevOps Engineer, CloudNet",
		image: Fox.src,
		badge: "Something",
	},
	{
		name: "Patricia Moore",
		designation: "Marketing Manager, MarketGrowth",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Richard Taylor",
		designation: "Frontend Developer, WebSolutions",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Linda Anderson",
		designation: "Backend Developer, ServerSecure",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "William Thomas",
		designation: "Full Stack Developer, FullStack",
		image: Fox.src,
		badge: "Badger",
	},
	{
		name: "Elizabeth Jackson",
		designation: "Project Manager, ProManage",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "David White",
		designation: "Database Administrator, DataSafe",
		image: Fox.src,
		badge: "Advocate",
	},
	{
		name: "Jennifer Harris",
		designation: "Network Engineer, NetConnect",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Charles Clark",
		designation: "Security Analyst, SecureIT",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Susan Lewis",
		designation: "Systems Analyst, SysAnalyse",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Joseph Young",
		designation: "Mobile Developer, AppDev",
		image: Fox.src,
		badge: "Mentor",
	},
	{
		name: "Margaret Hall",
		designation: "Quality Assurance, BugFree",
		image: Fox.src,
		badge: "Developer",
	},
];
