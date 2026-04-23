import Tilt from 'react-parallax-tilt';

export default function TiltingImage() {
  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={700}
      scale={1.05}
      transitionSpeed={1200}
      glareEnable={true}
      glareMaxOpacity={0.0}
      glarePosition="all"
      glareBorderRadius="50%"
      className='flex items-center justify-center'
    >
      <img
        src="./images/background1.jpg"
        alt="Avatar"
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
        }}
        
      />
    </Tilt>
  );
}