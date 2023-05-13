# Árvore Binária de Busca Aumentada

Este projeto implementa uma árvore binária de busca (ABB) aumentada em **Node.js** com **TypeScript**. A ABB armazena valores inteiros e suporta operações convencionais de busca, inserção e remoção, além de outras operações específicas descritas abaixo.

## Requisitos

Para executar este projeto, você precisará instalar o **Node.js** e o **Yarn**. Siga as instruções abaixo para instalar as dependências necessárias:

### Instalando Node.js

1. Acesse o site oficial do Node.js em https://nodejs.org/.
2. Faça o download da versão LTS (Long Term Support) do Node.js.
3. Execute o instalador e siga as instruções na tela.
4. Verifique se a instalação foi bem sucedida com os comandos a seguir:

   ```bash
   node -v
   npm -v
   ```

### Instalando Yarn

1. Abra o terminal ou prompt de comando e execute o comando:

   ```bash
   npm install -g yarn
   ```

2. Verifique se a instalação do Yarn foi bem sucedida com o comando a seguir:

   ```bash
   yarn -v
   ```

## Operações suportadas

A ABB aumentada suporta as seguintes operações:

- getHeight
- getElementAtPositionInOrder
- getPositionInOrder
- getMedianElement
- getAverageValue
- isFullBinaryTree
- isCompleteBinaryTree
- preOrderTraversal
- inOrderTraversal
- postOrderTraversal
- printTree

## Como testar

Para testar o projeto, siga os passos abaixo:

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
   yarn install
   ```

4. Compile o projeto:

   ```bash
   yarn build
   ```

5. Execute o projeto:

   ```bash
   yarn start
   ```

Ao executar o projeto, ele lerá os arquivos de entrada e realizará as operações especificadas. Os resultados serão exibidos no terminal ou prompt de comando.

### Checklist

- [x] Criar classes base
- [x] Fazer README
- [x] Implementar printTree
- [x] Implementar leitura do arquivo de comandos
- [x] Implementar leitura e criação da árvore
- [x] Implementar insert
- [ ] Implementar remove
- [x] Implementar getHeight
- [ ] Implementar getElementAtPositionInOrder
- [ ] Implementar getPositionInOrder
- [ ] Implementar getMedianElement
- [ ] Implementar getAverageValue
- [x] Implementar isFullBinaryTree
- [ ] Implementar isCompleteBinaryTree
- [ ] Implementar preOrderTraversal
- [ ] Implementar inOrderTraversal
- [ ] Implementar postOrderTraversal
