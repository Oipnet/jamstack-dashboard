import React from 'react';
import { Link } from 'gatsby';

const Profile = () => (
  <div className="dashboard-header">
    <nav>
      <Link to="dashboard/secret" activeClassName="active">
        Secret Stuff
      </Link>
      <Link to="dashboard/base" activeClassName="active">
        See Your Base
      </Link>
      <span>TODO show login status</span>
    </nav>
  </div>
);

export default Profile;
