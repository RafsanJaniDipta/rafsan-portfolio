import { ImageResponse } from "next/og";

export const alt = "Rafsan Jani Dipta — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 78% 28%, rgba(16,185,129,0.20) 0%, transparent 55%)",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#10b981", fontSize: 26 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#10b981" }} />
          rafsan@dev:~
        </div>

        <div
          style={{
            fontSize: 104,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginTop: 28,
            lineHeight: 1.05,
          }}
        >
          Rafsan Jani Dipta
        </div>

        <div style={{ fontSize: 40, color: "#10b981", marginTop: 16 }}>
          Full Stack Developer
        </div>

        <div style={{ fontSize: 26, color: "#8a8a8a", marginTop: 28 }}>
          Next.js · Node.js · PostgreSQL · Prisma · TypeScript
        </div>

        <div style={{ fontSize: 22, color: "#5a5a5a", marginTop: 46 }}>
          {"// I turn ideas into full-stack reality"}
        </div>
      </div>
    ),
    size,
  );
}
