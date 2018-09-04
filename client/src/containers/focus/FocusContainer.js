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
        <Time time={this.props.focus.time} />
        <StartButton />
        <Goal 
          iterations={this.props.focus.iterations} 
          goal={this.props.focus.goal} 
        />
        <Level level={this.props.focus.level} />
        <Experience experience={this.props.focus.experience} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
  settings: state.settings,
})

export default connect(mapStateToProps)(FocusContainer)

