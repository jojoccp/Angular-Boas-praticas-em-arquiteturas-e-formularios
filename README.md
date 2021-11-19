Para instalar o Prettier
npm install --save-dev prettier

pacotes:
npm install --save-dev tslint-config-prettier
npm install --save-dev tslint-plugin-prettier

para criar o tslint.json:
npx tslint --ini

adicionar a seguinte linha no tslint.json
"extends": [
        "tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"
    ]


instalar bootstrap e fontawesome
npm i bootstrap font-awesome

"styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/font-awesome/css/font-awesome.css"
            ]


para fazer simulaçao de criaçao de components adicionar o -d
ng g module home --routing -d