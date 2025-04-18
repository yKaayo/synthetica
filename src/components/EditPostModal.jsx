import { useState, useEffect } from "react";
import { handleUpdatePost } from "../lib/api";

// Icon
import editIcon from "../assets/icons/edit.svg";
import pencilIcon from "../assets/icons/pencil.svg";

const EditPostModal = ({ post, onSave, showPostEdited }) => {
  const [editedPost, setEditedPost] = useState(post);

  useEffect(() => {
    setEditedPost(post);
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleSave = async () => {
    await handleUpdatePost(post.id, {
      title: editedPost.title,
      description: editedPost.description,
      content: editedPost.content,
    });

    onSave();

    showPostEdited();
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={`http://127.0.0.1:8000${post.image_url}`}
        className="absolute top-0 left-0 z-[1] h-[120px] w-full rounded-t-md object-cover md:h-[200px]"
        alt=""
      />

      <div className="absolute top-0 left-0 z-[2] h-[120px] w-full rounded-t-md bg-black/50 md:h-[200px]">
        <div className="absolute bottom-1 left-2 flex gap-2">
          <input
            id="title"
            type="text"
            name="title"
            onChange={handleChange}
            className="title w-full focus-visible:outline-0"
            value={editedPost.title}
          />
          <label htmlFor="" className="">
            <img
              src={pencilIcon}
              alt="Editar o título"
              className="bg-red-6 size-5"
            />
          </label>
        </div>
      </div>

      <div className="relative mt-[76px] flex h-full min-h-[calc(90vh-208px)] w-full flex-col overflow-y-auto md:mt-[160px] md:min-h-[calc(90vh-288px)]">
        <div className="absolute top-2 right-1 flex items-center gap-2">
          <button
            onClick={() => {
              handleSave();
            }}
            className="relative cursor-pointer"
          >
            <img
              src={editIcon}
              className="size-7 rounded-full border-2 border-green-500 bg-green-500 p-1 duration-300 hover:scale-105 hover:bg-green-500/40"
              alt="Salvar"
            />
          </button>
        </div>

        <input
          onChange={handleChange}
          type="text"
          name="description"
          className="font-headline mt-2 w-full pe-12 text-lg font-medium text-balance break-words text-black/75 focus-visible:outline-0 md:text-3xl"
          value={editedPost.description}
        />

        <textarea
          className="h-full w-full flex-1 resize-none text-start text-black/75 focus-visible:outline-0 md:text-2xl"
          name="content"
          onChange={handleChange}
          value={editedPost.content}
        />
      </div>
    </div>
  );
};

export default EditPostModal;
