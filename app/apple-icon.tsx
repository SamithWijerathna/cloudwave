import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default async function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 24,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "22%",
        padding: "10px",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloudwave%20icon-fz2SZuSQ3XZGhcRQ5uB9STOuKCkx4G.png"
        alt="CloudWave Icon"
        width={160}
        height={160}
      />
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
