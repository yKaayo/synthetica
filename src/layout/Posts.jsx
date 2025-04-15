import { useEffect, useState } from "react";
import { handleGetPosts } from "../lib/api";

// Components
import TiltedCard from "../components/TiltedCard";
import Modal from "../components/Modal";

// Icon
import editIcon from "../assets/icons/edit.svg";
import trashIcon from "../assets/icons/trash.svg";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await handleGetPosts();
      console.log(postsData);
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  function handleModal(post) {
    console.log(post);
    const contentModal = (
      <>
        <img
          src={`http://127.0.0.1:8000${post.image_url}`}
          className="absolute top-0 left-0 h-fit w-full rounded-md object-cover"
          alt=""
        />

        <div className="relative z-[1] flex flex-col items-center">
          <h3 className="title">{post.title}</h3>

          <p className="subtitle">{post.description}</p>
          <p className="paragraph">{post.content}</p>
        </div>
      </>
    );
    setContent(contentModal);
    setModal(true);
  }

  return (
    <section className="section">
      <p className="paragraph mb-5">Em poucos passos</p>

      <h3 className="title text-center dark:text-white">
        TRAGA SEU
        <br />
        CONHECIMENTO PARA
        <br />O FUTURO
      </h3>

      <p className="subtitle mt-3 text-center">
        FAÇA PARTE DE UM MUNDO HIPERCONECTADO
      </p>

      <div className="mt-20 grid w-full grid-cols-1 justify-center gap-x-8 gap-y-5 px-5 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <button
            key={post.id}
            className="cursor-pointer"
            onClick={() => handleModal(post)}
          >
            <TiltedCard
              imageSrc={`http://127.0.0.1:8000${post.image_url}`}
              altText={post.title}
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={6.5}
              scaleOnHover={1.04}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="relative flex h-full w-full flex-col items-center justify-center">
                  <p className="absolute top-2 left-5 text-xs text-white">
                    Autor:{" "}
                    <span className="text-primary font-sm">{post.author}</span>
                  </p>

                  <p className="absolute right-5 bottom-2 text-xs text-white">
                    Categoria:{" "}
                    <span className="text-primary font-sm">
                      {post.category}
                    </span>
                  </p>

                  <h3 className="font-headline text-primary text-2xl font-semibold text-balance uppercase md:text-4xl">
                    {post.title}
                  </h3>

                  <p className="-mt-1 mb-1 text-white">{post.description}</p>
                  {/* <p className="text-sm text-white">{post.content}</p> */}
                </div>
              }
            />
          </button>
        ))}
      </div>

      {modal && <Modal isOpen={modal} content={content} setModal={setModal} />}
    </section>
  );
};

export default Posts;
