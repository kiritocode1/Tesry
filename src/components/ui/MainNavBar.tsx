"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavBar";
import { cn } from "@/utils/cn";
import Fox from "./fox.jpg";
import Bobby from "./portraits/Bobby.png";
import Kundal from "./portraits/Kundan.jpg";
import Triya from "./portraits/Triya.jpg"

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
				<MenuItem setActive={setActive} active={active} item="Products">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/web-dev">Web Development</HoveredLink>
						<HoveredLink href="/interface-design">Interface Design</HoveredLink>
						<HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
						<HoveredLink href="/branding">Branding</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Team">
					<div className="  text-sm grid grid-cols-2 gap-10 p-4">
						<ProductItem
							title="Prabhdeep Singh"
							href="https://google.com"
							src={Bobby.src}
							description="I am a professional game dev too 😀 "
							role="Co-Founder"
						/>
						<ProductItem
							title="Triya Singh"
							href="https://google.com"
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
						<HoveredLink href="/hobby">Hobby</HoveredLink>
						<HoveredLink href="/individual">Individual</HoveredLink>
						<HoveredLink href="/team">Team</HoveredLink>
						<HoveredLink href="/enterprise">Experiences</HoveredLink>
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
