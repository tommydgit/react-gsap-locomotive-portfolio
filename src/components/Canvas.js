import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import SimplexNoise from 'simplex-noise'

const StyledCanvas = styled.canvas`
  margin: 0;
  padding: 0;
  width: 100px;
  height: 100px;
`

const lerp = (x, x1, x2, y1, y2) => y1 + (x - x1) * ((y2 - y1) / (x2 - x1))

const getPixel = (noise, palette) => {
  const rgb = []

  for (let i = 0; i < 3; i++) {
    rgb.push(lerp(Math.abs(noise), 0, 1, palette[0][i], palette[1][i]))
  }
  return rgb
}

// lavalamp 8-P
// const palette = [
//   [255, 129, 0],
//   [255, 0, 114]
// ]

// sandybeach
// const palette = [
//   [156, 205, 205],
//   [218, 160, 100]
// ]

// const palette = [
//   [232, 189, 0],
//   [218, 160, 100]
// ]

// instafade
// const palette = [
//   [95, 97, 180],
//   [254, 91, 53]
// ]

// bright blue/orange
// const palette = [
//   [255, 77, 0],
//   [0, 201, 255]
// ]

// dark blue/orange
const palette = [
  [11, 40, 59],
  [26, 83, 127]

]

// bright blue/orange
// const palette = [
//   [155, 187, 201],
//   [237, 155, 89]
// ]

// bright blue/orange
// const palette = [
//   [155, 187, 201],
//   [237, 155, 89]
// ]

const Canvas = () => {
  const canvasRef = useRef()
  const simplex = useRef(new SimplexNoise())
  const tRef = useRef(0)
  const rafRef = useRef()

  useEffect(() => {
    const frame = () => {
      const ctx = canvasRef.current.getContext('2d')
      const imageData = ctx.createImageData(100, 100)

      for (let x = 0; x < 100; x++) {
        for (let y = 0; y < 100; y++) {
          const index = (x + y * 100) * 4
          const noise = simplex.current.noise3D(
            x / 100,
            y / 100,
            tRef.current / 750
          )
          const pixel = getPixel(noise, palette)
          imageData.data[index] = pixel[0]
          imageData.data[index + 1] = pixel[1]
          imageData.data[index + 2] = pixel[2]
          imageData.data[index + 3] = 255
        }
      }

      ctx.putImageData(imageData, 0, 0)
      tRef.current++
      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return <StyledCanvas data-scroll data-scroll-sticky data-scroll-target='#scroll' ref={canvasRef} width="100px" height="100px" id='lavalamp'/>
}

export default Canvas
