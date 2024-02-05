import { FC } from 'react'
import LogoFont from "@/styles/fonts";
interface pageProps {

}

const page: FC<pageProps> = ({}) => {
  return <main>
    <h1 className="text-9xl" style={LogoFont.style}>Hello world</h1>
  </main>
}

export default page