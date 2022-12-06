// Packages
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Noise, Vignette } from '@react-three/postprocessing';

// Types
import type { FC } from 'react';
import type PostProcessingType from '../../types/props/utils/postProcessing';

const PostProcessing: FC<PostProcessingType> = (props: PostProcessingType) => {
  // Props
  const { blurMinimumDistance, blurMaximumDistance } = props;
  
  return (
    <EffectComposer>
      {/* Adds simple visual effects to improving render's quality */}
      {/* Caution! Not all devices can supports these effects, that is using user's device GPU, so some devices wouldn't support it */}
      <DepthOfField focusDistance={0} focalLength={blurMinimumDistance} bokehScale={blurMaximumDistance} height={256} />
      <Bloom luminanceThreshold={1} luminanceSmoothing={1} height={256} />
      <Noise opacity={0.05} />
      <HueSaturation saturation={0.125} />
    </EffectComposer>
  );
};

export default PostProcessing;
