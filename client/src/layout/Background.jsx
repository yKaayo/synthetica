import Particles from "../components/Particles";

const Background = () => {
  return (
    <div className="fixed h-screen w-full dark:bg-black">
      
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default Background;
