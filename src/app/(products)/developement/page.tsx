import { FC } from 'react'
import LogoFont from "@/styles/fonts";
import { HeroScrollDemo } from '@/components/ContainerIpad';
interface pageProps {

}

const page: FC<pageProps> = ({}) => {
  return <main>
    <h1 className="tage text-9xl" style={LogoFont.style}>Website</h1>
    <p> our Dedicated chat application could instantaneously start a chat page that is trained on your data .  </p>
    <HeroScrollDemo />
  </main>
}

export default page