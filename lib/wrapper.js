
import hoistStatics from 'hoist-non-react-statics'
import { Component } from 'react'

function trace(opts = {}) {
  return function(InnerComponent) {
    class Tracer extends Component {
      static contextTypes = {
        trace: function() {}
      }

      render() {
        return (
          <InnerComponent {...this.props} {...this.context} />
        )
      }
    }

    return hoistStatics(Tracer, InnerComponent)
  }
}

export default trace
