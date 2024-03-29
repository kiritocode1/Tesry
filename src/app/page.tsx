
import { EvervaultCard } from "@/components/ui/EventCard";
import { BentoGridThirdDemo } from "@/components/ui/BentoGrid";
import LogoFont from "@/styles/fonts";
import { EmailForm } from "@/components/EmailForm";

import { HeroScrollDemo } from "@/components/ContainerIpad";


/**
 * Renders the home page component.
 *
 * @returns The JSX element representing the home page.
 */
export default function Home () {


	return (
		<main className="">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<div className="h-screen">
				<div className="  flex flex-col items-start max-w-xl mx-auto p-4 relative h-[20rem]  mt-20 ">
					<EvervaultCard text="TESRY" className="sm:scale-150" />
				</div>
			</div>
			<div className="w-full h-screen mb-96">

				<HeroScrollDemo />
			</div>
			<div className="w-full flex  flex-col items-center justify-center sm:h-[90rem] gap-4  mt-40 md:mt-0  md:-translate-y-20 ">
				<h1 className={"scale-[9] mb-20 mt-20 "} style={LogoFont.style}>
					About US
				</h1>
				<p className="text-2xl text-center max-w-2xl font-mono">
					We are a think-tank of passionate developers and designers who provide
					cutting edge solutions that scale with your business.
				</p>
				<BentoGridThirdDemo />

				<div className="w-full flex items-center justify-center flex-col">
					<h1 style={LogoFont.style} className="text-9xl ">
						Reach Out
					</h1>
					<EmailForm />
				</div>
			</div>
		</main>
	);
}










