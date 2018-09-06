import React, { Component} from 'react'
import { connect } from 'react-redux'
import { setTime, updateTime, saveFocus } from '../../actions/focus-actions'
import { updateExperience, updateIterations } from '../../actions/focus-actions'
import Time from '../../components/focus/Time'
import StartButton from '../../components/focus/StartButton'
import Goal from '../../components/focus/Goal'
import Level from '../../components/focus/Level'
import Experience from '../../components/focus/Experience'

class FocusContainer extends Component {

  state = {
    timer: null,
    active: true,
    saveTimer: 20,
    timerRunning: false,
    startButtonText: 'Start',
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  handleStartClick = () => {
    if (this.state.timerRunning) {
      clearInterval(this.state.timer)

      if (!this.state.active) {
        this.props.setTime(this.props.workPeriod.value)

        this.setState({
          ...this.state,
          active: true,
          saveTimer: 20,
          timerRunning: false,
          startButtonText: 'Start',
        })
      } else {
        this.setState({ 
          ...this.state, 
          timerRunning: false,
          startButtonText: 'Start',
        })
      }
    } else {
      const timer = setInterval(this.handleTimerUpdate, 1000)

      this.setState({ 
        timer, 
        timerRunning: true,
        startButtonText: this.state.active ? 'Pause' : 'Skip',
      })
    }
  }

  handleTimerUpdate = () => {
    if (this.state.active && this.state.saveTimer === 0) {
      this.props.saveFocus(this.props.focus)

      this.setState({
        ...this.state,
        saveTimer: 20,
      })
    } else {
      this.setState({
        ...this.state,
        saveTimer: this.state.saveTimer - 1,
      })
    }

    if (this.props.focus.time >= 0.01666) {
      this.props.updateTime()

      if (this.state.active)
        this.props.updateExperience()
    } else {
      clearInterval(this.state.timer)

      if (this.state.active) {
        this.props.updateIterations()
        this.props.setTime(this.props.breakPeriod.value)
      } else {
        this.props.setTime(this.props.workPeriod.value)
      }

      this.setState({ 
        ...this.state, 
        timerRunning: false,
        startButtonText: 'Start',
        active: !this.state.active,
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Time active={this.state.active} time={this.props.focus.time} />
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
  workPeriod: state.settings.find(setting => setting.name === "Work Period"),
  breakPeriod: state.settings.find(setting => setting.name === "Break Period"),
})

const mapDispatchToProps = dispatch => ({
  saveFocus: focus => dispatch(saveFocus(focus)),
  setTime: time => dispatch(setTime(time)),
  updateTime: () => dispatch(updateTime()),
  updateExperience: () => dispatch(updateExperience()),
  updateIterations: () => dispatch(updateIterations()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FocusContainer)

