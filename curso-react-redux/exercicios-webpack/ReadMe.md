# Webpack

## Webpack.config.js

Arquivo de configuração do webpack que será executado dentro do **_Node_**. As configurações são exportadas por meio do **_module.exports_**.

```javascript
//webpack.config.js
module.exports = {
    //arquivo de entrada da aplicação (por onde o bundle começará a ser executado)
    entry: '/ex/index.js',

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
}
```