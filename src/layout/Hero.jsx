import TextBlurFade from "../components/TextBlurFade";
import { useEffect, useState } from "react";

// Video
import iaVideo from "../assets/videos/ia.mp4";

const Hero = () => {
  const [blurPx, setBlurPx] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlurPx(prev => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 25);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover grayscale"
      >
        <source src={iaVideo} />
      </video>

      <div className="absolute top-0 left-0 z-[1] h-full w-full bg-black/50"></div>

      <div
        style={{ backdropFilter: `blur(${blurPx}px)` }}
        className={`absolute top-0 left-0 z-[1] h-full w-full`}
      ></div>

      <div className="section z-[3] h-screen">
        <div className="me-auto mt-auto mb-5 flex w-[60%] flex-col items-start text-start">
          <TextBlurFade duration={0.4} delay={0}>
            <p className="paragraph">Bem-vindo ao Portal Synthetica</p>
          </TextBlurFade>
          <TextBlurFade duration={0.4} delay={0.2}>
            <p className="subtitle mb-3">EM 2047</p>
          </TextBlurFade>
          <TextBlurFade duration={0.6} delay={0.4}>
            <h3 className="title dark:text-white">
              TRAGA O MELHOR ENTRE TECNOLOGIA E HUMANIDADE
            </h3>
          </TextBlurFade>
        </div>
      </div>
    </main>
  );
};

export default Hero;
