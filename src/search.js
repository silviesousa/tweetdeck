import React from "react";
import axios from "axios";

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            query: "",
            results: []
        };
        this.searchPosts = this.searchPosts.bind(this);
    }

    searchPosts() {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }

    getInfo() {
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(({ data }) => {
            this.setState({
                results: data.data
            })
        })
    }

        render () {
            return (
                <form>
                    <input
                        className="input"
                        placeholder="Search Posts"
                        ref={input => this.search = input}
                        onChange={this.searchPosts}
                        />
                    <p>{this.state.query}</p>
                </form>
            );
        }
}

const Suggestions = (props) => {
    const options = props.results.map(item => (
        <li key={item.title}> {item.title}</li>
    ))
    return <ul>{options}</ul>
}
