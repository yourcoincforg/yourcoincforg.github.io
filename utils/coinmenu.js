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

const folderMeta = {
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

const CoinSubMenu = ({name, folder}) => {
    console.log(name);
    console.log(folder);
    console.log(folderMeta[name].key);
    return (
        <SubMenu key={folderMeta[name].key} title="Faucet" >
            {folder.hasOwnProperty("pages") && folder.pages.map((page) => (
                <Menu.Item key={page.data.key}>{page.data.title}</Menu.Item>
            ))}
        </SubMenu>
    )
}

const CoinMenu = ({selectedKeys, doKeys, data}) => {
    return (
        <Menu mode="inline" theme="dark" defaultSelectedKeys={selectedKeys} defaultOpenKeys={doKeys}>
            {data.hasOwnProperty("pages") && data.pages.map((page) => (
                <Menu.Item key={page.data.key}>{page.data.title}</Menu.Item>
            ))}
            {data.hasOwnProperty("folders") && Object.keys(data.folders).map((f, index) => (
                <CoinSubMenu key={index} name={f} folder={data.folders[f]}/>
            ))}
        </Menu>
    )
}

export default CoinMenu
