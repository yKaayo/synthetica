import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PreLoader = () => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const loadingScreen = useRef(null);

  useEffect(() => {
    function animate(counter, duration, delay = 0) {
      if (!counter) return;

      const numHeight = counter.querySelector(".num")?.clientHeight || 0;
      const totalDistance =
        ((counter.querySelectorAll(".num")?.length || 0) - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    }

    animate(counter1Ref.current, 2.5, 1);
    animate(counter2Ref.current, 3, 0);

    gsap.to(".digit", {
      top: "-150px",
      stagger: {
        amount: 0.25,
      },
      delay: 5,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.to(loadingScreen.current, {
      opacity: 0,
      scale: 150,
      duration: 1.5,
      delay: 4.2,
      ease: "power2.inOut",
      display: "none",
    });
  }, []);

  return (
    <section
      ref={loadingScreen}
      className="loading-screen fixed top-0 left-0 z-50 flex h-full w-full cursor-none items-center justify-center bg-white dark:bg-black text-black dark:text-white font-headline"
    >
      <div className="counter absolute flex h-[100px] text-[100px] leading-[102px] font-normal overflow-hidden">
        <div className="num">2</div>
        <div className="num">0</div>
        <div ref={counter1Ref} className="counter1 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
        </div>
        <div ref={counter2Ref} className="counter2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
        </div>
      </div>
    </section>
  );
};

export default PreLoader;
