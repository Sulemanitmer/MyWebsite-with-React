// pages/fluid.jsx
'use client'
import { useEffect, useRef } from 'react'
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

const Fluid = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      webGLFluidEnhanced.simulation(canvas, {
        PRESSURE: 0.2,
        SUNRAYS: false,
        START_SPLATS: 10,
        DENSITY_DISSIPATION: 3,
        CURL: 100,
        COLOR_PALETTE: ['#0000ff', '#111111', '#1d1d1d', '#eaeaea', '#4dba87'],
      })
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="h-screen w-screen"
      style={{ position: 'fixed', zIndex: -1, top: 0, left: 0 }}
    />
  )
}

export default Fluid
