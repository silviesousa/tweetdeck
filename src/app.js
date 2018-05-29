import React from "react";
import ReactDOM from "react-dom";
import axios from "./axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Posts from "./posts";

export default class App extends React.Component {
    constructor(props) {
        console.log("app component is here");
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <h1>Tweet Deck</h1>
                        <Posts />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("main"));
