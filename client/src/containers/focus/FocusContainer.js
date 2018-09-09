import React, { Component} from 'react'
import { connect } from 'react-redux'
import { 
  setTime, updateTime, saveFocus, 
  updateExperience, updatePeriods, resetPeriods 
} 
  from '../../actions/focus-actions'
import { updateSelection } from '../../actions/selection-actions'
import Time from '../../components/focus/Time'
import StartButton from '../../components/focus/StartButton'
import Goal from '../../components/focus/Goal'
import Level from '../../components/focus/Level'
import Experience from '../../components/focus/Experience'
import { SECOND } from '../../reducers/focus-reducer' 

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

    this.props.updateSelection(this.props.focus)
    this.props.saveFocus(this.props.focus)
  }

  handleStartClick = () => {
    if (this.state.timerRunning) {
      clearInterval(this.state.timer)

      if (!this.state.active) {
        this.props.setTime(this.props.focus.time)

        this.setState({
          ...this.state,
          active: true,
          saveTimer: 20,
          timerRunning: false,
          startButtonText: 'Start',
        })
      } else {
        this.props.saveFocus(this.props.focus)

        this.setState({ 
          ...this.state, 
          timerRunning: false,
          startButtonText: 'Start',
        })
      }
    } else {
      this.setState({ 
        timerRunning: true,
        timer: setInterval(this.handleTimerUpdate, 1000), 
        startButtonText: this.state.active ? 'Pause' : 'Skip',
      })
    }
  }

  handleGoalClick = () => {
    this.props.resetPeriods()
  }

  handleTimerUpdate = () => {
    this.updateSaveTimer()
    this.updateFocusTimer()
  }

  updateSaveTimer() {
    if (this.state.active && this.state.saveTimer <= 1) {
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
  }

  updateFocusTimer() {
    if (this.props.focus.time >= SECOND) {
      this.props.updateTime()

      if (this.state.active)
        this.props.updateExperience()
    } else {
      clearInterval(this.state.timer)

      if (this.state.active) {
        this.props.updatePeriods()
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
          goal={this.props.focus.goal} 
          periods={this.props.focus.periods} 
          handleGoalClick={this.handleGoalClick}
        />
        <Level level={this.props.focus.level} />
        <Experience experience={this.props.focus.experience} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
  selection: state.selection,
  workPeriod: state.settings.find(setting => setting.name === "Work Period"),
  breakPeriod: state.settings.find(setting => setting.name === "Break Period"),
})

const mapDispatchToProps = dispatch => ({
  saveFocus: focus => dispatch(saveFocus(focus)),
  setTime: time => dispatch(setTime(time)),
  updateTime: () => dispatch(updateTime()),
  updateExperience: () => dispatch(updateExperience()),
  updatePeriods: () => dispatch(updatePeriods()),
  resetPeriods: () => dispatch(resetPeriods()),
  updateSelection: focus => dispatch(updateSelection(focus)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FocusContainer)

