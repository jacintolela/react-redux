import React from 'react';

class App extends React.Component{

  state = {
    nome : ''
  }

  modificarNome = (event) => {
    let nome = event.target.value;
    this.setState({
      nome: nome
    })
  }

  render(){
    return(
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello {this.state.nome} !</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <button>Salvar</button>
      </React.Fragment>
    )
  }
}

export default App;
