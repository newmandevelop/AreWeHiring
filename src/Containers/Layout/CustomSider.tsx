import React from 'react';
import styles from './index.module.scss';
import { Layout, Menu, Typography, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { logoutUser, removeRole, getRole } from '../../utils/sessionStorage';
import employerLinks from '../../Content/employerLinks.json';
import candidateLinks from '../../Content/candidateLinks.json';
import { CANDIDATE, EMPLOYER, RECRUITER } from '../../Content/Roles';
const { Sider } = Layout;
const { Item } = Menu;
interface Links {
  name: String;
  link: string;
  type: String;
}
const CustomSider = () => {
  const history = useHistory();
  const role = getRole();
  const handleLogout = () => {
    logoutUser();
    removeRole();
    history.push('/');
  };

  return (
    <Sider width={250} className={styles.Sider}>
      {role === CANDIDATE && (
        <Menu className={styles.menu}>
          {candidateLinks.links.map((link: Links, index) => {
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
                  <button
                    onClick={() => handleLogout()}
                    style={{ all: 'unset' }}
                  >
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
      )}

      {role === EMPLOYER ||
        (role === RECRUITER && (
          <Menu className={styles.menu}>
            {employerLinks.links.map((link: Links, index) => {
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
                    <button
                      onClick={() => handleLogout()}
                      style={{ all: 'unset' }}
                    >
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
        ))}
    </Sider>
  );
};
export default CustomSider;
