import ModelViewer from "../components/ModelViewer";
import { handleCreatePost } from "../lib/api";
import { useGLTF } from "@react-three/drei";

// Model 3D
import brainHologram from "../assets/3d/brain_hologram.glb";

const CreatePost = () => {
  const { nodes, scene } = useGLTF(brainHologram);

  const handleFormCreatePost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    handleCreatePost(data);
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
      <div className="mt-20 grid w-full grid-cols-1 items-start justify-center md:mt-40 md:grid-cols-2">
        <div className="relative flex justify-center items-center">
          <ModelViewer scene={scene} nodes={nodes} />
        </div>

        <form
          onSubmit={handleFormCreatePost}
          className="flex flex-col items-start"
          id="formPost"
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
                  placeholder="Digite o autor(a)"
                  required
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative flex w-full flex-col pb-20">
            <div className="line"></div>
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 4</p>
              <div className="flex w-full flex-col">
                <label htmlFor="content" className="subtitle mb-1">
                  Conteúdo
                </label>
                <textarea
                  id="content"
                  name="content"
                  className="input"
                  placeholder="Digite o conteúdo"
                  required
                />
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="relative flex w-full flex-col pb-20">
            <div className="line"></div>
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 5</p>
              <div className="flex w-full flex-col">
                <label htmlFor="category" className="subtitle mb-1">
                  Conteúdo
                </label>
                <select name="category" id="category" className="input" required>
                  <option defaultValue={true} className="text-black">Selecione uma opção</option>
                  <option value="0" className="text-black">Avanços Tecnológicos</option>
                  <option value="1" className="text-black">IA na Arte e Cultura</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="relative flex w-full flex-col pb-20">
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 6</p>
              <p className="subtitle mb-5">
                Preparado para mandar o seu conhecimento para o futuro?
              </p>
              <button className="btn">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
