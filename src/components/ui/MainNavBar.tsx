"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavBar";
import { UserButton , SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/utils/cn";
// import Fox from "./fox.jpg";
// import Bobby from "./portraits/Bobby.png";
// import Kundan from "./portraits/Kundan.jpg";
// import Triya from "./portraits/Triya.jpg"
import Link from "next/link";
// import { Button } from "../ui/moving-borders";

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

				<div className="flex justify-evenly w-40 gap-4 items-center">
					{isSignedIn ? (
						<UserButton />
					) : (
						<SignInButton>
							<div className="">
     <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-28">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Sign In {"->"}
        </span>
      </button>
							</div>
						</SignInButton>
					)}

				</div>
			</Menu>
		</div>
	);
}
