import React, { Component} from 'react'
import { connect } from 'react-redux'
import { fetchFocuses } from '../actions/selection-actions'

class SelectionContainer extends React.Component {
  componentDidMount() {
    this.props.fetchFocuses()
  }

  render() {
    const focusMap = this.props.focuses.map(focus => {
      return <p key={focus.id}>{focus.name}</p>
    })

    return (
      <div>
        {focusMap}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  focuses: state.selection
})

const mapDispatchToProps = dispatch => ({
  fetchFocuses: () => dispatch(fetchFocuses())
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectionContainer)
