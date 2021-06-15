import React from 'react';
import styles from './index.module.scss';
import { Layout, Menu, Typography, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { logoutUser, removeRole } from '../../utils/sessionStorage';
import SiderLinks from './../../Content/SiderLinks.json';
const { Sider } = Layout;
const { Item } = Menu;
interface Links {
  name: String;
  link: string;
  type: String;
}
const CustomSider = () => {
  const history = useHistory();
  const handleLogout = () => {
    logoutUser();
    removeRole();
    history.push('/');
  };

  return (
    <Sider width={250} className={styles.Sider}>
      <Menu className={styles.menu}>
        {SiderLinks.links.map((link: Links, index) => {
          return (
            <Item
              key={index}
              className={
                link.type === 'simple'
                  ? styles.simpleSideLink
                  : styles.boldSideLink
              }
            >
              {link.name !== 'Logout' && (
                <Typography.Link style={{ color: 'gray' }} href={link.link}>
                  {link.name}
                </Typography.Link>
              )}
              {link.name === 'Logout' && (
                <button onClick={() => handleLogout()} style={{ all: 'unset' }}>
                  <Typography.Link style={{ color: 'gray' }}>
                    {link.name}
                  </Typography.Link>{' '}
                </button>
              )}
              {/* <Badge
                style={{
                  marginLeft: '20px',
                  backgroundColor: '#3489cf',
                  fontSize: '10px',
                }}
                count={5}
              /> */}
            </Item>
          );
        })}
      </Menu>
    </Sider>
  );
};
export default CustomSider;
