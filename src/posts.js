import React from "react";
import axios from "axios";
import Comments from "./comments";
import Search from "./search";

export default class Posts extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            isHidden: true
        };
    }
    toggleHidden() {
        console.log("click for load comments");
        this.setState({ isHidden: !this.state.isHidden });
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then(resp => {
                console.log("console log for resp", resp);
                console.log(resp.data);
                console.log(resp.data.title);
                console.log(resp.data.body);
                const posts = resp.data
                this.setState({ posts });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
                <div className="postsColumn">
                    <h1>Posts</h1>

                    <Search />
                    <br />
                    <br />
                    <br />
                    <div
                        className="singlePosts"
                        onClick={this.toggleHidden.bind(this)}
                    >
                        <h3>Post Title</h3>
                        <ul>{this.state.posts.slice(0, 10).map(post => <li> {post.title}</li> )}</ul>
                        <h5>Post Body</h5>
                        <ul>{this.state.posts.slice(0, 10).map(post => <li> {post.body}</li> )}</ul>
                        {!this.state.isHidden && <Comments />}
                    </div>
                </div>
        );
    }
}
