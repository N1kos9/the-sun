import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import SunTexture from '../textures/sun.jpg'
import NormalMapTexture from '../textures/normalMap.jpg'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import { useRef } from 'react'

function Sun() {
  const [texture, normalTexture] = useLoader(TextureLoader, [SunTexture, NormalMapTexture])

  const sunRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    sunRef.current.rotation.y = elapsedTime / 6
  })

  return (<>
  {/* <ambientLight  intensity={0.5}/> */}
  <directionalLight 
  color={'0xffffff'} 
  intensity={0.9}
  />
  <hemisphereLight groundColor={'#000000'} />
  <pointLight 
  castShadow={true}
  color='#fff' 
  position={[5, -5, 2]} 
  intensity={0.5} 
  />
  <Stars 
    radius={300}
    depth={60}
    count={20000}
    factor={7}
    saturation={10} 
    fade={true} 
    />
  <mesh ref={sunRef}>
    <sphereGeometry  args={[1.8, 32, 32]}/>
    <meshPhongMaterial />
    <meshStandardMaterial 
    map={texture} 
    roughness={0.9}
    />
    <OrbitControls 
     enableZoom={true} 
     zoomSpeed={0.6}
     enablePan={true} 
     panSpeed={0.5}
     enableRotate={true} 
     rotateSpeed={0.4}     
      />
  </mesh>  
  </>
  )
}

export default Sun