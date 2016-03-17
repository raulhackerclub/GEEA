---
layout: post
title:  "Instalando e Configurando Arduino no Ubuntu Linux"
date:   2016-03-17 15:32:25  
original:                    
author:
    name: Angelo Brandão     
    mail: angelobms@gmail.com    
    github: angelobms
    blog:                    
    twitter: @angelobms                
    facebook:                
categories: "Arduino"  
tags:                        
---

Instalando e Configurando Arduino no Ubuntu Linux

Este artigo tem como finalidade explicar como realizar a instalação e  configuração do software `Arduino IDE` no Ubuntu Linux ou qualquer outra distribuuição linux baseada em Debian.

Instalando.

O primeiro passo a ser realizado é conectar o Arduino na porta USB do seu computador utilizando um cabo USB A - B. Após conectar o Arduino verifique se o LED Power (PWD) está acesso. Também se faz necessário verificar se a placa foi reconhecida pelo Ubuntu através do comando `lsub`, conforme demostrado logo abaixo.

`$ lsub`

Se sua placa foi reconhecida pelo sistema, execute os comando a seguir para realizara a instalação do Arduino IDE:

`$ sudo apt-get update`
`$ sudo apt-get install arduino`

O apt-get irá fazer a atualização do repositório e logo depois a instalação.

Configurando.

Abra o Arduino IDE apartir do lançador do Ubuntu digitando `arduino` na caixa de pesquisa e clicando icone conforme demostrado na imagem a seguir.

![screenshot_arduino_01]({{ site.url }}/assets/screenshot_arduino_01.png)

O Arduino IDE irá solicitar que seu usuário esteja no grupo "diaout" para que seja possivel enviar código ao Arduino. Clique em Add na caixa de diálogo que surge para executar essa operação.

![screenshot_arduino_02]({{ site.url }}/assets/screenshot_arduino_02.png)

Logo após digite sua senha para autenticação e clique em Autenticar.

![screenshot_arduino_03]({{ site.url }}/assets/screenshot_arduino_03.png)

Clique no menu Tools, submenu Board, e então selecione sua placa na lista suspensa.

![screenshot_arduino_04]({{ site.url }}/assets/screenshot_arduino_04.png)

 Clique no menu Tools, submenu Serial Port, e então selecione a porta COM (emulada) onde o arduino está conectado. Caso não seja possível selecionar uma porta reinicie o sistema e tente novamente.

![screenshot_arduino_05]({{ site.url }}/assets/screenshot_arduino_04.png)

Pronto! Agora o Arduino está Instalado e configrado corretamente. O proximo passo é desenvolver um projeto e carregá-lo no microcontrolador.
