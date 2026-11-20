import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "edge";
export const alt = `${site.name} — University of Maiduguri`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06090c",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 900,
            height: 900,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(249,122,10,0.50) 0%, rgba(249,122,10,0.10) 45%, rgba(6,9,12,0) 70%)",
            top: -420,
            right: -240,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(20,184,166,0.28) 0%, rgba(20,184,166,0.06) 50%, rgba(6,9,12,0) 72%)",
            bottom: -380,
            left: -180,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 14,
              background: "linear-gradient(135deg,#ffbb63,#f97a0a 55%,#b74205)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#06090c",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            U
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f7f1e6", fontSize: 26, fontWeight: 600, letterSpacing: -0.5 }}>
              UNDP UniPod
            </span>
            <span style={{ color: "#8f9aa6", fontSize: 18, letterSpacing: 4, textTransform: "uppercase" }}>
              UNIMAID · ASR-iCIE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={{ color: "#ffbb63", fontSize: 22, letterSpacing: 6, textTransform: "uppercase" }}>
            UNDP timbuktoo · University of Maiduguri
          </span>
          <span
            style={{
              color: "#f7f1e6",
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -3,
              maxWidth: 980,
            }}
          >
            Prototype here. Build for the Lake Chad Basin.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#a8b2bd", fontSize: 22 }}>
            Housed at the Abdul Samad Rabiu International Centre for Innovation &amp; Entrepreneurship
          </span>
          <span style={{ color: "#f97a0a", fontSize: 22, fontWeight: 600 }}>unipod.unimaid.edu.ng</span>
        </div>
      </div>
    ),
    size,
  );
}
