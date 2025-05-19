import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "CloudWave - Coming Soon"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom, #fff7ed, #ffedd5)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloudwave%20icon-fz2SZuSQ3XZGhcRQ5uB9STOuKCkx4G.png"
        width={300}
        height={150}
        alt="CloudWave Icon"
        style={{
          marginBottom: 40,
        }}
      />
      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          color: "#f97316",
        }}
      >
        CloudWave
      </div>
    </div>,
    {
      ...size,
    },
  )
}
