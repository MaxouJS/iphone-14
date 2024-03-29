// Packages
import { FC, Suspense, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Event, Object3D } from 'three';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';

// Types
import type PropsType from '../../types/props/utils/props';

// Generic 3d model component, allows to load and copy any 3d GLTF 3d model
const Props: FC<PropsType> = (props: PropsType) => {
  // Props
  const { title, position, rotation, scale } = props;
  
  // Initializes this GTLF scene
  let { scene }: any = useGLTF(`props/${title}.glb`);

  // Allows this 3d model to be used as many times as required
  scene = useMemo((): Object3D<Event> => clone(scene), [scene]);
  
  // Hooks    
  useEffect((): void => {
    // Resolves the clipping bug on some camera angles
    scene.traverse((child: any) => {
      child.frustumCulled = false;
    });
  }, [scene]);

   // Using a primitive is the easiest way to load a custom 3d model. Using meshes can be hard to manage in this case
  return (
    <Suspense fallback={null}>
      <primitive position={position} rotation={rotation} scale={scale} object={scene} />
    </Suspense>
  );
};

// Preloads 3d models at the 3d canvas initializion, avoid black screen issue while a new model is loaded
useGLTF.preload('props/iPhone14Black.glb');
useGLTF.preload('props/iPhone14Gold.glb');
useGLTF.preload('props/iPhone14Purple.glb');
useGLTF.preload('props/iPhone14Silver.glb');

export default Props;
