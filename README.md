# Metadados de Arquivo - Microserviço de API

Este é um projeto de **microserviço de metadados de arquivo**, que faz parte dos projetos exigidos pelo **FreeCodeCamp** na seção de **APIs e Microservices**. O objetivo deste projeto é permitir que os usuários façam upload de um arquivo e recebam de volta as informações básicas sobre o arquivo, como o nome, tipo e tamanho.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Multer** (middleware para lidar com upload de arquivos em `multipart/form-data`)
- **Cors**

## Funcionalidades

1. O usuário pode fazer upload de um arquivo através do formulário fornecido na página.
2. Após o upload, o servidor retorna um JSON contendo:
   - **nome do arquivo** (`name`)
   - **tipo do arquivo** (`type`)
   - **tamanho do arquivo** (`size`) em bytes
