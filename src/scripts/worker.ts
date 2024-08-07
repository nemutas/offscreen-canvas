import { Canvas } from './Canvas'

let canvas: Canvas | null = null

onmessage = (event) => {
  const { mode, canvas: offscreenCanvas, width, height, dpr } = event.data

  if (mode === 'setup') {
    Object.assign(offscreenCanvas, { style: { width: 0, height: 0 } })
    canvas = new Canvas(offscreenCanvas, width, height, dpr)
  } else if (mode === 'resize') {
    canvas?.resize(width, height)
  }
}
