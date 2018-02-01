
import { Component } from 'react'

class Content extends Component {
  render() {
    return (
      <content>
        <p onClick={() => console.info('one')}>one</p>
        <p onClick={() => console.info('two')}>two</p>
        <p onClick={() => console.info('three')}>three</p>
      </content>
    )
  }
}

export default Content
