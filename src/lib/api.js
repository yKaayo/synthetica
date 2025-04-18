// Create Post
export async function handleCreatePost(formData) {
  try {
    const res = await fetch("http://127.0.0.1:8000/post", {
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

// Get All Posts
export async function handleGetPosts() {
  const res = await fetch("http://127.0.0.1:8000/posts");
  return res.json();
}

// Update a Post
export async function handleUpdatePost(id, formData) {
  const res = await fetch(`http://127.0.0.1:8000/post/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });

  if (!res.ok) {
    throw new Error('Erro ao atualizar post');
  }

  return await res.json();
}

// Delete a Post
export async function handleDeletePost(id) {
  const res = await fetch(`http://127.0.0.1:8000/post/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res}`);
  }

  return res.json();
}
