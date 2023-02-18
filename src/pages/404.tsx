import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar'

import ph2 from '../../public/disconnect-banner.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Michal | Software Developer.</title>
        <meta name="description" content="This page doesn't exist. | Michal, Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-white font-bold text-2xl">
                                Looks like you've found the
                                doorway to the great nothing
                            </h1>
                            <p className="my-2 text-white">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <Link href='/'>
                              <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-maincolor text-white hover:bg-maincolorhover focus:outline-none">Take me there!</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className='lg:mt-error-mt'>
              <Image src={ph2} alt="404" width={500} height={500} />
            </div>
        </div>
    </>
  )
}
