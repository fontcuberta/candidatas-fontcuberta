import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withAuthorization from '../auth/withAuthorization';
import Candidates from '../Candidates';

const HomePage = ({ authUser }) => {
  return (
    <div>
      <h3>Hi, {authUser.email}!</h3>
      <Candidates />
    </div>
  );
};

HomePage.propTypes = {
  authUser: PropTypes.object.isRequired,
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
