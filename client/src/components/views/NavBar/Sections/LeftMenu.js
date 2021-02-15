import React from 'react'
import { Menu } from 'antd'
import { useSelector } from 'react-redux'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

function LeftMenu(props) {
  const user = useSelector(state => state.user)
  let homeLink = '/login'
  if (user.userData && user.userData.isAuth) {
    homeLink = '/landing'
  }

  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href={homeLink}>Home</a>
      </Menu.Item>
      <Menu.Item key="diary">
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
