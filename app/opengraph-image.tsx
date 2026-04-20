import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Aire-Max | Expertos en Climatización"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #dff4ff 40%, #bae6fd 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orb */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(7, 156, 251, 0.12)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(0, 224, 255, 0.10)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #079cfb, #037ecc)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(7, 156, 251, 0.4)",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #037ecc, #00baff)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Aire-Max
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#0f172a",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 20px 0",
          }}
        >
          Expertos en{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #037ecc, #00baff)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Climatización
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "#475569",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
            margin: "0 0 48px 0",
          }}
        >
          Venta, instalación y mantenimiento de aires acondicionados
        </p>

        {/* Trust badges */}
        <div style={{ display: "flex", gap: "24px" }}>
          {["✓ Técnicos certificados", "✓ Garantía extendida", "✓ Respuesta 24h"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(7, 156, 251, 0.2)",
                  borderRadius: "100px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#037ecc",
                  backdropFilter: "blur(10px)",
                }}
              >
                {badge}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  )
}
