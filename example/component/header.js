
import { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <span onClick={() => console.info('bin')}>bin</span>
        <span onClick={() => console.info('go')}>go</span>
      </header>
    )
  }
}

export default Header
