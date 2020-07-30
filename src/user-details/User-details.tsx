import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { userDetails, userDetailPeriods } from "./model/userdetails.model";
import Table from 'react-bootstrap/Table'

export default class UserDetails extends Component<{ val: Array<any> }, userDetails> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: false,
            userPeriods: []
        }
    }

    componentDidMount() {
        this.setState({ userPeriods: this.props.val });
        this.setState({ show: true });
    }

    handleClose = () => { this.setState({ show: false }) }

    showuserDetails() {
        return (
            this.props.val.map((udetails, index) =>
                <tr key={index}>
                    <td>{udetails.start_time}</td>
                    <td>{udetails.end_time}</td>
                </tr>
            )
        )
    }

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showuserDetails()}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}