# Apreendendo DOCKER com Node
[![CircleCI](https://circleci.com/gh/alexandrejuk/docker-studies.svg?style=svg)](https://circleci.com/gh/alexandrejuk/docker-studies)

Este repositório é apenas de estudo para o uso pessoal, e por isso não tem aspecto técnico.

1. Crie um arquivo com o nome "Dockerfile"
```bash

  Scaffold

  |-- backend
      |-- __tests__
          |-- e2e
              |-- e2e.test.js
      |-- src
          |-- app.js
      |-- bin
          |-- www
      |-- Dockerfile
```

2. Criar configuração inicial
```docker
# No comando FROM você passa a imagem que você quer criar e a versão que sua aplicação utiliza

FROM node:8.11.2
```

3. Definir o local que as aplicações seram salva e o path inicial para trabalhar dentro do contianer
```docker
# No comando WORKDIR vamos definir o local que iremos trabalhar dentro do container

WORKDIR /home/server/ 
```

4. Copiar os arquivos ou um arquivo para o container
```docker
# No comando COPY você passa a origem dos arquivos ou o nome do 
# arquivo que você quer copiar 
# para o container e por ultimo o destino dentro do container

COPY package.json /backend
```

5. Instalar as dependencias da aplicação
***A flag --prod irá instalar somente as dependencias de produção**
```docker
# No comando RUN você passa os comando que deseja executar dentro do container. 
#(No meu caso estou usando o yarn mas você pode usar o npm)

RUN yarn --prod
```

6. Copiar o restante dos arquivos da aplicação
```docker
# No comando COPY iremos copiar todos os arquivos da aplicação para o container

COPY . ./backend
```

7. No CMD iremos passar os comando finais para subi a aplicação
```docker
CMD [ "yarn", "start" ]
```

8. No EXPOSE iremos informar qual a porta da nossa aplicação que queremos deixar visivel 
```docker
EXPOSE 3000
```

9. Para executar o Dockerfile entre no terminal no mesmo caminho que está seu Dockerfile e execute o comando abaixo:
```bash
$ docker build -t nomeImagem .
```

10. Para verificar se a imagem foi criada execute o comando abaixo:
```bash
$ docker images
```

11. Para verificar se a imagem foi criada execute o comando abaixo:
```bash
$ docker images
```

12. Para executar o container execute o comando abaixo:
```bash
# a flag -p é para definir as porta a primeira é a externa 
# e a segunda é a que está dentro do container porta_externa:porta_interna
$ docker run -p 3000:3000 -t nomeImagem
```
13. Para ver os container que estão rodando execute o comando abaixo:
```bash
$ docker ps
```

13. Para ver os container que foram rodandos execute o comando abaixo:
```bash
$ docker ps -ls
```

14. Para acessar dentro do container que estiver executando como se estivesse no bash execute o comando abaixo

***Containers mortos não podem ser acessados**

```bash
$ docker exec -ti idContainer sh
```

15. Para listar as imagens criadas no docker execute o comando abaixo

```bash
$ docker images
```

16. Para remover uma imagem criada no docker execute o comando abaixo

```bash
$ docker rmi IDIMAGEM
```

17. Para remover todas imagens criada no docker execute o comando abaixo

```bash
$ docker rmi $(docker images -q) -f
```

18. Para remover um container criado no docker execute o comando abaixo

```bash
$ docker rm IDCONTAINER
```

19. Para todos os containers criado no docker execute o comando abaixo

```bash
$ docker rm $(docker ps -a-q)
```

20. Para parar todos os containers criado no docker execute o comando abaixo

```bash
$ docker stop $(docker ps -a-q)
```