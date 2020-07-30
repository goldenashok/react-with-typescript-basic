import React, { Component } from "react";
import axios from 'axios';
import { USERLIST } from "../helpers/constants";
import { Userlist, Activity_objects } from "./model/user.model";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

export default class UserList extends Component<{}, Userlist> {
    constructor(props: {}) {
        super(props);
        this.state = {
            members: [],
            show: false,
            activity_periods: []
        }
    }

    componentDidMount() {
        this.getuserDetails();
    }

    getuserDetails() {
        axios.get(USERLIST)
            .then((res) => {
                this.setState({ members: res.data.members })
            })
            .catch((err) => {
                console.log('Error', err)
            })
    }

    showUserDetail(periods: Activity_objects) {
        this.setState({ show: true, activity_periods: periods.activity_periods });
    }

    showUser() {
        return (
            this.state.members.map((user) =>
                <tr key={user.id}>
                    <td><span onClick={() => this.showUserDetail(user)}>{user.real_name}</span></td>
                    <td>{user.tz}</td>
                </tr>
            )

        )
    }

    showuserDetails() {
        return (
            this.state.activity_periods.map((udetails, index) =>
                <tr key={index}>
                    <td>{udetails.start_time}</td>
                    <td>{udetails.end_time}</td>
                </tr>
            )
        )
    }

    handleClose = () => { this.setState({ show: false }) }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Time Zone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showUser()}
                                </tbody>
                            </Table>
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
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}