import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ProductDesignModel } from './ProductDesign'
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ProductDesignModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">        
        <Stage environment="night" intensity={0.5}>
          <ProductDesignModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  )
}

export default ProductDesignModelContainer
