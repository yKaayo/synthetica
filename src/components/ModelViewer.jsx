import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ModelViewer = ({ scene }) => {
  const modelRef = useRef(null);
  const modelDivRef = useRef(null);
  const [isModelReady, setIsModelReady] = useState(false);

  useEffect(() => {
    if (modelRef.current) {
      setIsModelReady(true);
    }
  }, [modelRef]);

  useEffect(() => {
    if (!isModelReady) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        modelRef.current.rotation,
        {
          y: Math.PI,
        },
        {
          y: Math.PI * 2,
          position: "fixed",
          scrollTrigger: {
            trigger: "#formPost",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          ease: "none",
        },
      );

      gsap.to(modelDivRef.current, {
        position: "fixed",
        scrollTrigger: {
          trigger: "#formPost",
          start: "top 30%",
          end: "bottom center",
          scrub: true
        },
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, [isModelReady]);

  return (
    <div
      className={`absolute top-[30%] h-[300px] bg-radial dark:bg-none ${window.innerWidth < 768 ? "from-black/40 to-transparent to-70% opacity-40" : "from-black/70 to-transparent to-70% opacity-100"}`}
      ref={modelDivRef}
    >
      <Canvas camera={{ position: [1, 1, 1], fov: 50 }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} penumbra={1} />
        <Suspense fallback={null}>
          <primitive
            ref={modelRef}
            object={scene}
            onUpdate={(self) => {
              if (self && !isModelReady) {
                setIsModelReady(true);
              }
            }}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
