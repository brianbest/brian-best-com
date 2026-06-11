import { ImageResponse } from "next/og"

// Favicon: the nav's red "$" monogram. Colors mirror term-accent / term-bg.
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ef4444",
          color: "#0f0d0c",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        $
      </div>
    ),
    size,
  )
}
