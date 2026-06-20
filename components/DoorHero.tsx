import { PreloaderGateway } from "./PreloaderGateway";
import { doorGateway } from "@/lib/door-gateway";

/* The temple-door hero = the generic PreloaderGateway element fed Hinglaj art + copy.
   (Element harvested into IDP_Web/elements/preloader-gateway.) */
export function DoorHero() {
  return <PreloaderGateway {...doorGateway} />;
}
