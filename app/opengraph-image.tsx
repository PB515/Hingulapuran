import { ImageResponse } from "next/og";

export const alt = "Hingulapuran — the Hinglaj Puran, conserved";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Default share card. Latin-only text so it renders without a custom Devanagari
   font (the default OG font has no Indic glyphs). Brand maroon + gold. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2a0d16 0%, #1a0f12 60%, #120b0d 100%)",
          color: "#E7D7B8",
          fontFamily: "serif",
        }}
      >
        <div style={{ width: 90, height: 2, background: "#C9A227", marginBottom: 36 }} />
        <div style={{ fontSize: 92, fontWeight: 700, color: "#E7D7B8", letterSpacing: -1 }}>Hingulapuran</div>
        <div style={{ fontSize: 30, color: "#C9A227", marginTop: 18, letterSpacing: 6, textTransform: "uppercase" }}>
          The Hinglaj Puran, conserved
        </div>
        <div style={{ fontSize: 24, color: "#9a8f7a", marginTop: 26, maxWidth: 820, textAlign: "center" }}>
          Goddess of war · Kuldevi of the Kshatriya · a hundred-year-old grantha kept whole
        </div>
        <div style={{ width: 90, height: 2, background: "#C9A227", marginTop: 36 }} />
      </div>
    ),
    { ...size }
  );
}
