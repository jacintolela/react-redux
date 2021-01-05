import React from 'react';

class App extends React.Component{

  state = {
    nome : ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  render(){
    return(
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello {this.state.nome} !</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry... </p>
        <button>Salvar Agora</button>
      </>
    )
  }
}

export default App;
