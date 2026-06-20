import { HorizontalScroll } from "./HorizontalScroll";
import { hingulLegend } from "@/lib/hingul-legend";

/* The history of Hingul = the generic HorizontalScroll element fed the Hingul panels.
   (Element harvested into IDP_Web/elements/horizontal-scroll.) */
export function LegendScroll() {
  return <HorizontalScroll {...hingulLegend} />;
}
