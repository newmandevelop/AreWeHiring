import React from 'react';
import { Layout, Divider, Menu, Dropdown } from 'antd';
import styles from './index.module.scss';
import user from '../../assets/user.png';
import {
  UserAddOutlined,
  SettingOutlined,
  DownOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
const CustomeHeader = () => {
  const menu = () => (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={styles.header}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'start' }}>
          <h1 className={styles.logo}>AreWeHiring</h1>
          <Divider className={styles.divider} type="vertical"></Divider>
          <ul className={styles.navLink}>
            <li className={styles.navLinkItems}>
              <Dropdown overlay={menu}>
                <a
                  className={styles.dropDown}
                  onClick={e => e.preventDefault()}
                >
                  Home
                  <DownOutlined style={{ marginLeft: '0.3rem' }} />
                </a>
              </Dropdown>
            </li>
            <li className={styles.navLinkItems}>
              <Dropdown overlay={menu}>
                <a
                  className={styles.dropDown}
                  onClick={e => e.preventDefault()}
                >
                  For Candidates
                  <DownOutlined style={{ marginLeft: '0.3rem' }} />
                </a>
              </Dropdown>
            </li>
            <li className={styles.navLinkItems}>
              <Dropdown overlay={menu}>
                <a
                  className={styles.dropDown}
                  onClick={e => e.preventDefault()}
                >
                  For Employers
                  <DownOutlined style={{ marginLeft: '0.3rem' }} />
                </a>
              </Dropdown>
            </li>{' '}
            <li className={styles.navLinkItems}>Blog</li>
          </ul>
        </div>
        <div style={{ marginRight: '1rem' }}>
          <Divider className={styles.divider} type="vertical"></Divider>
          <img
            src={user}
            style={{ width: '25px', marginRight: '0.5rem' }}
          ></img>
          <Dropdown overlay={menu}>
            <a className={styles.dropDown} onClick={e => e.preventDefault()}>
              Hi, Maaz
              <DownOutlined style={{ marginLeft: '0.3rem' }} />
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default CustomeHeader;
