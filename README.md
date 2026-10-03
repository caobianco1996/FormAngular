# Formulário Angular — template-driven forms

Exemplo didático Angular de formulário template-driven com validação de e-mail e sugestão de nome. A aplicação fica na pasta form/.

## Requisitos e execução

- Node.js compatível com Angular CLI 14
- npm

~~~sh
cd form
npm ci
npm start
~~~

Abra http://localhost:4200.

## Build e testes

Ainda dentro de form/:

~~~sh
npm run build
npm test
~~~

O teste usa Karma e pode exigir um navegador compatível. Na verificação manual, envie o formulário vazio, informe um e-mail inválido e depois um válido para observar as validações e a sugestão de nome.

## Limitações

Os campos e respostas são apenas fictícios e ficam no navegador. A resposta da pergunta demonstrativa não é armazenada nem mostrada após o envio. Não digite senhas, respostas de recuperação ou dados pessoais reais. Autenticação e envio para servidor não estão implementados.