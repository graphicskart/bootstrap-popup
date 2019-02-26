import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Col,
  Container
} from 'react-bootstrap';
import { CustomModal } from './components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      description: "",
      title: "",
      buttonTitle: "",
      icon: ""
    }
  }
  openModal = (type, title, description, buttonTitle, icon) => {
    this.setState({
      type,
      title,
      description,
      buttonTitle,
      icon
    });

    this.modal.handleShow();
  }

  render() {
    return (
      <Container className="App">
          <Col xs={12}>
            <Button 
              variant="outline-success" 
              onClick={()=>this.openModal('success', 'Success', 'Your account has been created.', 'Continue', <i class="far fa-check-circle text-success"></i>)}
            >Success</Button>&nbsp;
            <Button 
              variant="outline-danger" 
              onClick={()=>this.openModal('danger', 'Face-Plant!', 'Ooops, something went wrong.', 'Try Again', <i class="far fa-times-circle"></i>)}
            >Danger</Button>
          </Col>
          <CustomModal 
            ref={c=>this.modal=c}
            type={this.state.type}
            description={this.state.description}
            title={this.state.title}
            buttonTitle={this.state.buttonTitle}
            icon={this.state.icon}
          />
      </Container> 
    );
  }
}

export default App;