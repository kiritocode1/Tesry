import Image from "next/image";
import { EvervaultCard } from "@/components/ui/EventCard";
import { BentoGridThirdDemo } from "@/components/ui/BentoGrid";
import LogoFont from "@/styles/fonts";
import { NavbarDemo } from "@/components/ui/MainNavBar";





export default function Home () {
	const NavItems = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Blog",
			link: "/blog",
		},
	];

	return (
		<main className=" dark:bg-grid-white/[0.2] bg-grid-black/[0.2] w-full min-h-screen pt-20">
		<NavbarDemo/>
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<div className="  flex flex-col items-start max-w-xl mx-auto p-4 relative h-[20rem]  mt-20 ">
				<EvervaultCard text="TESRY.Co" className="sm:scale-150" />
			</div>
			<div className="w-full flex  flex-col items-center justify-center sm:h-[90rem] gap-4  mt-40 md:mt-0  md:-translate-y-20">

				<h1 className={'scale-[9] mb-20 ' }  style={LogoFont.style}>About US</h1>
				<BentoGridThirdDemo />
			</div>
		</main>
	);
}
