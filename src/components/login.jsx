import React from 'react';

const Profile = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <div>
        <h4>Email: </h4>
        <input type="textfield" name="email" className="email" />
      </div>
      <div>
        <h4>Password: </h4>
        <input type="password" name="password" className="password" />
      </div>
    </div>
  );
};

export default Profile;
