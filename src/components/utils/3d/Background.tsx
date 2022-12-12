// Packages
import { MeshDistortMaterial } from '@react-three/drei';

// Types
import type { FC } from 'react';
import type BackgroundType from '../../../types/props/3d/background';

const Background: FC<BackgroundType> = (props: BackgroundType) => {
  // Props
  const { blobColor }: BackgroundType = props;
  
  return (
    <>Blo
      <mesh position={[50, 0, 33]} scale={[5, 5, 5]} frustumCulled={false}>
        <sphereBufferGeometry args={[2.5, 100, 100]} />
        <MeshDistortMaterial
          speed={1}
          distort={0.5}
          radius={1}
          color={blobColor}
        />
      </mesh>
      <mesh position={[-50, 0, 33]} scale={[15, 15, 15]} frustumCulled={false}>
        <sphereBufferGeometry args={[2.5, 100, 100]} />
        <MeshDistortMaterial
          speed={1}
          distort={0.5}
          radius={1}
          color={blobColor}
        />
      </mesh>
    </>
  )
};

export default Background;
