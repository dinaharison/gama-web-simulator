# to install gama headless mode

first go to the gama folder :

```bash
  cd ./gama
```

build your docker image

```bash
  docker build -t gama-headless .
```

# launch the headless server

```bash
  docker run -p 6868:6868 gama-headless sh ./gama-headless.sh -socket 6868
```

# install the web user interface

```bash
  cd ./lotka-volterra
```

install all the dependencies

```bash
  npm install
```

launch the web application (the headless server have to be launched first)

```bash
  npm run dev
```
