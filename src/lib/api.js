// Create Post
export async function handleCreatePost(formData) {
  try {
    const res = await fetch("http://127.0.0.1:8000/post", {
      method: "POST",
      body: formData, // Não usa JSON.stringify!
      // Não defina Content-Type manualmente - o navegador fará isso automaticamente
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Erro no servidor:", err);
      throw new Error(err.message || "Erro ao criar post");
    }

    return await res.json();
  } catch (err) {
    console.error("Erro na requisição:", err);
    throw err; // Propaga o erro para ser tratado no componente
  }
}

// Get All Posts
export async function handleGetPosts() {
  const res = await fetch("http://127.0.0.1:8000/posts");
  return res.json();
}

// Update a Post

// Delete a Post
