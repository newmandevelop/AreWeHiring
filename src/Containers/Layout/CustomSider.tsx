import React from 'react';
import styles from './index.module.scss';
import { Layout, Menu, Typography } from 'antd';
import SiderLinks from './../../Content/SiderLinks.json';
const { Sider } = Layout;
const { Item } = Menu;

interface Links {
  name: String;
  link: String;
  type: String;
}
const CustomSider = () => {
  return (
    <Sider width={250} className={styles.Sider}>
      <Menu className={styles.menu}>
        {SiderLinks.links.map((link: Links) => {
          return (
            <Item
              className={
                link.type === 'simple'
                  ? styles.simpleSideLink
                  : styles.boldSideLink
              }
            >
              {link.name}
            </Item>
          );
        })}
      </Menu>
    </Sider>
  );
};
export default CustomSider;
