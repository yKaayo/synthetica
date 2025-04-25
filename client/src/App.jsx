import { useEffect } from "react";
import Background from "./layout/Background";
import CreatePost from "./layout/CreatePost";
import Posts from "./layout/Posts";
import Hero from "./layout/Hero";
import PreLoader from "./layout/PreLoader";
import Faq from "./layout/Faq";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, []);

  return (
    <>
      {/* <PreLoader /> */}
      <Background />
      <Hero />
      <Posts />
      <CreatePost />
      <Faq />
    </>
  );
};

export default App;
