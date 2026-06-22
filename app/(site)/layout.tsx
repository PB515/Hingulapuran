import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SoundProvider } from "@/components/sound/SoundProvider";

/* Public site chrome — header + footer. The /admin section is outside this group
   so it gets its own chrome instead. SoundProvider wraps the whole public site
   so any page can set its bed / fire cues. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SoundProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
    </SoundProvider>
  );
}
