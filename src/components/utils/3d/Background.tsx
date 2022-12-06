// Packages
import { MeshDistortMaterial } from '@react-three/drei';

// Types
import type { FC } from 'react';

// Generic 3d model component, allows to load and copy any 3d GLTF 3d model
const Background: FC = () => {
   // Using a primitive is the easiest way to load a custom 3d model. Using meshes can be hard to manage in this case
  return (
    <>
      <mesh position={[0, 0, -50]} scale={[10, 10, 10]} frustumCulled={false}>
        <sphereBufferGeometry args={[2.5, 100, 100]} />
        <MeshDistortMaterial
          speed={1}
          distort={0.5}
          radius={1}
          color={0xfbbf24}
        />
      </mesh>
      <mesh position={[50, 0, 33]} scale={[5, 5, 5]} frustumCulled={false}>
        <sphereBufferGeometry args={[2.5, 100, 100]} />
        <MeshDistortMaterial
          speed={1}
          distort={0.5}
          radius={1}
          color={0xfbbf24}
        />
      </mesh>
      <mesh position={[-50, 0, 33]} scale={[15, 15, 15]} frustumCulled={false}>
        <sphereBufferGeometry args={[2.5, 100, 100]} />
        <MeshDistortMaterial
          speed={1}
          distort={0.5}
          radius={1}
          color={0xfbbf24}
        />
      </mesh>
    </>
  )
};

export default Background;
