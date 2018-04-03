import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/api";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
                    <Col size="md-6 sm-12">
                            <h2>Search</h2>
                        <form>
                            <Input name="title" placeholder="Title (required)" />
                            <Input name="start" placeholder="1900" />
                            <Input name="end" placeholder="2018" />
                            <FormBtn>Submit</FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                            <h2>Articles</h2>
                        {this.state.articles}
                    </Col>
                </Row>
            </Container>         
        )  
    };
}

export default Home;
