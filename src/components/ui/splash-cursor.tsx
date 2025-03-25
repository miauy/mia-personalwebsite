
"use client"

import * as React from "react"
import { useCallback, useRef } from "react"
import { useCallbackRef } from "@radix-ui/react-use-callback-ref"

interface SplashCursorProps {
  /**
   * The color of the splash when clicked
   * @default "hsl(var(--primary))"
   */
  color?: string
  /**
   * The size of the splash when clicked
   * @default 100
   */
  size?: number
  /**
   * The speed of the splash animation
   * @default 1000
   */
  speed?: number
  /**
   * The mode of the splash (fill or splash)
   * @default "splash"
   */
  mode?: "fill" | "splash"
  /**
   * The custom class name for the canvas
   */
  className?: string
}

export const SplashCursor = ({
  color = "hsl(var(--primary))",
  size = 100,
  speed = 1000,
  mode = "splash",
  className,
}: SplashCursorProps) => {
  // Canvas ref
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  // Animation ref
  const animationRef = React.useRef<number>()
  // Splash ref
  const splashRef = React.useRef<
    {
      x: number
      y: number
      size: number
      start: number
    }[]
  >([])

  // Setup the click handler
  const handleCanvasClick = useCallbackRef((event: MouseEvent) => {
    // Get the canvas and add a new splash
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    splashRef.current.push({
      x,
      y,
      size: 0,
      start: Date.now(),
    })

    if (animationRef.current === undefined) {
      animationRef.current = requestAnimationFrame(renderCanvas)
    }
  })

  // Create a function to render to the canvas
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const currentTime = Date.now()
    for (let i = 0; i < splashRef.current.length; i++) {
      const splash = splashRef.current[i]
      const elapsedTime = currentTime - splash.start
      const progress = elapsedTime / speed

      // Check if fill mode is enabled
      if (mode === "fill") {
        // Fill the entire canvas with the color
        ctx.fillStyle = color
        ctx.globalAlpha = Math.min(1, progress)
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else {
        // Calculate the current size of the splash
        const currentSize = Math.min(size, (progress * size) / 0.3)

        // Draw the splash
        ctx.beginPath()
        ctx.arc(splash.x, splash.y, currentSize, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = Math.max(0, 1 - progress)
        ctx.fill()
      }

      // If the splash is completely faded, remove it
      if (progress >= 1) {
        splashRef.current.splice(i, 1)
        i--
      }
    }

    // If there are still splashes to render, continue the animation
    if (splashRef.current.length > 0) {
      animationRef.current = requestAnimationFrame(renderCanvas)
    } else {
      animationRef.current = undefined
    }
  }, [color, size, speed, mode])

  // Make sure to clean up the animation frame
  React.useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Make sure to resize the canvas when the window resizes
  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === canvas) {
          canvas.width = entry.contentRect.width
          canvas.height = entry.contentRect.height
        }
      }
    })

    resizeObserver.observe(canvas)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  // Add click event listener to the canvas
  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Add click event listener to the canvas
    canvas.addEventListener("click", handleCanvasClick)

    // Make sure to clean up the event listener
    return () => {
      canvas.removeEventListener("click", handleCanvasClick)
    }
  }, [handleCanvasClick])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  )
}
