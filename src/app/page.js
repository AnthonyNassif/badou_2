import backgroundImage from '../../public/home/HomePage.png';
import Image from 'next/image';
import Link from 'next/link';
import {SparklesIcon} from "@heroicons/react/24/solid";

export default function Home() {
  return (
      <div className="flex flex-col relative justify-center items-center h-screen"> 

      <Image src={backgroundImage} className='blur-sm' alt="Background Image" fill sizes="100vw" style={{objectFit:'cover'}} />


      <div className='flex flex-col justify-center items-center bg-amber-700 rounded-md p-2 lg:w-2/5 h-1/4 z-10' > 

        <div className="flex pb-5 mb-5 text-5xl text-orange-300 " > 
           <SparklesIcon className='w-12 h-12 ' />
          <p>Badou</p> 
        </div>

        <div>
          <Link className='bg-amber-950 text-white rounded-sm p-2 ' href="/store"> Take me to the Store </Link>
        </div>

      </div>


      </div>
);
}
