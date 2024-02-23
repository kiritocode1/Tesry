import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = async ({ }) => {

  await fetch("https://localhost:3000/api/RESPOND");
  return <div>
  <button>Click Me</button>
  </div>
}

export default page;