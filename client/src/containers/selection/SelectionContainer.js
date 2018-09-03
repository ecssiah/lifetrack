import React, { Component} from 'react'
import { Button, Modal } from 'react-bootstrap'
import FocusList from '../../components/selection/FocusList'
import { connect } from 'react-redux'
import { fetchFocuses } from '../../actions/selection-actions'

class SelectionContainer extends Component {
  state = {
    showDeleteConfirmation: false
  }

  handleDeleteClick = id => {
    this.setState({showDeleteConfirmation: true})
  }

  handleDeleteCancel = () => {
    this.setState({showDeleteConfirmation: false})
  }

  componentDidMount() {
    if (this.props.focuses.length === 0) {
      this.props.fetchFocuses()
    }
  }

  render() {
    return (
      <React.Fragment>
        <FocusList 
          focuses={this.props.focuses} 
          handleDeleteClick={this.handleDeleteClick}
        />
        {
          this.state.showDeleteConfirmation &&
          <div className='static-modal'>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Delete Focus</Modal.Title>
              </Modal.Header>

              <Modal.Body>Delete details</Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleDeleteCancel} >Cancel</Button>
                <Button bsStyle='primary'>Confirm</Button>
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
  fetchFocuses: () => dispatch(fetchFocuses())
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectionContainer)
