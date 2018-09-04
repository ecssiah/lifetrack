import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import HeaderTitle from '../../components/header/HeaderTitle'
import AddButton from '../../components/header/AddButton'
import HomeButton from '../../components/header/HomeButton'
import SettingsButton from '../../components/header/SettingsButton'
import { addFocus } from '../../actions/selection-actions'
import { Grid, Row, Col } from 'react-bootstrap'
import './styles.css'

class HeaderContainer extends Component {

  state = {
    showAddDialog: false,
    focusName: ''
  }

  handleAddClick = () => {
    this.setState({
      ...this.state,
      showAddDialog: true
    }) 
  }

  handleAddConfirm = () => {
    this.props.addFocus(this.state.focusName)

    this.setState({
      focusName: '',
      showAddDialog: false
    })
  }

  handleAddCancel = () => {
    this.setState({
      ...this.state,
      showAddDialog: false
    })
  }

  handleNameChange = e => {
    this.setState({
      ...this.state,
      focusName: e.target.value
    })
  }

  render() {
    let leftButton, rightButton, title

    if (this.props.current_page === '/' ) {
      title = 'Focuses'
      leftButton = <AddButton handleAddClick={this.handleAddClick} />
      rightButton = <SettingsButton />
    } else if (this.props.current_page.includes('focuses')) {
      title = this.props.focus.name
      leftButton = <HomeButton />
      rightButton = <SettingsButton />
    } else if (this.props.current_page === '/settings') {
      title = 'Settings'
      leftButton = <HomeButton />
      rightButton = <React.Fragment />
    }

    return (
      <div className="header">
        <Grid>
          <Row>
            <Col xs={1} md={1}>
              <div className='button-container'>{leftButton}</div>
            </Col>
            <Col xs={10} md={10}><HeaderTitle name={title} /></Col>
            <Col xs={1} md={1}>
              <div className='button-container'>{rightButton}</div>
            </Col>
          </Row>
        </Grid>
        {
          this.state.showAddDialog &&
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
                      value={this.state.focusName}
                      onChange={this.handleNameChange}
                    />
                  </FormGroup>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleAddCancel} >Cancel</Button>
                <Button 
                  onClick={this.handleAddConfirm} 
                  bsStyle='primary'
                >
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  focus: state.focus,
  current_page: state.header.current_page,
  previous_page: state.header.previous_page,
})

const mapDispatchToProps = dispatch => ({
  addFocus: focusName => dispatch(addFocus(focusName))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

