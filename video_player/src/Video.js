import React, { useRef } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const VideoWrapper = styled.div``;

export default function Video({
  src = "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
}) {
  const videoRef = useRef();

  return (
    <VideoContainer>
      <video ref={videoRef}>
        <source src={src} type="video/mp4" />
      </video>
      <VideoWrapper>
        <button
          onClick={() => {
            videoRef.current.currentTime = videoRef.current.currentTime - 10;
          }}
        >
          Rewind
        </button>
        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
        <button
          onClick={() => {
            videoRef.current.currentTime = videoRef.current.currentTime + 10;
          }}
        >
          Forward
        </button>
      </VideoWrapper>
    </VideoContainer>
  );
}
