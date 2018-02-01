import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {

  componentWillMount() {
    if (!this.props.user) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        Profile!
      </div>
    );
  }
}

Profile.defaultProps = {
  user: null
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.function
  }).isRequired,
  user: PropTypes.bool
};

export default Profile;
