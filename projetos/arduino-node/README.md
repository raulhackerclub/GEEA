# arduino-node
Arduino with node.js

## Links

* [Johnny Five](http://johnny-five.io/) - [GitHub](https://github.com/rwaldron/johnny-five)
* [NodeJS](https://nodejs.org/)

## Instalação do NodeJS

O node é um interpretador javascript que utiliza o V8 da Google. Veja mais em: [NodeJs.org](https://nodejs.org/)

* Para instalar execute os seguintes comados abaixo em seu terminal:
```shell
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

[Veja mais...](https://nodejs.org/en/download/package-manager/)

## Instalção do Johnny Five

O Johnny Five é uma biblioteca do NodeJS utilizada para controlar o Arduino.
Para fazer a instalação utilizaresmos o `npm` que é o gerenciador de bibliotecas do node já vindo instalado por padrão com o node.
Utile o seguinte comando para instalar o Johnny Five.

```
npm install johnny-five
```

## Instalação do Firmata

O [Firmata](http://www.firmata.org/wiki/Main_Page) é o protocolo utilizado pela biblioteca Johnny Five para controlar o arduino.

Para fazer a instalção do protocolo no arduino faça o seguinte:

* Abra a IDE do Arduino
* Vá em `File > Examples > Firmata > StandardFirmata` para carregar o código-fonte do protocolo.
* Faça o **Upload** para o seu arduino
