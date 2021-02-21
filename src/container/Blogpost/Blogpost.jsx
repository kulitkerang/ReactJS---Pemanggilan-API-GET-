import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './Blogpost.css';

class Blogpost extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        fetch('http://localhost:3004/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                post:json
            })
        })
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blogpost</p>
                {
                    this.state.post.map(post => {
                       return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        )
    }
}

export default Blogpost;