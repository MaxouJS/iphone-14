// Packages
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Html } from '@react-three/drei';
import { IoLogoApple, IoLogoDribbble, IoLogoInstagram, IoLogoLinkedin, IoMenu } from 'react-icons/io5';

// Components
// utils
import Cameras from '../components/utils/Cameras';
import Lights from '../components/utils/Lights';
import Props from '../components/utils/Props';
import Background from '../components/utils/3d/Background';

// Data
import themes from '../data/themes';

// Types
import type { Dispatch, FC, SetStateAction } from 'react';
import type ThemeType from '../types/theme';

const Main: FC = () => {
  // States
  const [theme, setTheme]: [ThemeType | null, Dispatch<SetStateAction<ThemeType | null>>] = useState<ThemeType | null>(null);

  // Hooks
  useEffect((): void => {
    const newThemes: ThemeType[] = themes;

    setTheme(newThemes[1]);
  }), [setTheme];

  return (
    <div className={`absolute h-full w-full bg-gradient-to-br ${theme?.backgroundColor[0]} ${theme?.backgroundColor[1]} ${theme?.primaryTextColor} select-none`}>
      <Canvas>
        {/* Initializes UI */}
        <Html fullscreen>
          <header>
            <nav>
              <button className='absolute left-8 top-8 hover:scale-125 duration-200'>
                <IoLogoApple className='text-2xl' />
              </button>
              <button className='absolute right-8 top-8 hover:scale-125 duration-200'>
                <IoMenu className='text-2xl' />
              </button>
            </nav>
          </header>
          <section className='flex flex-col h-full w-full sm:items-start items-center justify-center p-8 duration-200'>
            <div className={`flex flex-col w-fit ${theme?.glassColor} bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-md rounded-2xl shadow-xl shadow-neutral-50/25 lg:space-y-8 md:space-y-6 space-y-4 p-8 duration-200`}>
              <h1 className='flex flex-col drop-shadow'>
                <span className={`w-fit text-transparent bg-clip-text bg-gradient-to-r ${theme?.h1TextColor[0]} ${theme?.h1TextColor[1]} lg:text-6xl md:text-4xl text-2xl font-black duration-200`}>iPhone 14</span>
                <span className={`w-fit text-transparent bg-clip-text bg-gradient-to-br ${theme?.h2TextColor[0]} ${theme?.h2TextColor[1]} lg:text-4xl md:text-2xl text-xl font-bold duration-200`}>Pro Max</span>
              </h1>
              <h2 className='flex flex-col text-neutral-600 lg:text-2xl md:text-xl text-lg font-semibold duration-200 drop-shadow'>
                <span>Pro.</span>
                <span>Beyond.</span>
              </h2>
              <span className={`lg:text-md md:text-sm text-xs drop-shadow ${theme?.secondaryTextColor}`}>6.7-inch display</span>
              <div className='flex space-x-4'>
                <button className='rounded-full h-4 w-4 bg-indigo-900'></button>
                <button className='rounded-full h-4 w-4 bg-amber-200 ring-4 ring-neutral-900/25 scale-125'></button>
                <button className='rounded-full h-4 w-4 bg-neutral-200'></button>
                <button className='rounded-full h-4 w-4 bg-neutral-900'></button>
              </div>
              <span className='lg:text-2xl md:text-xl text-lg font-black duration-200 drop-shadow'>A$ 1,899</span>
              <button className={`bg-gradient-to-r ${theme?.buttonColor[0]} ${theme?.buttonColor[1]}  rounded-2xl shadow-lg ${theme?.buttonShadowColor} lg:p-4 p-3 hover:scale-110 duration-200`}>
                <span className='text-neutral-50 lg:text-xl md:text-lg text-md font-black'>Order</span>
              </button>
            </div>
          </section>
          <span className='absolute bottom-8 left-8 text-xs'>designed by <span className='font-black'>Maxence Gumiero</span></span>
          <div className='absolute bottom-8 right-8'>
            <div className='flex flex-col space-y-8'>
              <button>
                <IoLogoDribbble className='lg:text-2xl md:text-xl sm:text-lg hover:scale-125 duration-200' />
              </button>
              <button>
                <IoLogoInstagram className='lg:text-2xl md:text-xl sm:text-lg hover:scale-125 duration-200' />
              </button>
              <button>
                <IoLogoLinkedin className='lg:text-2xl md:text-xl sm:text-lg hover:scale-125 duration-200' />
              </button>
            </div>
          </div>
        </Html>
        {/* Initializes cameras */}
        <Cameras
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          enableRotate={true}
          minimumDistance={12.5}
          maximumDistance={12.5}
          minimumPolarAngle={0}
          maximumPolarAngle={Math.PI * 0.5}
        >
          {/* Initializes scene 3D elements */}
          <Lights />
          <ContactShadows
            position={[0, -6, 0]}
            blur={10}
            color={0xfbbf24}
          />
          {/* Places manually some 3d props elements */}
          <Props
            title='iphone14'
            position={[0, 0, 0]}
            rotation={[Math.PI * 1.9, 0, 0]}
            scale={[1, 1, 1]}
          />
          <Background
            blobColor={theme?.blobColor as number}
          />
        </Cameras>
      </Canvas>
    </div>
  );
};

export default Main;
