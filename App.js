import React from 'react';
import { connect } from 'react-redux'
import * as roomActions from './actions/rooms'
import{ saveRooms } from './httpService/saveRooms'
import './App.css'

import { RoomGroup } from './components/RoomGroup'
import { Button } from './components/Button'

class App extends React.Component {
  componentWillMount() {
    this.props.getRooms()
  }

  render() {
    const updateAdults = (id) => (e) => this.props.updateAdults({ id, adults: Number(e.target.value) })
    const updateChildren = (id) => (e) => this.props.updateChildren({ id, children: Number(e.target.value) })
    const toggleEnable = (id) => (currValue) => () => this.props.toggleEnable({ id, currValue })
    const saveData = (rooms) => () => saveRooms(rooms)

    return (
      <div className="App">
        {
          this.props.rooms.map(
            (room, i) => (
              <RoomGroup key={ i } { ...room }
                updateAdults={ updateAdults(room.id) }
                updateChildren={ updateChildren(room.id) }
                toggleEnable={ toggleEnable(room.id) }
              />
            )
          )
        }
        <Button onClick={ saveData(this.props.rooms) } text="Submit" />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    rooms: state.rooms
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRooms: () => dispatch(roomActions.getRooms()),
    updateAdults: ({id, adults}) => dispatch(roomActions.updateAdults({id, adults})),
    updateChildren: ({id, children}) => dispatch(roomActions.updateChildren({id, children})),
    // saveData: (rooms) => dispatch(roomActions.saveData(rooms)),
    toggleEnable: ({id, currValue}) => dispatch(roomActions.toggleEnable({id, currValue})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
