# Árvore AVL

Este projeto implementa uma árvore AVL em **Node.js** com **TypeScript**. A árvore AVL armazena valores inteiros e suporta operações convencionais de busca, inserção e remoção, além de outras operações específicas descritas abaixo. Durante as operações de inserção e exclusão, a árvore é reconstruída para manter o balanceamento.

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

A árvore AVL suporta as seguintes operações:

- Que alteram a estrutura da árvore:

  - Inserir: `INSIRA 10`
  - Remover: `REMOVA 10`

- Que acessam elementos da árvore:

  - Buscar por um valor: `BUSCAR 10`

- Que verificam informações sobre a árvore:

  - Se está balanceada: `BALANCEADA`
  - Se é cheia: `CHEIA`
  - Se é completa: `COMPLETA`

- Que percorrem a árvore:

  - Pré-ordem: `PREORDEM`
  - Ordem simétrica: `ORDEMSIMETRICA`
  - Pós-ordem: `POSORDEM`

- Que imprimem a árvore

  - No formato com linhas:
    `IMPRIMA 1`

  ```
  5---------------------------------
          3-------------------------
          8-------------------------
                  6-----------------
                  9-----------------
  ```

  - No formato com parênteses: `IMPRIMA 2`

  ```
  (5 (3) (8 (6) (9)))
  ```

## Como testar

Para rodar o projeto, siga os passos abaixo:

1. Instale as dependências do projeto:

   ```bash
   npm install
   ```

2. Execute o projeto:

   ```bash
   npm run dev
   ```

Ao executar o projeto, ele lerá os arquivos de entrada e realizará as operações especificadas. Os resultados serão exibidos no terminal ou prompt de comando.

> Para experimentar o programa com diferentes valores na árvore, modifique o arquivo `input/tree.txt` e ajuste o arquivo `input/commands.txt` para personalizar as operações que serão executadas. Após realizar as alterações, rode o projeto novamente para verificar os resultados.
