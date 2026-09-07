import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Generated favicon: the brand monogram on the forest green. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#22372c",
          color: "#d9c8ae",
          fontSize: 22,
          fontStyle: "italic",
          fontFamily: "serif",
        }}
      >
        M
      </div>
    ),
    size,
  );
}
