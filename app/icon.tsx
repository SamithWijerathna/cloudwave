import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default async function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloudwave%20icon-fz2SZuSQ3XZGhcRQ5uB9STOuKCkx4G.png"
        alt="CloudWave Icon"
        width={32}
        height={32}
      />
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
