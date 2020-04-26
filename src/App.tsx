import React from 'react'
import { Lottie } from '@crello/react-lottie'
import animationData from './assets/hello.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const App: React.FC = () => (
  <div>
    <Lottie config={defaultOptions} height="175px" width="300px" />
  </div>
)
