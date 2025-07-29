const urlApi = "http://127.0.0.1:8000";

export async function handleCreatePost(formData) {
  try {
    const res = await fetch(`${urlApi}/post`, {
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

export async function handleGetPosts() {
  const res = await fetch(`${urlApi}/posts`);
  const data = await res.json();

  return data;
}

export async function handleUpdatePost(id, formData) {
  const res = await fetch(`${urlApi}/post/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Erro ao atualizar post");
  }

  return await res.json();
}

export async function handleDeletePost(id) {
  const res = await fetch(`${urlApi}/post/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res}`);
  }

  return res.json();
}
