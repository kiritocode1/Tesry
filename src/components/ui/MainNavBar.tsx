"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavBar";
import { cn } from "@/utils/cn";
import Fox from "./fox.jpg";
import Lucas from "./portraits/lucas.jpg";
import Shane from "./portraits/shane.jpg";
import Jerry from "./portraits/jerry.jpg";
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
							title="John Doe"
							href="https://google.com"
							src={Lucas.src}
							description="Professional Frisbee player as well , Id love to play with you"
						/>
						<ProductItem
							title="Jane Doe"
							href="https://google.com"
							src={Jerry.src}
							description="hey User , nice to meet you"
						/>
						<ProductItem
							title="Mx. Shane Doe"
							href="https://google.com"
							src={Shane.src}
							description="Never thought I would work for our Robot overlords , but here we are"
						/>
						<ProductItem
							title="Rogue AI Inc."
							href="https://google.com"
							src={Fox.src}
							description="I am AM , I am the first and the last , I am the one true god"
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
			</Menu>
		</div>
	);
}
