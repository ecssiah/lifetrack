import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const AddFocusDialog = props => {
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
          <Button 
            onClick={props.handleAddConfirm} 
            bsStyle='primary'
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default AddFocusDialog
