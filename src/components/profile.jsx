import React from 'react';

class Profile extends React.Component {

  componentWillMount() {
    if (!this.props.user) {
      this.props.router.push('/login');
    }
  }

  render() {
    return (
      <div>Profile!</div>
    );
  }
}

Profile.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.function
  }),
  user: React.PropTypes.bool
};

export default Profile;
