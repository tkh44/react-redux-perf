import React from 'react'
import { connect, track } from '../react-smitty'

class Pair extends React.Component {
  constructor () {
    super()
    this.state = {
      direction: 'up'
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      direction: nextProps.pair.value > this.props.pair.value ? 'up' : 'down'
    })
  }

  shouldComponentUpdate (nextProps) {
    return this.props.pair.value !== nextProps.pair.value
  }

  render () {
    return (
      <li className='list-group-item'>
        <span>{this.props.pair.name}</span>
        <span className={'pull-right ' + (this.state.direction === 'up' ? 'text-success' : 'text-warning')}>
          <span className={'glyphicon ' + (this.state.direction === 'up' ? 'glyphicon-arrow-up' : 'glyphicon-arrow-down')}></span>
          <span>{this.props.pair.value}</span>
        </span>
      </li>
    )
  }
}

export default track(
  'update-pair',
  'pair',
  (state, props) => state[props.id],
  (state, props, type, data) => {
    return !data || props.id === data.id
  }
)(Pair)
