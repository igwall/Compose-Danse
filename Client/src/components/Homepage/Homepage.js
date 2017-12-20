import React from 'react'
import styles from './Homepage.styles'
import {connect} from 'react-redux'
import Room from '../Room/Room'
import {setRooms} from '../../store/actions/room.action'

@connect(store => {
  return {
    rooms: store.rooms.elements
  }
})

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    setRooms().then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  displayRoom () {
    this.props.popoverManager.setRenderedComponent(
      <Room {...this.props} dismissPopover={this.props.popoverManager.dismissPopover} />
    )
    this.props.popoverManager.displayPopover()
  }

  render () {
    const {rooms} = this.props
    console.log(rooms)

    return (<div className='host'>
      <h1>Rooms</h1>
      <ul>
        {
          rooms.map(room => {
            return (
              <li
                style={{
                  background: room.color,
                  border: 'solid 1px black',
                  display: 'inline-block',
                  cursor: 'pointer'
                }}
                onClick={this.displayRoom.bind(this)}
              >
                <div>{room.name}</div>
              </li>
            )
          })
        }
      </ul>
      <li>
      </li>
      <style jsx>{styles}</style>
    </div>
    )
  }
}
