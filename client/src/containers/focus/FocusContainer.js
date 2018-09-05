import React, { Component} from 'react'
import { connect } from 'react-redux'
import { updateTime } from '../../actions/focus-actions'
import { updateExperience, updateIterations } from '../../actions/focus-actions'
import Time from '../../components/focus/Time'
import StartButton from '../../components/focus/StartButton'
import Goal from '../../components/focus/Goal'
import Level from '../../components/focus/Level'
import Experience from '../../components/focus/Experience'

class FocusContainer extends Component {

  state = {
    timerRunning: false,
    timer: null,
    startButtonText: 'Start',
  }

  handleStartClick = () => {
    if (this.state.timerRunning) {
      clearInterval(this.state.timer)
      this.setState({ 
        ...this.state, 
        timerRunning: false,
        startButtonText: 'Start',
      })
    } else {
      const timer = setInterval(this.handleTimerUpdate, 1000)
      this.setState({ 
        timer, 
        timerRunning: true,
        startButtonText: 'Pause',
      })
    }
  }

  handleTimerUpdate = () => {
    if (this.props.focus.time > 0) {
      this.props.updateTime()
      this.props.updateExperience()
    } else {
      clearInterval(this.state.timer)
      this.props.updateIterations()

      this.setState({ 
        ...this.state, 
        timerRunning: false,
        startButtonText: 'Start'
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Time time={this.props.focus.time} />
        <StartButton 
          text={this.state.startButtonText} 
          handleStartClick={this.handleStartClick} 
        />
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
})

const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(updateTime()),
  updateExperience: () => dispatch(updateExperience()),
  updateIterations: () => dispatch(updateIterations()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FocusContainer)

