
import { Component } from 'react'

import Content from './content'
import Header from './header'

class App extends Component {
  render() {
    return (
      <main>
        <h3 onClick={() => console.info('hello')}>hello</h3>

        <Header />

        <Content />
      </main>
    )
  }
}

export default App
