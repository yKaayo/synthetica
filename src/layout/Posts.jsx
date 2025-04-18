import { useEffect, useState } from "react";
import { handleGetPosts, handleDeletePost } from "../lib/api";

// Components
import TiltedCard from "../components/TiltedCard";
import Modal from "../components/Modal";

// Icon
import editIcon from "../assets/icons/edit.svg";
import trashIcon from "../assets/icons/trash.svg";
import EditPostModal from "../components/EditPostModal";
import { BlurFade } from "../components/BlurFade";

const Posts = () => {
  // Posts
  const [posts, setPosts] = useState([]);

  // Modal
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState("");

  async function fetchPosts() {
    const postsData = await handleGetPosts();
    setPosts(postsData);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function handleEdit(post) {
    setContent(
      <EditPostModal
        post={post}
        onSave={() => setModal(false)}
        showPostEdited={() => fetchPosts()}
      />,
    );

    setModal(true);
  }

  function handleDelete(post) {
    async function handleDeleteConfirmed(id) {
      const res = await handleDeletePost(id);

      setModal(false);
      fetchPosts();

      // Showing to the user that the post was deleted
      const contentModal = (
        <h3 className="text-center text-2xl font-bold text-balance">
          {res.message}
        </h3>
      );
      setContent(contentModal);
      setModal(true);
    }

    function handleCancelDelete() {
      const contentModal = (
        <div className="flex flex-col items-center">
          <img
            src={`http://127.0.0.1:8000${post.image_url}`}
            className="absolute top-0 left-0 z-[1] h-[120px] w-full rounded-t-md object-cover md:h-[200px]"
            alt=""
          />

          <div className="absolute top-0 left-0 z-[2] h-[120px] w-full rounded-t-md bg-black/50 md:h-[200px]">
            <h3 className="title absolute bottom-1 left-2">{post.title}</h3>
          </div>

          <div className="relative mt-[76px] min-h-[calc(90vh-208px)] w-full overflow-y-auto md:mt-[160px] md:min-h-[calc(90vh-288px)]">
            <div className="absolute top-2 right-1 flex items-center gap-2">
              <button
                onClick={() => handleEdit(post)}
                className="relative cursor-pointer"
              >
                <img
                  src={editIcon}
                  className="size-7 rounded-full border-2 border-gray-500 bg-gray-500 p-1 duration-300 hover:scale-105 hover:bg-gray-500/40"
                  alt="Editar"
                />
              </button>

              <button
                onClick={() => handleDelete(post)}
                className="relative cursor-pointer"
              >
                <img
                  src={trashIcon}
                  className="size-7 rounded-full border-2 border-gray-500 bg-gray-500 p-1 duration-300 hover:scale-105 hover:bg-gray-500/40"
                  alt="Apagar"
                />
              </button>
            </div>

            <p className="font-headline mt-2 text-lg font-medium text-balance break-words text-black/75 md:text-3xl">
              {post.description}
            </p>
            <p className="text-start break-words text-black/75 md:text-2xl">
              {post.content}
            </p>
          </div>
        </div>
      );

      setContent(contentModal);
    }

    const contentModal = (
      <div className="flex flex-col items-center">
        <img
          src={`http://127.0.0.1:8000${post.image_url}`}
          className="absolute top-0 left-0 z-[1] h-[120px] w-full rounded-t-md object-cover md:h-[200px]"
          alt=""
        />

        <div className="absolute top-0 left-0 z-[2] h-[120px] w-full rounded-t-md bg-black/50 md:h-[200px]">
          <h3 className="title absolute bottom-1 left-2">{post.title}</h3>
        </div>

        <div className="relative mt-[76px] min-h-[calc(90vh-208px)] w-full overflow-y-auto md:mt-[160px] md:min-h-[calc(90vh-288px)]">
          <div className="absolute top-2 right-1 flex items-center gap-2">
            <button
              onClick={() => handleEdit(post)}
              className="relative cursor-pointer"
            >
              <img
                src={editIcon}
                className="size-7 rounded-full border-2 border-gray-500 bg-gray-500 p-1 duration-300 hover:scale-105 hover:bg-gray-500/40"
                alt="Editar"
              />
            </button>

            <div className="relative flex justify-center">
              <div className="absolute top-8 right-0 flex flex-col gap-1 rounded-md bg-red-400 p-2 text-xs text-white">
                <p className="mb-2 text-center text-nowrap">
                  Tem certeza que
                  <br />
                  deseja apagar?
                </p>

                <button
                  onClick={() => handleDeleteConfirmed(post.id)}
                  className="cursor-pointer rounded-md border-2 border-red-600 bg-red-600 py-1 duration-300 hover:bg-red-500"
                >
                  Apagar
                </button>

                <button
                  onClick={() => handleCancelDelete()}
                  className="cursor-pointer rounded-md border-2 border-gray-200 bg-gray-200 py-1 text-black duration-300 hover:scale-105 hover:bg-gray-100/40"
                >
                  Cancelar
                </button>
              </div>

              <img
                src={trashIcon}
                className="size-7 rounded-full border-2 border-gray-500 bg-gray-500 p-1 duration-300 hover:scale-105 hover:bg-gray-500/40"
                alt="Apagar"
              />
            </div>
          </div>

          <p className="font-headline mt-2 text-lg font-medium text-balance break-words text-black/75 md:text-3xl">
            {post.description}
          </p>
          <p className="text-start break-words text-black/75 md:text-2xl">
            {post.content}
          </p>
        </div>
      </div>
    );

    setContent(contentModal);
  }

  function handleModal(post) {
    const contentModal = (
      <div className="flex flex-col items-center overflow-y-auto">
        <img
          src={`http://127.0.0.1:8000${post.image_url}`}
          className="absolute top-0 left-0 z-[1] h-[120px] w-full rounded-t-md object-cover md:h-[200px]"
          alt=""
        />

        <div className="absolute top-0 left-0 z-[2] h-[120px] w-full rounded-t-md bg-black/50 md:h-[200px]">
          <h3 className="title absolute bottom-1 left-2">{post.title}</h3>
        </div>

        <div className="relative mt-[76px] w-full flex-1 md:mt-[160px]">
          <div className="absolute top-2 right-1 flex items-center gap-2">
            <button
              onClick={() => handleEdit(post)}
              className="relative cursor-pointer"
            >
              <img
                src={editIcon}
                className="size-7 rounded-full border-2 border-gray-500 bg-gray-500 p-1 duration-300 hover:scale-105 hover:bg-gray-500/40"
                alt="Editar"
              />
            </button>

            <button
              onClick={() => handleDelete(post)}
              className="relative cursor-pointer"
            >
              <img
                src={trashIcon}
                className="size-7 rounded-full border-2 border-gray-500 bg-gray-500 p-1 duration-300 hover:scale-105 hover:bg-gray-500/40"
                alt="Apagar"
              />
            </button>
          </div>

          <p className="font-headline my-2 text-lg font-medium text-balance break-words text-black/75 md:text-3xl">
            {post.description}
          </p>
          <p className="text-start break-words text-black/75 md:text-2xl">
            {post.content}
          </p>
        </div>
      </div>
    );

    setContent(contentModal);
    setModal(true);
  }

  return (
    <section className="section">
      <BlurFade
        delay={0.2}
        duration={0.6}
        className={
          "mt-10 grid w-full grid-cols-1 justify-center gap-x-8 gap-y-5 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        }
      >
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
                  <p className="absolute top-2 left-4 text-xs text-white">
                    Autor:{" "}
                    <span className="text-primary font-sm">{post.author}</span>
                  </p>

                  <p className="absolute right-4 bottom-2 text-xs text-white">
                    Categoria:{" "}
                    <span className="text-primary font-sm">
                      {post.category}
                    </span>
                  </p>

                  <h3 className="font-headline text-primary w-full text-2xl font-semibold text-balance break-words uppercase md:text-4xl">
                    {post.title}
                  </h3>

                  <p className="mb-1 text-white">{post.description}</p>
                </div>
              }
            />
          </button>
        ))}
      </BlurFade>

      {modal && <Modal isOpen={modal} content={content} setModal={setModal} />}
    </section>
  );
};

export default Posts;
