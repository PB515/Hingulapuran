"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { temples } from "@/lib/temples";

/* Keyless map: OpenStreetMap tiles (no API token) restyled to parchment/sepia,
   sindoor-dot markers. Loaded ssr:false so Leaflet only runs in the browser. */
export function TempleMap() {
  const ref = useRef<HTMLDivElement>(null);
  const made = useRef(false);

  useEffect(() => {
    if (made.current || !ref.current) return;
    made.current = true;

    (async () => {
      const L = (await import("leaflet")).default;
      const map = L.map(ref.current!, { scrollWheelZoom: false, attributionControl: true });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "© OpenStreetMap",
        className: "hl-tiles", // sepia filter applied in globals.css
      }).addTo(map);

      const pinIcon = L.icon({
        iconUrl: "/art/map/pin.webp",
        iconSize: [34, 42],
        iconAnchor: [17, 42],
        popupAnchor: [0, -38],
      });

      const pts: [number, number][] = [];
      temples.forEach((t) => {
        pts.push([t.lat, t.lng]);
        L.marker([t.lat, t.lng], { icon: pinIcon })
          .addTo(map)
          .bindPopup(
            `<strong>${t.name}</strong><br/>${t.place}${t.note ? `<br/><em>${t.note}</em>` : ""}${t.verify ? "<br/><small>approx — to verify</small>" : ""}`
          );
      });
      map.fitBounds(pts as [number, number][], { padding: [40, 40] });
    })();
  }, []);

  return <div ref={ref} className="h-[70vh] w-full rounded-[var(--radius)] border border-border" />;
}
