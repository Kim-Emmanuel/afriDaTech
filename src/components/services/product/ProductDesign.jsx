/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

export function ProductDesignModel(props) {
  const { nodes, materials } = useGLTF('/productDesign.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Cup.000']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Top.000']} />
      </group>
    </group>
  )
}

useGLTF.preload('/productDesign.glb')
