# Projeto: Situação do Aluno

Este projeto foi desenvolvido em **React** para calcular a média das notas de um aluno e exibir sua situação (Aprovado ou Reprovado). O usuário insere o nome e as três notas de um aluno, e ao clicar no botão "Calcular Média", um card será exibido mostrando se o aluno está aprovado (média ≥ 6) ou reprovado (média < 6).

## Funcionalidades

- **Entrada de Dados:**
  - Nome do aluno.
  - Três notas, cada uma variando de 0 a 10.

- **Cálculo da Média:**
  - A média aritmética das três notas é calculada quando o usuário clica em "Calcular Média".

- **Exibição da Situação:**
  - Se a média for maior ou igual a 6, o aluno é considerado "Aprovado".
  - Se a média for menor que 6, o aluno é considerado "Reprovado".

## Estrutura dos Componentes

### `SituacaoAluno.js`
Este é o componente principal que gerencia o estado dos inputs (nome e notas) e exibe o card com a situação do aluno após o cálculo da média.

- **Estados:**
  - `nomeAluno`: Armazena o nome do aluno.
  - `nota1`, `nota2`, `nota3`: Armazenam as notas do aluno.
  - `media`: Armazena a média calculada.
  - `mostrarCard`: Controla a exibição do card após o cálculo da média.

- **Funções:**
  - `handleNomeChange`: Atualiza o estado do nome conforme o usuário digita.
  - `handleNotaChange`: Atualiza as notas com base no valor digitado pelo usuário.
  - `calcularMedia`: Calcula a média das três notas e atualiza o estado para exibir o card.

### `Card.js`
Este componente reutilizável exibe o card com o nome do aluno e sua situação (Aprovado ou Reprovado) com base na média.

- **Propriedades (Props):**
  - `titulo`: O nome do aluno.
  - `situacao`: A situação do aluno (aprovado/reprovado).

## Estilização

A estilização é feita em arquivos CSS importados, com classes aplicadas para layout e formatação dos elementos de entrada, botões e o card.

### `SituacaoAluno.css`
Este arquivo estiliza a página principal, organizando os inputs, botões e o card.

## Instalação e Execução

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instalar dependências:**

   ```bash
   npm install
   ```

3. **Executar o projeto:**

   ```bash
   npm start
   ```

## Exemplo de Uso

1. Digite o nome do aluno.
2. Insira as três notas.
3. Clique no botão "Calcular Média".
4. O card será exibido com o nome do aluno e sua situação (Aprovado ou Reprovado) com base nas notas inseridas.

---