import React from "react";
import axios from "axios";

export default class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }
    componentDidMount() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
            .then(resp => {
                console.log("console log for resp in comments", resp);
                console.log("log for resp.data", resp.data);
                const comments = resp.data;
                this.setState({ comments });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="commentsColumn">
                <h1>Comments</h1>
                    <p className="close"> x </p>
                    <div className="singleComments">
                        <h3>Comment Name</h3>
                        <ul> {this.state.comments.map(comment => <li> {comment.name} </li>)}  </ul>
                        <h3>Comment Body</h3>
                        <ul> {this.state.comments.map(comment => <li> {comment.body} </li>)}  </ul>
                    </div>
            </div>
        )
    }
}
