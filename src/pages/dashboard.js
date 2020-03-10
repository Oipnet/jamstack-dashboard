import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import { Link, navigate } from 'gatsby';
import { IdentityModal } from 'react-netlify-identity-widget';

import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';
import PrivateRoute from '../components/private-route';

import 'react-netlify-identity-widget/styles.css';

export default ({ location }) => {
  const [isVisible, setVisibility] = useState(false);

  const showModal = () => setVisibility(true);
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('dashboard/login', { replace: true });
    }
  }, []);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
};
