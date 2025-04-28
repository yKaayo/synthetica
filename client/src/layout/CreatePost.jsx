import ModelViewer from "../components/ModelViewer";
import { handleCreatePost } from "../lib/api";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";

// Model 3D
import brainHologram from "../assets/3d/brain_hologram.glb";

// Components
import Modal from "../components/Modal";
import Dropzone from "../components/Dropzone";
import TextBlurFade from "../components/TextBlurFade";

// Image
import gradientImg from "../assets/images/gradient.svg";

const CreatePost = () => {
  const { scene } = useGLTF(brainHologram);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload = (file) => {
    setSelectedImage(file);
  };

  const handleFormCreatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    await handleCreatePost(formData);
    setIsSuccess(true);
    setIsModalOpen(true);
    e.target.reset();
    setSelectedImage(null);
  };

  return (
    <section id="createPost" className="section">
      <img
        src={gradientImg}
        className="absolute top-10 right-[5%] w-[40%] opacity-30 blur-[88px]"
        alt="Gradiente em tons azúis"
      />

      <TextBlurFade duration={0.4} delay={0.4}>
        <p className="paragraph mb-5">O futuro está em suas mãos</p>
      </TextBlurFade>

      <TextBlurFade duration={0.4}>
        <h3 className="title text-center dark:text-white">
          TRAGA O SEU CONHECIMENTO <br /> PARA O FUTURO COM APENAS 7 PASSOS
          <span className="title-shadow">
            TRAGA O SEU CONHECIMENTO <br /> PARA O FUTURO COM APENAS 7 PASSOS
          </span>
        </h3>
      </TextBlurFade>

      <TextBlurFade duration={0.4} delay={0.4}>
        <p className="subtitle mt-3 text-center">
          FAÇA PARTE DO CONTEÚDO ESTRUTURADO ATUALIZADO E ALINHADO AS TENDÊNCIAS
          DO MERCADO
        </p>
      </TextBlurFade>

      {/* Form */}
      <div className="relative mt-20 grid w-full grid-cols-1 items-start justify-center md:mt-40 md:grid-cols-2">
        <div className="absolute flex h-full w-full items-center justify-center md:relative md:w-auto">
          <ModelViewer scene={scene} />
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
                  Categoria
                </label>
                <select
                  name="category"
                  id="category"
                  className="input"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">
                    Selecione uma opção
                  </option>
                  <option value="Avanços Tecnológicos" className="text-black">
                    Avanços Tecnológicos
                  </option>
                  <option value="IA na Arte e Cultura" className="text-black">
                    IA na Arte e Cultura
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Dropzone */}
          <div className="relative flex w-full flex-col pb-20">
            <div className="line"></div>
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 6</p>
              <div className="flex w-full flex-col">
                <label className="subtitle mb-1">Imagem</label>

                <Dropzone onFileUpload={handleUpload} />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="relative flex w-full flex-col pb-20">
            <div className="circle"></div>

            <div className="flex flex-col items-start ps-8">
              <p className="dark:text-white">Passo 7</p>
              <p className="subtitle mb-5">
                Preparado para mandar o seu conhecimento para o futuro?
              </p>
              <button className="btn">Enviar</button>
            </div>
          </div>
        </form>
      </div>

      <Modal
        isOpen={isModalOpen}
        setModal={setIsModalOpen}
        showSuccess={isSuccess}
        textSuccess="Post criado com sucesso!"
      />
    </section>
  );
};

export default CreatePost;
