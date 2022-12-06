// Packages
import { FC } from 'react';

// Types
import type LightsType from '../../types/props/utils/lights';

const Lights: FC<LightsType> = (props: LightsType) => {
  // Props
  const {} = props;

  return (
    <>
      <ambientLight
        intensity={0.5}
      />
      <directionalLight
        position={[-50, 50, -50]}
        intensity={1}
      />
      <directionalLight
        position={[-50, 50, 50]}
        intensity={1}
      />
    </>
  );
};

export default Lights;
