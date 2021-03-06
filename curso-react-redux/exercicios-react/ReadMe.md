# React

Lib para renderização de html.

## Componentes

Os componentes no React podem ser criados por meio de **_funções_** ou **_classes_**. Em todo arquivo que for criado um componente React é obrigatório efetuar o import do React.

### Funções

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

O React não permite que renderizar dois componentes, para poder fazer isso é necessário colocar esse componentes dentro de um outro componente ou de um elemento html.

```javascript
import { Primeiro, Segundo } from './componente';

// Errado
ReactDOM.render(
    <Primeiro />
    <Segundo />
, document.getElementById('app'));

// Correto
ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'));
```
## Componentes Filhos

Um componente pode ter outro componente dentro dele.

```javascript
// member.jsx
export default props => (
    <div>{ props.name } <strong>{ props.lastName }</strong></div>
)

// family.jsx
import Member from './member';

export default props => (
    <div>
        <Member name="Ana" lastName= "Costa" />
        <Member name="Ian" lastName= "Franco" />
        <Member name="Paulo" lastName= "Barros" />
    </div>
)

// index.jsx
ReactDOM.render(
    <Family />
, document.getElementById('app'));
```

Para evitar deixar o mais dinâmico é podemos usar a propriedade **_children_** de props.

```javascript
// family.jsx
import Member from './member';

export default props => (
    <div>
        <h1>Família</h1>
        { props.children}
    </div>
)

// index.jsx
ReactDOM.render(
    <Family >
        <Member name="Paulo" lastName="Barros" />
        <Member name="Maria" lastName="Barros" />
    </ Family>
, document.getElementById('app'));
```

#### Passagem de dados do componente pai para o filho

Para passar dados do componente pai para o filho podemos usar o método **_React.cloneElement(element, props)_**. O primeiro parâmetro a ser passado é o elemento (string ou componente) e segundo as propriedades.

```javascript
// family.jsx
export default props => (
    <div>
        <h1>Família</h1>
        { React.cloneElement(props.children, {...props}) }
    </div>
)

// index.jsx
ReactDOM.render(
    <Family lastName="Barros">
        <Member name="Paulo" />
    </ Family>
, document.getElementById('app'));
```

Quando o elemento pai tem mais de um filho o método React.cloneElement não pode ser usado diretamente. Temos que usar o **_React.Children.map()_**.

```javascript
// family.jsx
 { React.Children.map(props.children, 
            child => React.cloneElement(child, {...props})) }

// index.jsx
<Family lastName="Barros">
    <Member name="Paulo" />
    <Member name="Rosilene" />
    <Member name="Marina" />
</ Family>
```

### Classes

Para criar um componente usando classes é preciso que o seu componente classe extenda de **_React.Component_**. Outra coisa, seu componente ter que implementar o método **_render_** obrigatóriamente e para acessar as propriedades é preciso usar o **_this_**.

```javascript
import React, { Component } from 'react';

export default class ClasseComponente extends Component {
    render() {
        return (
            <h1>{ this.props.value }</h1>
        )
    }
}
```

Para alterar o valor de alguma propriedade dentro do componente é necessário usar o método **_setState_** da classe Component. O construtor da classe recebe as props como parametro e as mesmas são passadas para a classe pai (Component) por meio do método **_super_**.

```javascript
export default class ClasseComponente extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue };
    }
    
    sum(delta) {
        this.setState({ value: this.state.value + delta });
    }

    render() {
        return (
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.value }</h2>
                <button type="button" onClick={ () => this.sum(-1)}>Desc</button>
                <button type="button" onClick={ () => this.sum(1)}>Asc</button>
            </div>
        )
    }
}
```

### Estado Controlado (controlled) e Não Controlado (uncontrolled)

Um estado controlado (controlled) é quando somente o meu javascript pode promover/evoluir (alterar) o valor do estado do meu componente, ou seja, o DOM não consegue alterar o estado do componente. E o estado não controlado (uncontrolled) o DOM consegue alterar o valor do componente.

```javascript
class Field extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue }; // estado controlado
        // this.state = { value: null }; estado não controlado
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label>
                <br/>
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field;
```
