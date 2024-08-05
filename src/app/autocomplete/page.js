'use client'
import { useEffect, useState } from "react";

import OlaMap from '../../components/OlaMap';
import Navbar from '../../components/NavBar';
import { Suspense } from 'react';
export default function Home() {
  const [Locations, setLocations] = useState([]);
  const [LocationsHtml, setLocationsHtml] = useState('');
  const [SearchValue,setSearchValue] = useState('')
  const [UpdateMap, setUpdateMap] = useState({
    "location": {
      "lng":  77.01627134111374,
      "lat": 28.458112380865543
    }
  });



  const getLocationFunc = async (event) => {
    console.log(event.target.value);


    if (event.target.value.length > 0) {
      let headersList = {
        "Accept": "*/*",
      }
      let response = await fetch(`https://api.olamaps.io/places/v1/autocomplete?input=${event.target.value}&api_key=${process.env.NEXT_PUBLIC_OLA_API_KEY}`, {
        method: "GET",
        headers: headersList
      });

      let data = await response.json();
      setLocations(data.predictions);

    } else {
      setLocations([]);

    }

  }
  const setPointer = async (map_data) => {
    console.log(map_data);
    setUpdateMap(map_data.geometry);
    setLocations([]);


  }
  useEffect(() => {
    console.log(Locations);
    console.log(LocationsHtml);


  }, [Locations, LocationsHtml])

  return (
    <>
      <Suspense fallback={<p style={{ "color": "white !important" }}>Loading map...</p>}>
        <Navbar />
        <div>

          <div className="fixed  rounded-md shadow-sm ml-12 z-10" style={{ "margin-top": "5rem;" }}>

            <input
              id="price"
              name="price"
              type="text"
              defaultValue={SearchValue}
              onKeyUp={getLocationFunc}
              placeholder="Enter your location"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
            />
            <ul className="bg-white list-inside text-black py-px leading-7"
            >{Locations.map((e, i) => {
              return (
                <li onClick={() => setPointer(e)} key={i}>{e.description}</li>
              )
            })}</ul>

          </div>
          <OlaMap type={'direction'} location={UpdateMap} />
        </div>


      </Suspense>


    </>

  );
}
