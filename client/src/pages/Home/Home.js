import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/api";

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
            <h1>Hello.</h1>
        )
    };
}

export default Home;
