import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/api";
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles()
            .then(res => this.setState({ articles: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>NYTIMES Articles</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>         
        )  
    };
}

export default Home;
