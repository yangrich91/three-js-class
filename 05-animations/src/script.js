import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock 2
const clock = new THREE.Clock()

// gsap 3 (calls requestAnimationiFrame in gsap)
gsap.to(mesh.position, { duration: 1, delay: 1, x:2 })
gsap.to(mesh.position, { duration: 2, delay: 2, x:0 })


// Time 1
// let time = Date.now()

// Animations
const tick = () =>
{
    // Normalize Animation Speed Across Variable FPS
    // Time 1
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    // console.log(deltaTime)    
    // console.log(time);
    // just pass the function, DO NOT CALL IT

    // Clock 2
    const elapsedTime = clock.getElapsedTime()
    console.log(elapsedTime)

    // Update Object
        // mesh.position.x -= 0.01
        // mesh.position.y -= 0.01

        // Time 1
        // mesh.rotation.y += 0.001 * deltaTime
        
        // Clock 2
        // mesh.rotation.y = 0.1 * elapsedTime * Math.PI * 2
        // mesh.position.y = elapsedTime
        // mesh.position.x = Math.cos(elapsedTime)
        // mesh.position.y = Math.sin(elapsedTime)
        // camera.position.x = Math.cos(elapsedTime)
        // camera.position.y = Math.sin(elapsedTime)
        // camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()