import { useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import SunTexture from '../textures/sun.jpg'
import { TextureLoader } from 'three'
import * as THREE from 'three'

function Sun() {
    const [texture] = useLoader(TextureLoader, [SunTexture])

  return (<>
  {/* <ambientLight  intensity={0.5}/> */}
  <hemisphereLight groundColor={'#000000'} />
  <pointLight color='#fff' position={[2, -5, 2]} intensity={0.6} />
  <Stars 
    radius={300}
    depth={60}
    count={20000}
    factor={7}
    saturation={10} 
    fade={true} 
    />
  <mesh>
    <sphereGeometry  args={[1, 32, 32]}/>
    <meshPhongMaterial />
    <meshStandardMaterial map={texture} metalness={0.3}/>
    <OrbitControls 
     enableZoom={true} zoomSpeed={0.6}
     enablePan={true} panSpeed={0.5}
     enableRotate={true} rotateSpeed={0.4}
      
      />
  </mesh>  
  </>
  )
}

export default Sun