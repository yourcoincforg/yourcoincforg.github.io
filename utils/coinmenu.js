import React from 'react'
import Helmet from "react-helmet"
import {config} from 'config'

import {
    Menu,
    Breadcrumb,
    Icon,
    Button,
    Form,
    Tooltip,
    Input,
    Steps,
    notification
} from 'antd'
import 'antd/dist/antd.less'

const SubMenu = Menu.SubMenu;

export const folderMeta = {
    faucet: {
        key: 'faucet',
        icon: "user",
        title: "Faucet"
    },
    faucets: {
        key: 'faucets',
        icon: "laptop",
        title: "Faucets List"
    }
}

export const CoinBreadcrumbItem = ({name, ...rest}) => {
  return (
    <Breadcrumb.Item key={folderMeta[name].key} {...rest}>
        <Icon type={folderMeta[name].icon}/>
        <span>{folderMeta[name].title}</span>
    </Breadcrumb.Item>
  )
}

const CoinSubMenu = ({
    name,
    folder,
    ...rest
}) => {
    return (
        <SubMenu key={folderMeta[name].key} title={< span > <Icon type={folderMeta[name].icon}/>
            {folderMeta[name].title} < /span>} {...rest}>
            {folder.hasOwnProperty("pages") && folder.pages.map((page) => (
                <Menu.Item key={page.data.key}>{page.data.menu}</Menu.Item>
            ))}
        </SubMenu>
    )
}

export const CoinMenu = ({selectedKeys, doKeys, data}) => {
    return (
        <Menu mode="inline" theme="dark" defaultSelectedKeys={selectedKeys} defaultOpenKeys={doKeys}>
            {data.hasOwnProperty("pages") && data.pages.map((page) => (
                <Menu.Item key={page.data.key}>{page.data.title}</Menu.Item>
            ))}
            {data.hasOwnProperty("folders") && Object.keys(data.folders).map((f, index) => (<CoinSubMenu key={index} name={f} folder={data.folders[f]}/>))}
        </Menu>
    )
}
