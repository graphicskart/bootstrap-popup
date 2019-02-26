import React, { Component } from 'react';
import {
    Modal,
    Button,
    Col
} from 'react-bootstrap';

export default class CustomModal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }
  
    render() {
      return (
          <Modal show={this.state.show} onHide={this.handleClose} className={`${this.props.type} ${this.props.type} text-center`} size="sm">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Col xs={12} sm={{span:8, offset: 2}}>
                    <h4>{this.props.title}</h4>
                    <p className="modal-contents">{this.props.description}</p>
                    <p className="icon">{this.props.icon}</p>
                </Col>
            </Modal.Body>
            <Modal.Footer>
                <Col sm={12} xs={12} className="modal-footer-area">
                    <Button variant={this.props.type} onClick={this.handleClose} block>
                        {this.props.buttonTitle}
                    </Button>
              </Col>
            </Modal.Footer>
          </Modal>
      );
    }
  }