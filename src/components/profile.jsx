import React from 'react';
import PropTypes from 'prop-types';

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
  router: PropTypes.shape({
    push: PropTypes.function
  }),
  user: PropTypes.bool
};

export default Profile;
