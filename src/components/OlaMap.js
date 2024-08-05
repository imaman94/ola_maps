'use client'
import { useEffect,useState } from "react";

import { Map as MapLibreMap, NavigationControl ,Marker} from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const OlaMaps = (props) => {
  const [mapReady, setMapReady] = useState(false);
 

  useEffect(() => {
    if (!mapReady) return;
   
    const map = new MapLibreMap({
      container: "central-map",
      center: [props.location.location.lng,props.location.location.lat],
      zoom: 15,
      style: 'https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json',
      transformRequest: (url, resourceType) => {
        url = url.replace("app.olamaps.io", "api.olamaps.io");

            // Add the API key to the URL based on existing parameters
            if (url.includes("?")) {
              url = url + "&api_key="+process.env.NEXT_PUBLIC_OLA_API_KEY;
            } else {
              url = url + "?api_key="+process.env.NEXT_PUBLIC_OLA_API_KEY;
            }
            return { url, resourceType };
      },
    });

    const nav = new NavigationControl({
      visualizePitch: false,
      showCompass: true,
    });

    map.addControl(nav, "top-left");
    if(props.type=='marker'){
    const marker = new Marker({draggable:true}).setLngLat([ 77.01627134111374,28.458112380865543]).addTo(map);

    marker.on('dragend',()=>{
      const lngLat = marker.getLngLat();
        
            console.log(`Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`);
    })
  } else  if(props.type=='direction'){
      console.log(props);
    const marker = new Marker({draggable:true}).setLngLat([props.location.location.lng,props.location.location.lat]).addTo(map);

    marker.on('dragend',()=>{
      const lngLat = marker.getLngLat();
        
            console.log(`Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`);
    })
  }
   

    
  }, [mapReady,props]);

  return (
    
       <div
        style={{ width: "auto", height: "90vh", top:'10vh', overflow: "hidden" }}
        ref={() => setMapReady(true)}
        id="central-map"
      />
   
  
  );
    };

export default OlaMaps;

  
