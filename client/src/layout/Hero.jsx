import TextBlurFade from "../components/TextBlurFade";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Video
import iaVideo from "../assets/videos/ia.mp4";

// Image
import gradientImg from "../assets/images/gradient.svg";

const Hero = () => {
  const [blurPx, setBlurPx] = useState(60);

  const mainSectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainSectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(mainSectionRef.current, { y: "-110%" }).to(
      ".main",
      { opacity: 0 },
      0,
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setBlurPx((prev) => {
          if (prev <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prev - 1;
        });
      }, 25);

      return () => clearInterval(intervalId);
    }, 4800);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main
      ref={mainSectionRef}
      className="main flex w-full items-center justify-center"
    >
      <img
        src={gradientImg}
        className="absolute right-36 w-[45%] opacity-30 blur-[82px]"
        alt="Gradiente em tons azúis"
      />

      <video
        autoPlay
        loop
        muted
        className="polygonVideo absolute right-0 h-full w-full object-cover object-center grayscale md:object-[33%]"
      >
        <source src={iaVideo} />
      </video>

      <div className="polygonVideo absolute top-0 left-0 z-[1] h-full w-full bg-black/50"></div>

      <div
        style={{
          backdropFilter: `blur(${blurPx}px)`,
        }}
        className={`absolute top-0 left-0 z-[1] h-full w-full`}
      ></div>

      <div className="relative z-[3] container mx-auto flex min-h-dvh flex-col items-center justify-center px-5 py-10 md:py-15 lg:px-0">
        <div className="me-auto mt-auto mb-10 flex w-full flex-col items-start text-start md:w-[60%]">
          <TextBlurFade duration={0.4} delay={4.8}>
            <p className="paragraph">
              Bem-vindo ao{" "}
              <span className="text-gradient relative font-bold italic">
                Portal Synthetica
                <br />
                <span className="absolute top-0.5 right-0 -z-[1] font-bold text-black/75 italic">
                  Portal Synthetica
                </span>
              </span>
            </p>
          </TextBlurFade>
          <TextBlurFade duration={0.4} delay={5}>
            <p className="font-headline mb-3 text-4xl font-medium text-balance text-black/75 italic md:text-6xl dark:text-gray-200">
              EM 2047
            </p>
          </TextBlurFade>

          <TextBlurFade duration={0.6} delay={5.2}>
            <h3 className="title">
              UM PORTAL ONDE PESSOAS E INTELIGÊNCIA ARTIFICIAL CAMINHAM JUNTAS,
              EXPLORANDO O MUNDO DA IA <br />
              <span className="title-shadow">
                UM PORTAL ONDE PESSOAS E INTELIGÊNCIA ARTIFICIAL CAMINHAM
                JUNTAS, EXPLORANDO O MUNDO DA IA
              </span>
            </h3>
          </TextBlurFade>
        </div>
      </div>
    </main>
  );
};

export default Hero;
