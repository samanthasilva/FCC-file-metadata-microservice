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

### Exemplo de Uso

O usuário faz o upload de um arquivo através do formulário presente na página inicial.

A API responde com um JSON contendo as seguintes informações:
```yaml
{
  "name": "example.jpg",
  "type": "image/jpeg",
  "size": 1024
}
```



## Rotas

### Rota Principal

**GET /**

Acessa a página principal do projeto, onde o usuário pode fazer o upload de um arquivo.

### Rota de Análise de Arquivo

**POST /api/fileanalyse**

Envia o arquivo selecionado para a API, que retornará o JSON contendo as informações do arquivo.

## Estrutura do Projeto

```bash
📁 boilerplate-project-filemetadata
│
├── 📁 public
│   └── 📄 style.css        # Estilos do frontend
│
├── 📁 views
│   └── 📄 index.html       # Página principal com o formulário de upload
│
├── 📄 .env                 # Arquivo de variáveis de ambiente
├── 📄 README.md            # Documentação do projeto
├── 📄 index.js             # Arquivo principal da aplicação
└── 📄 package.json         # Dependências e scripts do projeto
