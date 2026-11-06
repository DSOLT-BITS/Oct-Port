import { ImageResponse } from "next/og";
import { profile } from "@/data/resume";

export const alt = `${profile.name} | ${profile.role}`;
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
          padding: 80,
          background: "#1e1e1e",
          color: "#f2f2f3",
        }}
      >
        <div style={{ fontSize: 28, color: "#e5a13a", marginBottom: 24 }}>
          {`${profile.location} · U.S. Army Veteran`}
        </div>
        <div style={{ fontSize: 112, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 44, color: "#a1a1a6", marginTop: 16 }}>
          {profile.role}
        </div>
        <div
          style={{
            width: 160,
            height: 6,
            background: "#007acc",
            marginTop: 40,
          }}
        />
      </div>
    ),
    size,
  );
}
