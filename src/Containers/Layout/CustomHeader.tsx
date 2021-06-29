import React from 'react';
import { Layout, Divider, Menu, Dropdown, Button, Typography, Avatar } from 'antd';
import styles from './index.module.scss';
import { logoutUser, removeRole } from '../../utils/sessionStorage';
import { useHistory } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { getToken } from '../../utils/sessionStorage';
const { Header } = Layout;
const CustomeHeader = () => {
  const history = useHistory();
  const handleLogout = () => {
    logoutUser();
    removeRole();
    history.push('/');
  };
  const token = getToken();
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
        <a href="/dashboard/resetPassword" rel="noopener noreferrer">
          Reset Password
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={styles.header}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <Avatar size={64} icon={<UserOutlined />} /> */}
        <div style={{ display: 'flex', justifyContent: 'start' }}>
          <h1 className={styles.logo}>AreWeHiring</h1>
          <ul className={styles.navLink}>
            <li className={styles.navLinkItems}>
              <Button href="/dashboard" type="link" className={styles.dropDown}>
                Home
              </Button>
            </li>
            <li className={styles.navLinkItems}>
              <Button
                type="link"
                href="/dashboard/candidate"
                className={styles.dropDown}
              >
                For Candidates
              </Button>
            </li>
            <li className={styles.navLinkItems}>
              <Dropdown overlay={menu}>
                <Button
                  type="link"
                  href="/dashboard/employee/post-job"
                  className={styles.dropDown}
                >
                  For Employers
                </Button>
              </Dropdown>
            </li>
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
                href="/dashboard/reset-password"
                type="link"
                className={styles.dropDown}
              >
                Reset Password
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
            {/* {token && (
              <Dropdown overlay={accountSettingMenu}>
                <a
                  // className={styles.dropDown}
                  // className="ant-dropdown-link"
                  onClick={e => e.preventDefault()}
                >
                  Account Settings
                </a>
              </Dropdown>
              <Button
                onClick={() => handleLogout()}
                type="link"
                className={styles.dropDown}
              >
                Account Setting
              </Button>
            )} */}
          </ul>
        </div>
        {/* <div style={{ marginRight: '1rem' }}>
          <Divider className={styles.divider} type="vertical"></Divider>
          <img
            alt=""
            src={user}
            style={{ width: '25px', marginRight: '0.5rem' }}
          />
          <Dropdown overlay={menu}>
            <Text className={styles.dropDown}>
              Hi, Richard
              <DownOutlined style={{ marginLeft: '0.3rem' }} />
            </Text>
          </Dropdown>
        </div> */}
      </div>
    </Header>
  );
};

export default CustomeHeader;
