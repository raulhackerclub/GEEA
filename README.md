# Site do GEEA

## Contribuindo com o front-end e artigos

* Faça um fork do repositório
* Cria uma branch para sua contribuição: `git checkout -b sua-contribuicao`
* Commit as mudanças: `git commit -am 'Mensagem sobre a mudança'`
* Suba as alterações: `git push origin sua-contribuicao`
* Manda um pull request

## Escrevendo um novo posts

Para escrever um post siga os passos:

* Faça um fork do repositório
* Cria uma branch para seu post: `git checkout -b nome_do_post`
* Crie um arquivo na pasta `_posts` com o nome `ANO-MES-DIA-titulo.markdown` o formato da data é YYYY-MM-DD
* Commit o post: `git commit -am 'nome do post'`
* Suba o post: `git push origin nome_do_post`
* Manda um pull request

## Formato do post

```markdown
---
layout: post
title:  "Titulo do post"
date:   2016-02-07 15:32:25  // Data e hora do post
original:                    // Link do post original, caso tenha replicado
author: 
    name: Nome Sobrenome     // Nome do autor do post
    mail: nome@domain.com    // E-mail do autor
    github: usuário
    blog:                    // Endereço do site/blog
    twitter:                 // Conta no Twitter
    facebook:                // Conta no Facebook  
categories: "Sem categoria"  // Categorias do post separadas por virgula
tags:                        // Tags
---

Texto do post
```
