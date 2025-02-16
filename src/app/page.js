import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p style={{"color":"white !important"}}>Loading map...</p>}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started with Ola Maps&nbsp;
         
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://maps.olakrutrim.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By
            <Image
              src="/ola_maps.png"
              alt="Ola MAps"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/ola.png"
          alt=" Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      
        <a
          href="/autocomplete"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Autocomplete
           
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          The Autocomplete API dynamically enhances search functionality within various applications by identifying entities in user queries and suggesting relevant completions in real-time, significantly improving the user experience.
          </p>
        </a>
        <a
          href="/direction"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Directions
           
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Directions API provides a robust solution for integrating precise and efficient routing and navigation functionalities into your applications.
          </p>
        </a>

       

        <a
          href="/geocoding"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Geocode
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Geocoding API is a service that translates human-readable place names and addresses seamlessly into geographic coordinates, such as latitude and longitude. This API enables you to convert detailed street addresses, city names, or points of interest into precise geographic coordinates.
          </p>
        </a>

        <a
          href="/reverse_geocoding"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Reverse Geocode
            
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          Reverse Geocoding API is a robust tool crafted to effortlessly translate geographic coordinates into human-readable place names, spanning from precise street addresses to broader geographical areas. This API to convert latitude and longitude coordinates or points of interest identifiers into detailed addresses. 
          </p>
        </a>
      </div>
    </main>
    </Suspense>
  );
}
