"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSound } from "./SoundProvider";

/* Route-aware ambience. The home page is the cinematic one — its section
   soundscapes drive the bed (drone → sarangi → drums → resolve). Every other
   page (the grantha reader, books, blog…) drops to the faintest drone so
   reading stays quiet. Nothing plays until the user unmutes. */
export function RouteSound() {
  const pathname = usePathname();
  const { setBed } = useSound();

  useEffect(() => {
    if (pathname === "/") return; // home: the section soundscapes own the bed
    setBed("bed-grantha"); // everywhere else: near-silence, reading-friendly
  }, [pathname, setBed]);

  return null;
}
