import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions/index';
import UserList from '../components/UserList';
class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
    
    render() {
        const { posts } = this.props;
        if(!posts){
            return 'Loading...';
        }
        const elementPosts = posts.map((post,index)=>{
            return <div key={post.id} className="item">
            <i className="large middle aligned icon user"></i>
                <div className="content">
                    <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    </div>
                    <UserList userId={post.userId}/>
                </div>
            </div>
        })
       
        return (
            <div className="ui relaxed divied list"> 
                {elementPosts}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps,{ fetchPostsAndUsers })(PostList);