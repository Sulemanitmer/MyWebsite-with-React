// pages/fluid.jsx
'use client'
import { useEffect, useRef } from 'react'
import Fluid from 'webgl-fluid'

const Fluidcavnce = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      Fluid(canvas, {
        PRESSURE: 1,
        SUNRAYS: true,
        PRESSURE_ITERATIONS: 20,
        START_SPLATS: 20,
        DENSITY_DISSIPATION: 2,
        CURL: 0,
        VELOCITY_DISSIPATION: 0,
        SPLAT_RADIUS: 0.2,
        BLOOM: false,
        SUNRAYS_WEIGHT: 1,
        TRANSPARENT: true,
      })
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="h-screen w-screen"
      style={{
        position: 'fixed',
        zIndex: 0,
        top: 0,
        left: 0,
      }}
    />
  )
}

export default Fluidcavnce
