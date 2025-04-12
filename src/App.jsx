import { useEffect } from "react";
import Background from "./layout/Background";
import CreatePost from "./layout/CreatePost";

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
      <Background />
      <CreatePost />
    </>
  );
};

export default App;
