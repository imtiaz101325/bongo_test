import React from "react";

export default function Video({
  src = "",
}) {
  return (
    <video autoPlay>
      <source src={src} type="video/mp4" />
    </video>
  );
}
