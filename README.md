# Synthetica

Synthetica é uma plataforma de blog futurística que explora e discute o impacto da Inteligência Artificial na arte e cultura. O projeto permite a criação, edição e visualização de artigos sobre temas relacionados à IA, com suporte para imagens e formatação de texto.

## 🚀 Tecnologias Utilizadas

### Backend
- **FastAPI**: Framework web moderno e rápido para construção de APIs em Python
- **Pydantic**: Validação de dados e gerenciamento de modelos
- **Uvicorn**: Servidor ASGI para execução da aplicação

### Frontend
- **React.js**: Biblioteca JavaScript para construção de interfaces
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **Lottie**: Biblioteca para uso de animações feitas no After Effects
- **GSAP**: Biblioteca para construções de animações

## 📋 Pré-requisitos

- Python 3.8 ou superior
- Node.js 14.x ou superior
- npm ou yarn
- Git

## 🔧 Instalação

### Backend

1. Clone o repositório:
```bash
git clone https://github.com/yKaayo/synthetica.git
cd synthetica
```

2. Crie e ative um ambiente virtual Python:
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
```

3. Instale as dependências do backend:
```bash
cd server
pip install -r requirements.txt
```

4. Execute o servidor:
```bash
uvicorn main:app --reload
```

### Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 📦 Estrutura do Projeto

```
synthetica/
├── server/                 # Backend
│   ├── main.py            # Ponto de entrada da API
│   ├── requirements.txt   # Dependências Python
│   └── uploads/           # Diretório de upload de imagens
└── frontend/              # Frontend
    ├── src/
    │   ├── components/    # Componentes Vue
    │   ├── views/         # Páginas
    │   └── App.vue        # Componente principal
    └── package.json       # Dependências Node.js
```

## 🛠️ Funcionalidades

- Criação, edição e remoção de posts
- Upload de imagens
- Categorização de posts
- Interface responsiva e moderna

## 🔒 Variáveis de Ambiente

O projeto utiliza as seguintes variáveis de ambiente:

```env
# Backend
UPLOAD_DIR=uploads
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
