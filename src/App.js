import React from 'react';

class App extends React.Component{

  state = {
    nome : 'Jacinto Lela'
  }

  modificarNome = (e) => {

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
