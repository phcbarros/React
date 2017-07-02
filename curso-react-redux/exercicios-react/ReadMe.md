# React

Lib para renderização de html.

## Componentes

Os componentes no React podem ser criados por meio de **_funções_** ou **_classes_**. Em todo arquivo que for criado um componente React é obrigatório efetuar o import do React.

```javascript
import React from 'React';

export default function() {
    return(<h1>Meu Primeiro Componente</h1>)
}
```

Para passar parâmetros para os componentes é nessário passar via **_propriedades (props)_**.

```javascript
// componente.jsx
export default (props) => (
    <h1>{ props.value }</h1>
)

// index.jsx
import Componente from './componente';

ReactDOM.render(<Componente value="Show!"/>, document.getElementById('app'));
```