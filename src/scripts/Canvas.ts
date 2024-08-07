import * as THREE from 'three'

export class Canvas {
  readonly renderer: THREE.WebGLRenderer
  private camera: THREE.PerspectiveCamera
  private scene: THREE.Scene
  private clock: THREE.Clock

  private mesh: THREE.Mesh

  constructor(canvas: OffscreenCanvas, width: number, height: number, dpr: number) {
    this.renderer = this.createRenderer(canvas, width, height, dpr)
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock()

    this.init()
    this.mesh = this.createMesh()

    this.renderer.setAnimationLoop(this.anime.bind(this))
  }

  private createRenderer(canvas: OffscreenCanvas, width: number, height: number, dpr: number) {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(dpr)
    return renderer
  }

  private init() {
    this.scene.background = new THREE.Color('#000')
    this.camera.position.z = 5
  }

  private createMesh() {
    const geo = new THREE.BoxGeometry()
    const mat = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geo, mat)
    this.scene.add(mesh)
    return mesh
  }

  private anime() {
    const dt = this.clock.getDelta()
    this.mesh.rotation.x += dt
    this.mesh.rotation.y += dt
    this.mesh.rotation.z += dt

    this.renderer.setRenderTarget(null)
    this.renderer.render(this.scene, this.camera)
  }

  resize(width: number, height: number) {
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }
}
