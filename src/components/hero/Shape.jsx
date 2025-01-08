/* eslint-disable react/no-unknown-property */
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <MeshDistortMaterial
          color="#8dc640"
          attach="material"
          distort={0.7}
          speed={1.5}
        />
      </Sphere>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 3, 4]} />
    </>
  );
};

export default Shape;
