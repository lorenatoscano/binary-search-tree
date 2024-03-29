# Árvore Binária de Busca Aumentada

Este projeto implementa uma árvore binária de busca (ABB) aumentada em **Node.js** com **TypeScript**. A ABB armazena valores inteiros e suporta operações convencionais de busca, inserção e remoção, além de outras operações específicas descritas abaixo.

## Requisitos

Para executar este projeto, você precisará instalar o **Node.js**. Siga as instruções abaixo para instalar as dependências necessárias:

1. Acesse o site oficial do Node.js em https://nodejs.org/.
2. Faça o download da versão LTS (Long Term Support) do Node.js.
3. Execute o instalador e siga as instruções na tela.
4. Verifique se a instalação foi bem sucedida com os comandos a seguir:

   ```bash
   node -v
   npm -v
   ```

Acesse [aqui](https://efficient-sloth-d85.notion.site/Instalando-o-Node-e-o-NPM-d162e2582d5c48499bc6703526912456) um tutorial mais detalhado de como instalar o Node em diferentes sistemas operacionais.

## Operações suportadas

A ABB aumentada suporta as seguintes operações:

- Que alteram a estrutura da árvore:

  - Inserir
  - Remover

- Que acessam elementos da árvore:

  - Buscar por um valor
  - Obter um elemento pela sua posição na ordem simétrica
  - Obter a posição de um elemento na ordem simétrica pelo seu valor

- Que verificam informações sobre a árvore:

  - Se é cheia
  - Se é completa
  - Mediana
  - Média dos valores dos nós

- Que percorrem a árvore:

  - Pré-ordem
  - Ordem simétrica
  - Pós-ordem

- Que imprimem a árvore

  - No formato com linhas:

  ```
  5---------------------------------
          3-------------------------
          8-------------------------
                  6-----------------
                  9-----------------
  ```

  - No formato com parênteses:

  ```
  (5 (3) (8 (6) (9)))
  ```

## Como testar

Para rodar o projeto, siga os passos abaixo:

1. Clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/lorenatoscano/binary-search-tree
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd binary-search-tree
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Execute o projeto:

   ```bash
   npm run dev
   ```

Ao executar o projeto, ele lerá os arquivos de entrada e realizará as operações especificadas. Os resultados serão exibidos no terminal ou prompt de comando.
