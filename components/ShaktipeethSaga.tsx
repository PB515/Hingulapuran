import { CinematicScrollSaga } from "./CinematicScrollSaga";
import { shaktipeethSaga } from "@/lib/shaktipeeth-saga";

/* The Fall-of-Sati chapter = the generic CinematicScrollSaga element fed Hinglaj data.
   (Element harvested into IDP_Web/elements/cinematic-scroll-saga.) */
export function ShaktipeethSaga() {
  return <CinematicScrollSaga {...shaktipeethSaga} />;
}
