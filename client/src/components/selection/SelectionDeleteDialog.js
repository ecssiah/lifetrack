import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const SelectionDeleteDialog = props => 
  <div className='static-modal'>
    <Modal.Dialog>
      <Modal.Body>
        <h4>Are you sure you want to delete this focus?</h4>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.handleDeleteCancel} >Cancel</Button>
        <Button 
          onClick={props.handleDeleteConfirm} 
          bsStyle='primary'
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>

export default SelectionDeleteDialog
