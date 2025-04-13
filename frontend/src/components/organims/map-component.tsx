"use client"

import { useEffect, useRef, useState } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken = "pk.eyJ1Ijoiam9obmRvbmc0NzUiLCJhIjoiY204a29zODNmMHIzdDJpc2V6ZDJyNTNqeiJ9.Ax7eylJQEynCUV8UE_LXvQ";

interface MapProps {
    latitude?: number;
    longitude?: number;
    zoom?: number;
}

export const MapComponent: React.FC<MapProps> = ({ latitude = 10.7769, longitude = 106.7009, zoom = 12 }) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const [map, setMap] = useState<mapboxgl.Map | null>(null);
    const [transportMode, setTransportMode] = useState<"driving" | "walking" | "cycling">("driving");
    const [routeInfo, setRouteInfo] = useState<{ distance?: number; duration?: number }>({});

    useEffect(() => {
        const start: LngLatLike = [106.7009, 10.7769]; // Hồ Chí Minh
        const end: LngLatLike = [106.6602, 10.7626]; // Tân Sơn Nhất

        if (!mapContainer.current) return;

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v11", // Dùng "light", "dark", "streets" để thấy tòa nhà
            center: [106.7009, 10.7769], // Hồ Chí Minh
            zoom: 15,
            pitch: 60, // Góc nghiêng 3D
            bearing: -17.6,
            antialias: true,
        });

        setMap(map);
        map.on("load", () => {
            // Kích hoạt Terrain 3D
            map.addSource("mapbox-dem", {
                type: "raster-dem",
                url: "mapbox://mapbox.terrain-rgb",
                tileSize: 512,
                maxzoom: 14,
            });
            map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

            // Hiển thị tòa nhà 3D từ dữ liệu bản đồ
            map.addLayer({
                id: "3d-buildings",
                source: "composite",
                "source-layer": "building",
                filter: ["==", "extrude", "true"],
                type: "fill-extrusion",
                minzoom: 12,
                paint: {
                    "fill-extrusion-color": "#aaa",
                    "fill-extrusion-height": ["get", "height"],
                    "fill-extrusion-base": ["get", "min_height"],
                    "fill-extrusion-opacity": 0.6,
                },
            });

            // Hiệu ứng bầu trời
            map.addLayer({
                id: "sky",
                type: "sky",
                paint: {
                    "sky-type": "atmosphere",
                    "sky-atmosphere-sun": [0.0, 90.0],
                    "sky-atmosphere-sun-intensity": 15,
                },
            });

            // ** Thêm Cluster **
            map.addSource("places", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            properties: {},
                            geometry: { type: "Point", coordinates: [106.7009, 10.7769] },
                        },
                        {
                            type: "Feature",
                            properties: {},
                            geometry: { type: "Point", coordinates: [106.703, 10.780] },
                        },
                        {
                            type: "Feature",
                            properties: {},
                            geometry: { type: "Point", coordinates: [106.705, 10.785] },
                        },
                    ],
                },
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50,
            });

            map.addLayer({
                id: "clusters",
                type: "circle",
                source: "places",
                filter: ["has", "point_count"],
                paint: {
                    "circle-color": "#51bbd6",
                    "circle-radius": 20,
                },
            });

            map.addLayer({
                id: "cluster-count",
                type: "symbol",
                source: "places",
                filter: ["has", "point_count"],
                layout: {
                    "text-field": "{point_count_abbreviated}",
                    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                    "text-size": 12,
                },
                paint: { "text-color": "#fff" },
            });

            map.addLayer({
                id: "unclustered-point",
                type: "circle",
                source: "places",
                filter: ["!", ["has", "point_count"]],
                paint: {
                    "circle-color": "#f28cb1",
                    "circle-radius": 10,
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#fff",
                },
            });
            // **Tìm kiếm địa điểm**
            const geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken ?? "",
                mapboxgl: mapboxgl as any,
                marker: false,
                placeholder: "Tìm kiếm địa điểm...",
            });
            map.addControl(geocoder as any, "top-left");

            // **Thêm Marker**
            new mapboxgl.Marker({ color: "red" }).setLngLat(start).addTo(map);
            new mapboxgl.Marker({ color: "blue" }).setLngLat(end).addTo(map);

            mapRef.current = map;

            // **Gọi API để vẽ đường đi**
            const getRoute = async () => {
                const url = `https://api.mapbox.com/directions/v5/mapbox/${transportMode}/${start.join(
                    ","
                )};${end.join(",")}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
                const response = await fetch(url);
                const data = await response.json();
                const route = data.routes[0].geometry;
                const { distance, duration } = data.routes[0];

                setRouteInfo({ distance: distance / 1000, duration: duration / 60 });

                if (map.getSource("route")) {
                    (map.getSource("route") as mapboxgl.GeoJSONSource).setData({
                        type: "Feature",
                        properties: {},
                        geometry: route,
                    });
                } else {
                    map.addSource("route", {
                        type: "geojson",
                        data: {
                            type: "Feature",
                            properties: {},
                            geometry: route,
                        },
                    });

                    map.addLayer({
                        id: "route",
                        type: "line",
                        source: "route",
                        layout: { "line-join": "round", "line-cap": "round" },
                        paint: {
                            "line-color": "#ff0000",
                            "line-width": 4,
                            "line-opacity": 0.8,
                        },
                    });

                    map.on("click", (e) => {
                        console.log("Tọa độ:", e.lngLat);
                    });


                }
            };

            getRoute();
        });
        
        return () => map.remove();
    }, [latitude, longitude, zoom, transportMode]);

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Tuyến đường thông minh</h2>
                <select
                    className="border rounded p-2"
                    value={transportMode}
                    onChange={(e) => setTransportMode(e.target.value as "driving" | "walking" | "cycling")}
                >
                    <option value="driving">🚗 Ô tô</option>
                    <option value="walking">🚶 Đi bộ</option>
                    <option value="cycling">🚴 Xe đạp</option>
                </select>
            </div>

            <div ref={mapContainer} className="w-full h-[500px]" />

            {routeInfo.distance && (
                <div className="mt-4 p-2 bg-gray-200 rounded">
                    <p>📍 Khoảng cách: {routeInfo.distance.toFixed(2)} km</p>
                    <p>⏳ Thời gian ước tính: {routeInfo?.duration?.toFixed(2)} phút</p>
                </div>
            )}
        </div>
    );
};

export default MapComponent;
