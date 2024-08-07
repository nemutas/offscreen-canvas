console.log(`https://github.com/nemutas/${import.meta.env.BASE_URL.split('/').at(-2)}`)

const canvas = document.querySelector<HTMLCanvasElement>('.webgl-canvas')!
const offscreenCanvas = canvas.transferControlToOffscreen()

const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' })

worker.postMessage(
  {
    mode: 'setup',
    canvas: offscreenCanvas,
    width: window.innerWidth,
    height: window.innerHeight,
    dpr: window.devicePixelRatio,
  },
  [offscreenCanvas],
)

window.addEventListener('resize', () => {
  worker.postMessage({
    mode: 'resize',
    width: window.innerWidth,
    height: window.innerHeight,
  })
})
