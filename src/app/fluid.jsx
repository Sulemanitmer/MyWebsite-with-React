// pages/fluid.jsx
'use client'
import { useEffect, useRef } from 'react'
import Fluid from 'webgl-fluid'

const FluidLauncher = () => {
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

      // Add touch event listeners for touch dragging
      let isDragging = false
      let startX = 0
      let startY = 0

      const handleTouchStart = (e) => {
        isDragging = true
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
      }

      const handleTouchMove = (e) => {
        if (isDragging) {
          const deltaX = e.touches[0].clientX - startX
          const deltaY = e.touches[0].clientY - startY
          window.scrollBy(-deltaX, -deltaY)
          startX = e.touches[0].clientX
          startY = e.touches[0].clientY
          e.preventDefault()
        }
      }

      const handleTouchEnd = () => {
        isDragging = false
      }

      canvas.addEventListener('touchstart', handleTouchStart, { passive: true })
      canvas.addEventListener('touchmove', handleTouchMove, { passive: true }) // Mark as 'passive'
      canvas.addEventListener('touchend', handleTouchEnd, { passive: true })
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      />
    </>
  )
}

export default FluidLauncher
