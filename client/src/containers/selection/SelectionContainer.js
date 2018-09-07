import React, { Component} from 'react'
import { Button, Modal } from 'react-bootstrap'
import SelectionList from '../../components/selection/SelectionList'
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

  render() {
    return (
      <React.Fragment>
        <SelectionList 
          focuses={this.props.focuses} 
          handleDeleteClick={this.handleDeleteClick}
        />
        {
          this.state.showDeleteConfirmation &&
          <div className='static-modal'>
            <Modal.Dialog>
              <Modal.Body>
                <h4>Are you sure you want to delete this focus?</h4>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleDeleteCancel} >Cancel</Button>
                <Button 
                  onClick={this.handleDeleteConfirm} 
                  bsStyle='primary'
                >
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        }
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
