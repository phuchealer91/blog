import React, { Component } from 'react'
// import * as actions from '../actions/index';
// import { fetchUsers } from '../actions/index';
import { connect } from 'react-redux';
class UserList extends Component {
    // componentDidMount() {
    //     this.props.fetchUsers(this.props.userId);
    // }
    
    render() {
        const { user} = this.props;
        if(!user){
            return null;
        }
        return (
            <div className="header">
               {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find((user)=> user.id === props.userId)
    }
}

export default connect(mapStateToProps)(UserList);