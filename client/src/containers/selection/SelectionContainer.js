import React, { Component} from 'react'
import SelectionList from '../../components/selection/SelectionList'
import SelectionDeleteDialog 
  from '../../components/selection/SelectionDeleteDialog'
import { connect } from 'react-redux'
import { deleteFocus } from '../../actions/selection-actions'

class SelectionContainer extends Component {

  state = {
    selectedFocus: 0,
    showDeleteConfirmation: false
  }

  handleDeleteClick = id => {
    this.setState({
      selectedFocus: id,
      showDeleteConfirmation: true
    })
  }

  handleDeleteConfirm = () => {
    this.props.deleteFocus(this.state.selectedFocus)

    this.setState({
      showDeleteConfirmation: false
    })
  }

  handleDeleteCancel = () => {
    this.setState({
      showDeleteConfirmation: false
    })
  }

  handleSelectionDeleteDialog() {
    if (this.state.showDeleteConfirmation) {
      return (
        <SelectionDeleteDialog
          handleDeleteConfirm={this.handleDeleteConfirm}
          handleDeleteCancel={this.handleDeleteCancel}
        />
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <SelectionList 
          focuses={this.props.focuses} 
          handleDeleteClick={this.handleDeleteClick}
        />
        
        { this.handleSelectionDeleteDialog() }

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  focuses: state.selection
})

const mapDispatchToProps = dispatch => ({
  deleteFocus: id => dispatch(deleteFocus(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectionContainer)
