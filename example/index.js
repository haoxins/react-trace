
import { render } from 'react-dom'

import App from './component/app'

window.init = () => {
  render(<App />, document.querySelector('body > div'))
}
