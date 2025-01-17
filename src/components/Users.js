import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username} from {user.hometown}</li>);

    return (
      <div>
      <p>User Count:
      {this.props.userCount}
      </p>
      Users:
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		userCount: state.users.length
	};
};

export default connect(mapStateToProps)(Users);
