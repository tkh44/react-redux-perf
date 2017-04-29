import React from 'react'
import {track} from '../react-smitty'
import Pair from '../components/pair.jsx'

class App extends React.Component {
  componentWillMount () {
    this.props.actions.fillPairs()
    this.props.actions.simulate()
  }

  render () {
    return (
      <div className="row">
        <h1>1k tracked components</h1>
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

export default track(
  'fill-pairs',
  'groups',
  (state, props) => {
    var partition = Math.floor(state.length / 3)
    return [
      state.slice(0, partition),
      state.slice(partition, partition * 2),
      state.slice(partition * 2)
    ]
  }
)(App)
