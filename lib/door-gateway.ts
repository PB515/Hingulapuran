import { site } from "./site";
import type { GatewayConfig } from "@/components/PreloaderGateway";

/* The Hinglaj temple-door gateway as data for the PreloaderGateway element.
   All Hinglaj-specific art + copy lives here; the component is generic. */
export const doorGateway: GatewayConfig = {
  backdrop: { d: "/art/door/desktop-backdrop.webp", m: "/art/door/01-backdrop.webp" },
  leaf: { d: "/art/door/desktop-leaf.webp", m: "/art/door/02-leaf.webp" },
  toran: "/art/door/04-foreground-toran.webp",
  title: "हिंगलाज माता",
  subtitle: site.mantra,
  backdropAlt: "The sanctum of Hinglaj Mata",
  scrollCue: "scroll to enter",
  heightVh: 450,
  openAt: 0.4,
};
