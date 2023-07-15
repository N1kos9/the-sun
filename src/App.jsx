import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Material } from "three"
import { Suspense } from "react"
import Sun from "./component/sun"
import './App.css'

function App() {
  return (
    <div className="container">
      <Canvas>
        <Suspense fallback={null}>
          <Sun />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App