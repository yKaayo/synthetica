from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional
import os
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://synthetica-kaayo.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"]
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

posts = [
    {
        "id": 1,
        "title": "Revolução Criativa ou Ameaça à Autenticidade?",
        "description": "A IA está transformando a maneira como criamos e consumimos arte e cultura",
        "author": "Kevyn",
        "content": 'A relação entre arte e tecnologia sempre foi intensa—desde a invenção da fotografia, que revolucionou a pintura, até o surgimento do digital, que redefiniu a produção cultural. Hoje, a Inteligência Artificial (IA) emerge como uma das forças mais disruptivas no cenário artístico, desafiando noções tradicionais de autoria, originalidade e criatividade. Se por um lado a IA abre portas para novas formas de expressão, por outro, levanta debates éticos e preocupações sobre o papel do artista humano. Este artigo explora como a inteligência artificial está moldando a arte e a cultura, suas implicações e o que o futuro pode reservar para essa relação complexa. A IA está transformando a arte e a cultura de diversas formas. Na geração de imagens e arte visual, ferramentas como DALL-E, MidJourney e Stable Diffusion permitem que usuários criem imagens realistas ou surrealistas a partir de simples descrições textuais. Artistas digitais já utilizam essas plataformas para esboçar ideias rapidamente, explorar estilos artísticos e produzir ilustrações comerciais. Em 2023, uma obra gerada por IA venceu um concurso de arte tradicional no Colorado, gerando polêmica sobre o que realmente define "arte humana". Na música e composição, sistemas como OpenAI’s Jukebox, AIVA e Boomy compõem músicas originais em diversos gêneros, sendo usados para produção de trilhas sonoras, remixagem de clássicos e personalização de experiências musicais. Artistas como Grimes e Holly Herndon já abraçaram a IA em seus trabalhos, enquanto outros temem a desvalorização da composição humana. Na literatura e roteiros, modelos de linguagem como ChatGPT, Claude e Google Gemini estão sendo usados para escrever poesias e contos, auxiliar roteiristas e traduzir obras. Em 2024, um romance escrito com ajuda de IA quase ganhou um prêmio literário no Japão, reacendendo o debate sobre originalidade. A IA também atua na preservação e restauração cultural, reconstruindo obras danificadas, recriando vozes e performances históricas e digitalizando acervos. Os grandes debates em torno da IA na arte incluem a questão da autoria, a desvalorização do trabalho artístico e os vieses e limitações criativas. Se uma imagem é criada por IA a partir do trabalho de milhares de artistas, quem é o verdadeiro autor? Plataformas como DeviantArt e ArtStation já enfrentaram protestos de artistas contra o treinamento de IAs com suas obras sem consentimento. Empresas podem optar por artes geradas por IA em vez de contratar humanos, mas também surgem novas profissões, como "engenheiros de prompt". A IA reproduz padrões existentes, podendo perpetuar estereótipos e faltando intencionalidade emocional, algo que a arte humana carrega naturalmente. O futuro da IA na arte pode ser de coexistência ou substituição. A IA não precisa ser vista como rival, mas como uma ferramenta que amplifica a criatividade, democratiza o acesso e desafia a indústria a repensar direitos autorais e valorização humana. O caminho ideal seria uma colaboração onde a IA auxilia, mas a essência da arte continue sendo humana—cheia de imperfeições, emoções e histórias únicas. Em conclusão, a inteligência artificial está reescrevendo as regras da arte e da cultura, mas não sem controvérsias. Enquanto alguns veem nela uma revolução criativa, outros temem a erosão da autenticidade. O desafio será equilibrar inovação com ética, garantindo que a tecnologia sirva para expandir—e não esvaziar—a expressão artística. E você? Acredita que a IA é uma aliada ou um risco para a cultura?',
        "category": "IA na Arte e Cultura",
        "image_url": '/uploads/post1.webp'
    },
    {
        "id": 2,
        "title": "O Futuro é Agora e Ele é Humano",
        "description": "",
        "author": "Kevyn",
        "content": "Mesmo com inteligência artificial, o que nos move são emoções: felicidade, inspiração e propósito. No Portal Synthetica, você compartilha conhecimento e deixa um legado. Imagine seus filhos, netos e pessoas do futuro usando ideias que nasceram de você.",
        "category": "Avanços Tecnológicos",
        "image_url": '/uploads/post2.webp'
    },
    {
        "id": 3,
        "title": "É um site, Mas não é um Site Qualquer",
        "description": "Aqui você compartilha o que viveu, o que aprendeu, o que sentiu",
        "author": "Kevyn",
        "content": "Com apenas 7 passos, você transforma o seu conhecimento em um legado para o futuro. O futuro está nas suas mãos. Só você pode trazer a sua experiência para as próximas gerações.",
        "category": "Avanços Tecnológicos",
        "image_url": '/uploads/post3.webp'
    }
    ]

class PostBase(BaseModel):
    title: str
    description: str
    author: str
    content: str
    category: str
    image_url: Optional[str] = None

@app.post("/post")
async def create_post(
    title: str = Form(...),
    description: str = Form(...),
    author: str = Form(...),
    content: str = Form(...),
    category: str = Form(...),
    image: UploadFile = File(...)
):

    file_ext = image.filename.split(".")[-1]
    filename = f"{uuid.uuid4()}.{file_ext}"
    filepath = os.path.join(UPLOAD_DIR, filename)
        
    with open(filepath, "wb") as buffer:
        buffer.write(await image.read())
        
        image_url = f"/uploads/{filename}"

    new_id = posts[-1]["id"] + 1 if posts else 1
    new_post = {
        "id": new_id,
        "title": title,
        "description": description,
        "author": author,
        "content": content,
        "category": category,
        "image_url": image_url
    }
    
    posts.append(new_post)
    
    return {
        "message": "Post criado com sucesso!",
        "post": new_post
    }

@app.get("/posts")
def get_all_posts():
    return posts

@app.put("/post/{post_id}")
async def update_post(
    post_id: int,
    title: str = Form(...),
    description: str = Form(...),
    author: str = Form(...),
    content: str = Form(...),
    category: str = Form(...),
    image: Optional[UploadFile] = File(None)
):
    post_to_update = next((p for p in posts if p["id"] == post_id), None)
    
    if image:
        if post_to_update["image_url"]:
            old_filename = post_to_update["image_url"].split("/")[-1]
            old_filepath = os.path.join(UPLOAD_DIR, old_filename)
            if os.path.exists(old_filepath):
                os.remove(old_filepath)
        
        file_ext = image.filename.split(".")[-1]
        filename = f"{uuid.uuid4()}.{file_ext}"
        filepath = os.path.join(UPLOAD_DIR, filename)
        
        with open(filepath, "wb") as buffer:
            buffer.write(await image.read())
        
        post_to_update["image_url"] = f"/uploads/{filename}"
    
    post_to_update["title"] = title
    post_to_update["description"] = description
    post_to_update["author"] = author
    post_to_update["content"] = content
    post_to_update["category"] = category
    
    return {"message": "Post atualizado com sucesso", "post": post_to_update}

@app.delete("/post/{post_id}")
def delete_post(post_id: int):
    post_index = next((i for i, p in enumerate(posts) if p["id"] == post_id), None)
    
    if post_index is not None:
        deleted_post = posts.pop(post_index)
        return {
            "message": "Post deletado com sucesso",
            "deleted_post": deleted_post
        }
    return {"message": "Post não encontrado"}
