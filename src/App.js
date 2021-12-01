import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Composants/Header'
import Liste from './Composants/Liste'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Liste />
        </div>
      </div>
    )
  }
}

export default App;
