import { Link, navigate } from 'gatsby';
import React from 'react';
import * as styles from './AccountNav.module.css';

const AccountNav = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem('key');
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.webRoot}>
        <Link
          activeClassName={styles.activeLink}
          to={'/team/details'}
          className={styles.webLink}
        >
          Team Details
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/team/players'}
          className={styles.webLink}
        >
          Players
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/password'}
          className={styles.webLink}
        >
          Password
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/admin/registrations'}
          className={styles.webLink}
        >
          Registrations
        </Link>
      </div>
    </div>
  );
};

export default AccountNav;
