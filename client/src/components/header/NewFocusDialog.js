import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const NewFocusDialog = props => {
  if (props.showDialog) {
    return (
      <div className='static-modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Create New Focus</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type='text'
                  value={props.focusName}
                  onChange={props.handleNameChange}
                />
              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={props.handleAddCancel} >Cancel</Button>
            <Button bsStyle='primary' onClick={props.handleAddConfirm} >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  } else {
    return null
  }
}

export default NewFocusDialog
