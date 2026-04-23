import { TypeAnimation } from 'react-type-animation';

export default function TypingAnimation() {
  return (
    <div className='flex items-center h-10'>
        <TypeAnimation
          className="text-[25px] font-medium gradient-word"
          sequence={[
            'Building pixel-perfect web applications.',
            1000,
            'Turning ideas into real products.',
            1000,
            'Crafting modern user experiences.',
            1000,
            'Developing scalable solutions.',
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
        </div>
  )
}
