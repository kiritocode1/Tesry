"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavBar";
import { UserButton , SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/utils/cn";
import Fox from "./fox.jpg";
import Bobby from "./portraits/Bobby.png";
import Kundan from "./portraits/Kundan.jpg";
import Triya from "./portraits/Triya.jpg"
import Link from "next/link";
import { Button } from "../ui/moving-borders";

export function NavbarDemo() {
	return (
		<div className="relative w-full flex items-center justify-center">
			<Navbar className="top-2" />

		</div>
	);
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	const {isSignedIn} = useUser();
	return (
		<div
			className={cn(
				"fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
				className,
			)}>
			<Menu setActive={setActive}>
				<Link href={"/"} className="dark:text-white ">
					Home
				</Link>

				<MenuItem setActive={setActive} active={active} item="CHAT">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/developement">Social Media bot</HoveredLink>
						<HoveredLink href="/developement">AI Generated Chat</HoveredLink>
					</div>
				</MenuItem>
				{/* <MenuItem setActive={setActive} active={active} item="Team">
					<div className="  text-sm grid grid-cols-2 gap-10 p-4">
						<ProductItem
							title="Prabhdeep Singh"
							href="https://www.linkedin.com/in/prabhdeep-singh-663883220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
							src={Bobby.src}
							description="I am a professional game dev too 😀 "
							role="Co-Founder"
						/>
						<ProductItem
							title="Triya Singh"
							href="https://www.linkedin.com/in/triya-doshi-959374272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
							src={Triya.src}
							description="Notoriously thinking of catch phrases and "
							role="Marketing Analyst"
						/>
						<ProductItem
							title="Kundan Mane"
							href="/"
							src={Kundal.src}
							description="Never thought I would work with our Robot overlords , but here we are"
							role="Co-Founder"
						/>
						<ProductItem
							title="Aryan Kathawale"
							href="https://kathawalearyan.in.net"
							src={Fox.src}
							description="Fixing Bugs Forever "
							role="Developer & Designer"
						/>
					</div>
				</MenuItem> */}
				<MenuItem setActive={setActive} active={active} item="AI">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/developement">AI Products </HoveredLink>
						<HoveredLink href="/developement">AI Game Developement</HoveredLink>
					</div>
				</MenuItem>
				{/* <MenuItem setActive={setActive} active={active} item="Labs">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/labs">Experimental stuff</HoveredLink>
					</div>
				</MenuItem> */}
				<Link href="/labs">Lab</Link>

				<div className="flex justify-evenly w-20 gap-4 ">
					{isSignedIn ? (
						<UserButton />
					) : (
						<SignInButton>
							<div className="">
								<Button
									borderRadius="1.75rem"
									className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 ">
									Sign In
								</Button>
							</div>
						</SignInButton>
					)}
					<Link href={"mailto:aryan@tesry.co"}>Contact </Link>
				</div>
			</Menu>
		</div>
	);
}
