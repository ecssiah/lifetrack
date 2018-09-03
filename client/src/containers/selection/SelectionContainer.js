import React, { Component} from 'react'
import FocusList from '../../components/selection/FocusList'
import { connect } from 'react-redux'
import { fetchFocuses } from '../../actions/selection-actions'

class SelectionContainer extends Component {

  handleDeleteClick(id) {
    console.log(id)
  }

  componentDidMount() {
    if (this.props.focuses.length === 0) {
      this.props.fetchFocuses()
    }
  }

  render() {
    return (
      <div>
        <FocusList 
          focuses={this.props.focuses} 
          handleDeleteClick={this.handleDeleteClick}
        />
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
