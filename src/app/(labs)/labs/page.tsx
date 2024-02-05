
import { FC } from 'react'
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import LogoFont from "@/styles/fonts";
import { CardHoverEffectDemo } from '@/components/GroupHoverEffect';
interface pageProps {

}

const page: FC<pageProps> = ({}) => {
  return (
		<main className=" pt-20">
			<h1 className="text-9xl p-4" style={LogoFont.style}>
				LABS
			</h1>
			<div className="p-2 font-mono font-bold">
				{" "}
				This is where we experiment with new and upcoming software
		  </div>
		  <CardHoverEffectDemo/>
		</main>
	);
}

export default page