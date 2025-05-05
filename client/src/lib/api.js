// ----------------
// Create Post
export async function handleCreatePost(formData) {
  try {
    const res = await fetch("https://synthetica-kaayo.up.railway.apppost", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Erro no servidor:", err);
      throw new Error(err.message || "Erro ao criar post");
    }

    return await res.json();
  } catch (err) {
    console.error("Erro na requisição:", err);
    throw err;
  }
}

// Os dados estão sendo pegos do form no CreatePost.jsx e são tratados no handleCreatePost()
// const handleFormCreatePost = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);

//   if (selectedImage) {
//     formData.append("image", selectedImage);
//   }

//   await handleCreatePost(formData);
//   setIsSuccess(true);
//   setIsModalOpen(true);
//   e.target.reset();
//   setSelectedImage(null);
// }
// ----------------

// ----------------
// Get All Posts
export async function handleGetPosts() {
  const res = await fetch("https://synthetica-kaayo.up.railway.appposts");
  return res.json();
}

// Os dados retornados da api são usados no Posts.jsx para renderizar os posts através dessa função junto ao useState
// const [posts, setPosts] = useState([]);
// async function fetchPosts() {
//   const postsData = await handleGetPosts();
//   setPosts(postsData);
// }
// ----------------

// ----------------
// Update a Post
export async function handleUpdatePost(id, formData) {
  const res = await fetch(`https://synthetica-kaayo.up.railway.apppost/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Erro ao atualizar post');
  }

  return await res.json();
}

// Para editar é chamado a função no EditPostModal.jsx
// const handleSave = async () => {
//   const formData = new FormData();

//   formData.append("title", editedPost.title);
//   formData.append("description", editedPost.description);
//   formData.append("author", editedPost.author);
//   formData.append("content", editedPost.content);
//   formData.append("category", editedPost.category);

//   if (selectedImage?.file) {
//     formData.append("image", selectedImage.file);
//   }

//   await handleUpdatePost(post.id, formData);

//   onSave();
//   showPostEdited();
// }
// ----------------

// ----------------
// Delete a Post
export async function handleDeletePost(id) {
  const res = await fetch(`https://synthetica-kaayo.up.railway.apppost/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res}`);
  }

  return res.json();
}

// Para deletar é chamado a função no Posts.jsx
// async function handleDeleteConfirmed(id) {
//   await handleDeletePost(id);

//   setModal(false);
//   fetchPosts();

//   // Mostra o modal com a animação de sucesso para deleção
//   setContent("");
//   setSuccessMessage("Post deletado com sucesso!");
//   setModal(true);
// }
// ----------------
