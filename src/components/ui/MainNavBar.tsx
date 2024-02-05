"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavBar";
import { cn } from "@/utils/cn";
import Fox from "./fox.jpg";
import Bobby from "./portraits/Bobby.png";
import Kundal from "./portraits/Kundan.jpg";
import Triya from "./portraits/Triya.jpg"
import Link from "next/link";
export function NavbarDemo() {
	return (
		<div className="relative w-full flex items-center justify-center">
			<Navbar className="top-2" />

		</div>
	);
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn(
				"fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
				className,
			)}>
			<Menu setActive={setActive}>
				<Link href={"/"} className="dark:text-white ">
					<MenuItem setActive={setActive} active={active} item="Home">
						Go back to main page
					</MenuItem>
				</Link>

				<MenuItem setActive={setActive} active={active} item="Products">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/web-dev">Website</HoveredLink>
						<HoveredLink href="/chat">Chat(Apps)</HoveredLink>
						<HoveredLink href="/ai">AI products</HoveredLink>
						<HoveredLink href="/design">custom design / frontend</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Team">
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
							title="Kundal Singh"
							href="https://google.com"
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
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Blog">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/blogs/hobby">Hobby</HoveredLink>
						<HoveredLink href="/blogs/team"> Team Experiences</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Labs">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/labs">Experimental stuff</HoveredLink>
					</div>
				</MenuItem>
			</Menu>
		</div>
	);
}
