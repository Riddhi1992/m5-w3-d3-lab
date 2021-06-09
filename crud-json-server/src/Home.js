import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BookList from './BookList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <BookList />
                </Container>
            </div>
        );
    }
}

export default Home;