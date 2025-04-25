import { useState, useEffect } from "react";
import { handleUpdatePost } from "../lib/api";

// Components
import Dropzone from "./Dropzone";

// Icon
import checkIcon from "../assets/icons/check.svg";

const EditPostModal = ({ post, onSave, showPostEdited }) => {
  const [editedPost, setEditedPost] = useState(post);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setEditedPost(post);
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleSave = async () => {
    const formData = new FormData();

    formData.append("title", editedPost.title);
    formData.append("description", editedPost.description);
    formData.append("author", editedPost.author);
    formData.append("content", editedPost.content);
    formData.append("category", editedPost.category);

    if (selectedImage?.file) {
      formData.append("image", selectedImage.file);
    }

    await handleUpdatePost(post.id, formData);

    onSave();
    showPostEdited();
  };

  const handleUpload = (file, previewUrl) => {
    setSelectedImage({
      file,
      previewUrl,
    });
  };

  return (
    <div className="flex flex-col items-center">
      {selectedImage ? (
        <img
          src={selectedImage?.previewUrl}
          className="absolute top-0 left-0 z-[0] h-[120px] w-full rounded-t-md object-cover md:h-[200px]"
          alt=""
        />
      ) : (
        <img
          src={`http://127.0.0.1:8000${post.image_url}`}
          className="absolute top-0 left-0 z-[0] h-[120px] w-full rounded-t-md object-cover md:h-[200px]"
          alt=""
        />
      )}

      <div className="absolute top-2 left-0 z-[2] h-fit w-full px-3">
        <Dropzone onFileUpload={handleUpload} showPreview={false} />
      </div>

      <div className="absolute top-0 left-0 z-[1] h-[120px] w-full rounded-t-md bg-black/50 md:h-[200px]">
        <div className="absolute bottom-1 left-0 flex w-full gap-2 px-2">
          <input
            id="title"
            type="text"
            name="title"
            onChange={handleChange}
            className="title w-full rounded-md border border-gray-200 break-words focus-visible:outline-0"
            value={editedPost.title}
          />
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
              src={checkIcon}
              className="size-8 rounded-full border-2 border-green-500 bg-green-500 p-1 duration-300 hover:scale-105 hover:bg-green-500/40"
              alt="Salvar"
            />
          </button>
        </div>

        <input
          onChange={handleChange}
          type="text"
          name="description"
          className="font-headline border border-gray-500 rounded-md mt-2 w-[calc(100%-44px)] text-lg font-medium text-balance break-words text-black/75 focus-visible:outline-0 md:text-3xl mb-2"
          value={editedPost.description}
        />

        <textarea
          className="h-full w-full border border-gray-500 rounded-md flex-1 resize-none text-start text-black/75 focus-visible:outline-0 md:text-2xl"
          name="content"
          onChange={handleChange}
          value={editedPost.content}
        />
      </div>
    </div>
  );
};

export default EditPostModal;
