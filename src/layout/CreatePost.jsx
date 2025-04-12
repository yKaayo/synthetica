const CreatePost = () => {
  const handleFormCreatePost = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
    // handleCreatePost(data);
  };
  return (
    <section className="relative container mx-auto flex flex-col items-center px-5 py-5 md:px-0 md:py-10">
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

      {/* Form */}
      <div className="mt-20 grid w-full grid-cols-1 justify-center md:mt-40 md:grid-cols-2">
        <div className=""></div>

        <form
          onSubmit={handleFormCreatePost}
          className="flex flex-col items-start"
        >
          {/* Title */}
          <div className="relative flex w-full flex-col pb-20">
            <div className="line"></div>
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 1</p>
              <div className="flex w-full flex-col">
                <label htmlFor="title" className="subtitle mb-1">
                  Título
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="input"
                  placeholder="Digite o título"
                  required
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="relative flex w-full flex-col pb-20">
            <div className="line"></div>
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 2</p>
              <div className="flex w-full flex-col">
                <label htmlFor="description" className="subtitle mb-1">
                  Descrição
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="input"
                  placeholder="Digite a descrição"
                  required
                />
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="relative flex w-full flex-col pb-20">
          <div className="line"></div>
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 3</p>
              <div className="flex w-full flex-col">
                <label htmlFor="author" className="subtitle mb-1">
                  Autor
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="input"
                  placeholder="Digite o author"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="relative flex w-full flex-col pb-20">
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 4</p>
              <p className="subtitle mb-5">Preparado para mandar o seu conhecimento para o futuro?</p>
              <button className="btn">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
