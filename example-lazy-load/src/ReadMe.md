# Exemplo usando Lazy loading

A partir da versâo 16.6 do React tornou se possível efetuar code-splitting sem precisar instalar nenhuma biblioteca adicional.

## Por que usar code-splitting e lazy loading?

O principal motivo é o tamanho do bundle das aplicações e conexões lentas de internet or dados móveis.


## Demo

```js
import React from 'react'
import { PDFViewer, Document, Page, Text, View } from '@react-pdf/renderer'
import styles from './pdfStyles'

const PDFPreview = ({title}) => {
  return(
    <PDFViewer className="viewer" style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <Text>This is a text in a genereta PDF file.</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default PDFPreview
```

### Versão eager loading

```js
import React from 'react'
import PDFPreview from './PfdPreview' //eager load
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    showPdfPreview: false
  }

  handleClick = () => this.setState({showPdfPreview: true})

  handleNameChange = event => this.setState({name: event.target.value})

  render() {
    const greeting = `Hello ${this.state.name}`

    return (
      <div className="App">
        <input 
          placeholder="Nome" type="text" 
          onChange={this.handleNameChange}/>
        <button type="button"
          onClick={this.handleClick}>Generate PDF</button>
        {this.state.showPdfPreview && <PDFPreview title={greeting}/>}
      </div>
    )
  }
}

export default App;
```

### Versão lazy loading

**React.lazy()** recebe uma função que deve executar a função __import()__ de forma dinâmica e deve retornar uma Promise que resolve para um módulo que exporta um componente React.

```js
import React from 'react'
import './App.css';
const LazyPDFPreview = React.lazy(() => import('./PfdPreview'))

class App extends React.Component {
  state = {
    name: '',
    showPdfPreview: false
  }

  handleClick = () => this.setState({showPdfPreview: true})

  handleNameChange = event => this.setState({name: event.target.value})

  render() {
    const greeting = `Hello ${this.state.name}`

    return (
      <div className="App">
        <input 
          placeholder="Nome" type="text" 
          onChange={this.handleNameChange}/>
        <button type="button"
          onClick={this.handleClick}>Generate PDF</button>
        {this.state.showPdfPreview && (
          <React.Suspense fallback={<div>loading...</div>}>
            <LazyPDFPreview title={greeting} />
          </React.Suspense>
        )}
      </div>
    )
  }
}

export default App;
```

[Referencia usada](https://medium.com/free-code-camp/how-to-use-react-lazy-and-suspense-for-components-lazy-loading-8d420ecac58?fbclid=IwAR1FjJzcU3pgANfnmTf0_2LqChnL8-SXQ41n8OyHJN03KeixV3-s_QKBFBk).