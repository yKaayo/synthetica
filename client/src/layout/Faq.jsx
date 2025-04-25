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
      answer:
        "abcdpjofsnlk",
    },
    {
      question: "hjgfkh",
      answer: "fgdjh",
    },
  ];

  return (
    <section className="section">
      <TextBlurFade duration={0.4} delay={0.4}>
        <p className="paragraph mb-5">FAQ</p>
      </TextBlurFade>

      <TextBlurFade duration={0.4}>
        <h3 className="title text-center dark:text-white">
          TRAGA SEU
          <br />
          CONHECIMENTO PARA
          <br />O FUTURO
          <br />
          <span className="title-shadow">
            TRAGA SEU
            <br />
            CONHECIMENTO PARA
            <br />O FUTURO
          </span>
        </h3>
      </TextBlurFade>

      <TextBlurFade duration={0.4} delay={0.4}>
        <p className="subtitle mt-3 text-center">
          FAÇA PARTE DE UM MUNDO HIPERCONECTADO
        </p>
      </TextBlurFade>

      <div className="mt-10 flex flex-col gap-5 mx-auto w-[90%]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="flex cursor-pointer items-center justify-between gap-5 w-full bg-gray-400 p-4 dark:bg-gray-200">
              <h3 className="text-lg font-semibold text-black">{faq.question}</h3>

              <ArrowIcon className="size-5" fill="fill-white dark:fill-black" />
            </div>

            <div
              className={`overflow-hidden px-4 transition-all duration-300 bg-gray-500 ${activeIndex === index ? "max-h-40 py-4" : "max-h-0"}`}
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
