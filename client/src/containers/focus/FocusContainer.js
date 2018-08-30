import React, { Component} from 'react'
import { connect } from 'react-redux'
import Time from '../../components/focus/Time'
import StartButton from '../../components/focus/StartButton'
import Goal from '../../components/focus/Goal'
import Level from '../../components/focus/Level'
import Experience from '../../components/focus/Experience'

class FocusContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Time time={0} />
        <StartButton />
        <Goal goal={10} />
        <Level level={2} />
        <Experience experience={32.2} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
})

export default connect(mapStateToProps)(FocusContainer)

