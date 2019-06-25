import React from 'react'
//import PDFPreview from './PfdPreview' //eager load
import './App.css';
const LazyPDFPreview = React.lazy(() => import('./PfdPreview')) //lazy load

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
          {/* {this.state.showPdfPreview && <PDFPreview title={greeting}/>} */}
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
