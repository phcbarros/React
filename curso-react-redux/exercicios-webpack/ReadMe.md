# Webpack

## Webpack.config.js

Arquivo de configuração do Webpack que será executado dentro do **_Node_**. As configurações são exportadas por meio do **_module.exports_**.

```javascript
//webpack.config.js
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //arquivo de entrada da aplicação (por onde o bundle começará a ser executado)
    entry: './ex/index.js',

    //onde será colocado o bundle gerado
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },

    //configuração do devServer
    devServer: {
        port: 8080,
        contentBase: './public' //pasta base onde estão os arquivos que serão carregados
    }
    
    //configurando plugins
    plugins: [
        new ExtractTextPlugin('app.css')
    ],

    //configuração de módulos
    module: {
        loaders: [{
            test: /.js?$/, //quais arquivos serão carregados
            loader: 'babel-loader', //loader usado (faz a interface entre o webpack e o babel)
            exclude: /node_modules/, //arquivos excluídos
            //processo a ser executado pelo loader
            query: {
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread'] //usado para conseguir usar o operador rest/spread
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }]
    }
}
```

O Webpack suporta usar sistema de módulo do CommonJS ou o ES2015.

Obs.: Os arquivos não referênciados no seu entry point (index.js) não são carregados pelo Webpack.

## Webpack Dev Server

Criando **_NPM script_** para executar o webpack-dev-server.

```javascript
//package.json
....
"scripts": {
    "dev": "webpack-dev-server --progress --colors --inline --hot"
}
....
````