import { useState } from "react";

const Dropzone = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    // Cria preview da imagem
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      onFileUpload(file); // Passa o arquivo para o componente pai
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`rounded-md border-2 border-dashed p-5 text-center transition-colors ${
        isDragging
          ? "border-blue-500 bg-blue-50"
          : "border-white hover:border-gray-400"
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept="image/*"
        onChange={handleFileInput}
      />

      {preview ? (
        <div className="mb-4">
          <img
            src={preview}
            alt="Preview"
            className="mx-auto max-h-48 rounded-md"
          />
        </div>
      ) : (
        <p className="mb-3 text-sm text-white">
          {isDragging ? (
            "Solte a imagem aqui"
          ) : (
            <>
              <span className="text-primary font-medium">
                Clique para enviar
              </span>
              ou arraste e solte
              <br />
              PNG ou JPG (máx. 5MB)
            </>
          )}
        </p>
      )}

      <button
        type="button"
        onClick={() => document.getElementById("file-upload").click()}
        className="btn"
      >
        {preview ? "Trocar imagem" : "Selecionar arquivo"}
      </button>
    </div>
  );
};

export default Dropzone;
