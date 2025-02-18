# 🚀 Configuração do Projeto

### Para inicializar o next sem configurações inicias

```
create-next-app@latest --empty
```

## 📌 Instalação das Dependências

Execute o seguinte comando no terminal para instalar todas as dependências do projeto:

```sh
npm install @tailwindcss/postcss lucide-react next postcss react react-dom tailwindcss
```

Para instalar as dependências de desenvolvimento, utilize:

```sh
npm install -D @biomejs/biome @types/node @types/react @types/react-dom typescript
```

---

## 📦 Dependências Individuais

| Pacote | Instalação | Descrição |
|--------|------------|------------|
| **@tailwindcss/postcss** | `npm install @tailwindcss/postcss` | Plugin oficial do Tailwind para integração com PostCSS. |
| **lucide-react** | `npm install lucide-react` | Conjunto de ícones otimizados para React. |
| **next** | `npm install next` | Framework React para aplicações web otimizadas. |
| **postcss** | `npm install postcss` | Processador de CSS utilizado pelo Tailwind. |
| **react** | `npm install react` | Biblioteca principal para construção de interfaces. |
| **react-dom** | `npm install react-dom` | Pacote para manipulação da árvore DOM no React. |
| **tailwindcss** | `npm install tailwindcss` | Framework CSS utilitário para estilização rápida. |
| **@biomejs/biome** | `npm install -D @biomejs/biome` | Ferramenta para linting, formatação e análise de código. |
| **@types/node** | `npm install -D @types/node` | Tipos para o Node.js. |
| **@types/react** | `npm install -D @types/react` | Tipos para o React. |
| **@types/react-dom** | `npm install -D @types/react-dom` | Tipos para o React DOM. |
| **typescript** | `npm install -D typescript` | Suporte para TypeScript no projeto. |

---

## 🔧 Configuração do Tailwind CSS

Após instalar o Tailwind, inicialize a configuração com:

```sh
npx tailwindcss init -p
```

Isso criará os arquivos `tailwind.config.js` e `postcss.config.js`.

Edite o `tailwind.config.js` para incluir os caminhos dos seus arquivos:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

Agora seu projeto está configurado e pronto para uso! 🚀

