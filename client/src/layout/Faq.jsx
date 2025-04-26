import { useState } from "react";

// Components
import TextBlurFade from "../components/TextBlurFade";

// Icons
import ArrowIcon from "../assets/icons/ArrowIcon";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Existe a versão para aplicativo?",
      answer: "abcdpjofsnlk",
    },
    {
      question: "hjgfkh",
      answer: "fgdjh",
    },
  ];

  return (
    <section className="section">
      <TextBlurFade duration={0.4} delay={0.4}>
        <p className="paragraph mb-5">Dúvidas que nos movem</p>
      </TextBlurFade>

      <TextBlurFade duration={0.4}>
        <h3 className="title text-center dark:text-white">
          SERÁ QUE AS MÁQUINAS
          <br />
          PODEM NOS ENTENDER?
          <br />
          <span className="title-shadow">
            SERÁ QUE AS MÁQUINAS
            <br />
            PODEM NOS ENTENDER?
          </span>
        </h3>
      </TextBlurFade>

      <TextBlurFade duration={0.4} delay={0.4}>
        <p className="subtitle mt-3 text-center">
          ENCONTRE RESPOSTAS PARA AS PERGUNTAS QUE MANTÉM VOCÊ ACORDADO
        </p>
      </TextBlurFade>

      <div className="mx-auto mt-10 flex w-[90%] flex-col gap-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex w-full cursor-pointer items-center justify-between gap-5 bg-gray-400 p-4 dark:bg-gray-200">
              <h3 className="text-lg font-semibold text-black">
                {faq.question}
              </h3>

              <ArrowIcon className="size-5" fill="fill-white dark:fill-black" />
            </div>

            <div
              className={`overflow-hidden bg-gray-500 px-4 transition-all duration-300 ${activeIndex === index ? "max-h-40 py-4" : "max-h-0"}`}
            >
              <p className="text-gray-200">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
