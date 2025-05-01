'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/src/css/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

export default function MapBox() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      console.error('Mapbox token is missing');
      return;
    }

    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [106.660172, 10.762622], // Vị trí HCM
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([106.660172, 10.762622]).addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-[500px] rounded-lg shadow-md" />;
}
