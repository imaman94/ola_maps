'use client'
import OlaMap from '../../components/OlaMap';
import Navbar from '../../components/NavBar';
import {  useState } from "react";

import { Suspense } from 'react';
export default function Home() {
  const [UpdateMap, setUpdateMap] = useState({
    "location": {
      "lng":  77.01627134111374,
      "lat": 28.458112380865543
    }
  });
  return (
    <>
    <Suspense fallback={<p style={{"color":"white !important"}}>Loading map...</p>}>
    <Navbar/>
    <OlaMap type={'marker'} location={UpdateMap}/>
    </Suspense>
     
    
    </>
    
  );
}
