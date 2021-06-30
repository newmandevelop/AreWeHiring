import React, {useEffect} from 'react';
import {
  Layout,
  Divider,
  Menu,
  Dropdown,
  Button,
  Typography,
  Avatar,
} from 'antd';
import styles from './index.module.scss';
import { logoutUser, removeRole } from '../../utils/sessionStorage';
import { useHistory } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { getToken, getRole } from '../../utils/sessionStorage';

const { Header } = Layout;
const CustomeHeader = () => {

  const history = useHistory();
  const handleLogout = () => {
    logoutUser();
    removeRole();
    history.push('/');
  };
  const token = getToken();
  const role = getRole();
  const menu = () => (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          Item
        </a>
      </Menu.Item>
    </Menu>
  );

  const accountSettingMenu = () => (
    <Menu>
      <Menu.Item>
        <a href="/dashboard/reset-password" rel="noopener noreferrer">
          Settings
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={styles.header}>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', justifyContent: 'start' }}>
          <h1 className={styles.logo}>AreWeHiring</h1>
          <ul className={styles.navLink}>
            <li className={styles.navLinkItems}>
              <Button href="/dashboard" type="link" className={styles.dropDown}>
                Home
              </Button>
            </li>

            {token && role === 'CANDIDATE' && <li className={styles.navLinkItems}>
              <Button
                type="link"
                href="/dashboard/candidate"
                className={styles.dropDown}
              >
                For Candidates
              </Button>
            </li>}
            {token && role === 'EMPLOYER' && <li className={styles.navLinkItems}>
              <Dropdown overlay={menu}>
                <Button
                  type="link"
                  href="/dashboard/employee/post-job"
                  className={styles.dropDown}
                >
                  For Employers
                </Button>
              </Dropdown>
            </li>}
            <Dropdown overlay={menu}>
              <Button type="link" className={styles.dropDown}>
                Blog
              </Button>
            </Dropdown>{' '}
            {!token && (
              <Button href="/login" type="link" className={styles.dropDown}>
                Login
              </Button>
            )}
            {token && (
              <Button
                onClick={() => handleLogout()}
                type="link"
                className={styles.dropDown}
              >
                Signout
              </Button>
            )}
            {token && (
              <Dropdown overlay={accountSettingMenu}>
                <Avatar
                  className={`ant-dropdown-link ${styles.avatar}`}
                  size={34}
                  icon={<UserOutlined />}
                />
              </Dropdown>
            )}
          </ul>
        </div>
      </div>
    </Header>
  );
};

export default CustomeHeader;
