"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { temples } from "@/lib/temples";
import { tirthas, ROUTE_IDS } from "@/lib/tirthas";

/* Keyless map: OpenStreetMap tiles (no API token) restyled to parchment/sepia.
   Two layers: living shrines (sindoor pins) and the grantha's sacred places
   (gold dots) joined by the "sacred history across the subcontinent" route.
   Loaded ssr:false so Leaflet only runs in the browser. */

type View = "all" | "shrines" | "sacred";

export function TempleMap() {
  const ref = useRef<HTMLDivElement>(null);
  const made = useRef(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const L = useRef<any>({});
  const [view, setView] = useState<View>("all");

  useEffect(() => {
    if (made.current || !ref.current) return;
    made.current = true;

    (async () => {
      const leaflet = (await import("leaflet")).default;
      const map = leaflet.map(ref.current!, { scrollWheelZoom: false, attributionControl: true });

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "© OpenStreetMap",
          className: "hl-tiles",
        })
        .addTo(map);

      const pinIcon = leaflet.icon({
        iconUrl: "/art/map/pin.webp",
        iconSize: [34, 42],
        iconAnchor: [17, 42],
        popupAnchor: [0, -38],
      });

      // living shrines
      const shrines = leaflet.layerGroup();
      temples.forEach((t) => {
        leaflet
          .marker([t.lat, t.lng], { icon: pinIcon })
          .bindPopup(`<strong>${t.name}</strong><br/>${t.place}${t.note ? `<br/><em>${t.note}</em>` : ""}${t.verify ? "<br/><small>approx — to verify</small>" : ""}`)
          .addTo(shrines);
      });

      // the grantha's sacred places
      const sacred = leaflet.layerGroup();
      tirthas.forEach((p) => {
        leaflet
          .circleMarker([p.lat, p.lng], {
            radius: p.primary ? 9 : 6,
            color: "#C9A227",
            weight: 2,
            fillColor: p.primary ? "#E7D7B8" : "#C9A227",
            fillOpacity: p.certainty === "high" ? 0.7 : 0.35,
          })
          .bindPopup(
            `<strong>${p.name}</strong><br/><small>${p.type} · adhyāy ${p.chapters}</small><br/><em>${p.note}</em><br/><small>approximate location</small>`
          )
          .addTo(sacred);
      });

      // the sacred-history route line through the anchor places
      const routePts = ROUTE_IDS.map((id) => tirthas.find((t) => t.id === id))
        .filter(Boolean)
        .map((t) => [t!.lat, t!.lng] as [number, number]);
      const route = leaflet.polyline(routePts, { color: "#C9A227", weight: 1.5, opacity: 0.5, dashArray: "4 8" });

      shrines.addTo(map);
      sacred.addTo(map);
      route.addTo(map);

      const all = [...temples.map((t) => [t.lat, t.lng]), ...tirthas.map((t) => [t.lat, t.lng])] as [number, number][];
      map.fitBounds(all, { padding: [40, 40] });

      L.current = { map, leaflet, shrines, sacred, route };
    })();
  }, []);

  // toggle which layers are visible
  useEffect(() => {
    const { map, shrines, sacred, route } = L.current;
    if (!map) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const show = (layer: any, on: boolean) => {
      if (!layer) return;
      if (on && !map.hasLayer(layer)) layer.addTo(map);
      if (!on && map.hasLayer(layer)) map.removeLayer(layer);
    };
    show(shrines, view !== "sacred");
    show(sacred, view !== "shrines");
    show(route, view !== "shrines");
  }, [view]);

  const tabs: { v: View; label: string }[] = [
    { v: "all", label: "All" },
    { v: "sacred", label: "Sacred places" },
    { v: "shrines", label: "Temples" },
  ];

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.v}
            onClick={() => setView(t.v)}
            className={`rounded-[var(--radius)] px-4 py-2 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.18em] transition-colors ${
              view === t.v ? "bg-accent text-accent-foreground" : "border border-swarna/40 text-swarna hover:bg-rakta"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div ref={ref} className="h-[70vh] w-full rounded-[var(--radius)] border border-border" />

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-[family-name:var(--font-body)] text-xs text-muted">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full" style={{ background: "#B5302A" }} /> living shrines
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full border" style={{ borderColor: "#C9A227", background: "rgba(201,162,39,.6)" }} /> sacred places of the grantha
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-0 w-5 border-t border-dashed" style={{ borderColor: "#C9A227" }} /> the sacred history
        </span>
        <span className="text-muted/60">Locations approximate, to verify.</span>
      </div>
    </div>
  );
}
