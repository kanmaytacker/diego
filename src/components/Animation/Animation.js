import React from 'react'
import Lottie from "lottie-react";

export default function LottieAnimation ({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const style = {
    height: height,
    width: width
  }
  return (
    <div>
      <Lottie animationData={lotti} style={style} />
    </div>
  )
}