import React from 'react'
import {connect} from '../react-smitty'
import selector from '../selectors/pair-selector.js'
import Pair from '../components/pair.jsx'

class App extends React.Component {
  componentWillMount () {
    this.props.actions.fillPairs()
    this.props.actions.simulate()
  }

  render () {
    return (
      <div className="row">
        {this.props.groups.map((group, idx) => {
          return (
            <div className="col-lg-4" key={idx}>
              <ul className="list-group">
                {group.map(pair => {
                  return <Pair key={pair.id} id={pair.id} />
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(selector)(App)
