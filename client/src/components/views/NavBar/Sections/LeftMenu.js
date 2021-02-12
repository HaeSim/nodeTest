import React from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="chat">
        <a href="/diary">Diary</a>
      </Menu.Item>
      <SubMenu title={<span>Analysis</span>}>
        <MenuItemGroup title="Time">
          <Menu.Item key="setting:1">select_1</Menu.Item>
          <Menu.Item key="setting:2">select_2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Category">
          <Menu.Item key="setting:3">select_1</Menu.Item>
          <Menu.Item key="setting:4">select_2</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default LeftMenu
