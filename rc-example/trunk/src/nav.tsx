import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Icon
} from 'antd';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export type NavProps = {
}

/**
 * @todo
 * 子应用定义各自的路由，
 * 而不需要添加任何前缀。
 */
class Nav extends Component<NavProps, any> {
  constructor(props: NavProps) {
    super(props);
  }

  render() {
    return (
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="app1" title={<span><Icon type="user" />RC应用</span>}>
          <Menu.Item key="app1_0">
            <Link to="/app/app1">
              首页
            </Link>
          </Menu.Item>
          <Menu.Item key="app1_1">
            <Link to="/app/app1/page1">
              page1
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="app2" title={<span><Icon type="user" />本地应用</span>}>
          <Menu.Item key="app2_0">
            <Link to="/fuck">
              首页
            </Link>
          </Menu.Item>
        </SubMenu>
        <MenuItem key="tarot">
          <Link to="/app/tarot">
            塔罗应用
          </Link>
        </MenuItem>
        <MenuItem key="app3">
          <Link to="/app/help">
            Angular应用
          </Link>
        </MenuItem>
      </Menu>
    );
  }
}

export default Nav;
