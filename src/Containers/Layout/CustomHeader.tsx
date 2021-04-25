import React from 'react';
import { Layout, Divider, Menu, Dropdown, Button, Typography } from 'antd';
import styles from './index.module.scss';
import user from '../../assets/user.png';
import { DownOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

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
          <ul className={styles.navLink}>
            <li className={styles.navLinkItems}>
              <Dropdown overlay={menu}>
                <Button type="link" className={styles.dropDown}>
                  Home
                </Button>
              </Dropdown>
            </li>
            <li className={styles.navLinkItems}>
              <Dropdown overlay={menu}>
                <Button type="link" className={styles.dropDown}>
                  For Candidates
                </Button>
              </Dropdown>
            </li>
            <li className={styles.navLinkItems}>
              <Dropdown overlay={menu}>
                <Button type="link" className={styles.dropDown}>
                  For Employers
                </Button>
              </Dropdown>
            </li>
            <Dropdown overlay={menu}>
              <Button type="link" className={styles.dropDown}>
                Blog
              </Button>
            </Dropdown>
          </ul>
        </div>
        <div style={{ marginRight: '1rem' }}>
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
        </div>
      </div>
    </Header>
  );
};

export default CustomeHeader;
