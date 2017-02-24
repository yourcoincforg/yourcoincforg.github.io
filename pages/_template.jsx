import React from 'react'
import {Container} from 'react-responsive-grid'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Headroom from 'react-headroom'
import convertPages from '../utils/url'
import {CoinMenu, CoinBreadcrumbItem, folderMeta} from '../utils/coinmenu'
import '../css/markdown-styles'
import {rhythm} from '../utils/typography'
import {
    Menu,
    Breadcrumb,
    Icon,
    Button,
    Form,
    Tooltip,
    Input,
    Steps,
    LocaleProvider,
    notification
} from 'antd'
import 'antd/dist/antd.less'
import enUS from 'antd/lib/locale-provider/en_US'
import amphtml from 'react-amphtml'

const SubMenu = Menu.SubMenu;

const ampScripts = [];
const addScript = script => ampScripts.push(script);

const AmpAnalytics = amphtml('analytics', addScript);

export default class Template extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {},
            message: 'Success!',
            description: 'initial',
            success: false,
            type: 'success',
            action: 'Close',
            duration: 5
        };
    }

    page() {
        const loc = this.props.location.pathname;
        const l = this.props.route.pages.length;
        for (var i = 0; i < l; i++) {
            if (this.props.route.pages[i].path === loc) {
                return this.props.route.pages[i].data;
            }
        }
        return undefined;
    }
    folders() {
        const loc = this.props.location.pathname;
        const ps = loc.substring(1, loc.length - 1);
        const path = ps.length > 1
            ? ps.split("/")
            : [""];
        return path;
    }
    urls() {
        return convertPages(this.props.route.pages);
    }

    handleRequestClose = () => {
        if (this.state.success) {
            const key = this.state.info.key;
            const l = this.props.route.pages.length;
            let path = "";
            for (var i = 0; i < l; i++) {
                if (this.props.route.pages[i].data.key === key) {
                    path = this.props.route.pages[i].path;
                    break;
                }
            }
            console.log(this.props);
            // this.props.history.push(path);
            window.location = window.location.origin + path;
        }
    }

    openNotification = () => {
        const key = `open${Date.now()}`;
        const btnClick = () => {
            notification.close(key);
        };
        const btn = (
            <Button type="primary" size="small" onClick={btnClick}>
                {this.state.action}
            </Button>
        );
        notification[this.state.type]({
            message: this.state.message,
            description: this.state.description,
            btn,
            key,
            onClose: this.handleRequestClose,
            duration: this.state.duration
        });
    }
    handleSelect = (info) => {
        console.log(info);
        console.log(`selected ${info.key}`);
        this.setState({
            info: info,
            duration: 2,
            success: true,
            type: 'success',
            message: 'Success !',
            description: "Redirecting",
            action: 'GO'
        }, () => this.openNotification());
    }
    mock() {
        return {
            folders: {
                faucets: {
                    pages: [
                        {
                            data: {
                                key: 'bad',
                                title: "NOT paying"
                            },
                            path: 'bad'
                        }
                    ]
                }
            }
        }
    }
    render() {
        const page = this.page();
        const folders = this.folders();
        var fl = folders.length;
        const sl = folders.slice(0, fl - 1);
        fl = sl.length;
        return (
            <div>
                <LocaleProvider locale={enUS}>
                    <article className="window-frame focus">
                        <header className="top-bar">
                            <div className="controls">
                                <div className="control close"/>
                                <div className="control minify"/>
                                <div className="control expand"/>
                            </div>
                        </header>
                        <section className="window-content">
                            <div className="ant-layout-aside">
                                <aside className="ant-layout-sider">
                                    <div className="ant-layout-logo">
                                        <span>YOUR COIN</span>
                                    </div>
                                    <CoinMenu selectedKeys={[page.key]} doKeys={sl.map((name) => folderMeta[name].key)} data={this.urls()} onSelect={this.handleSelect}/>
                                </aside>
                                <div className="ant-layout-main">
                                    <div className="ant-layout-header">
                                        <h1>{page.title}</h1>
                                    </div>
                                    <div className="ant-layout-breadcrumb">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="http://viid.me/qrjoLM">
                                                <Icon type="home"/>
                                            </Breadcrumb.Item>
                                            {sl.map((name, index) => (
                                                <Breadcrumb.Item key={folderMeta[name].key}>
                                                    <Icon type={folderMeta[name].icon}/>
                                                    <span>{folderMeta[name].title}</span>
                                                </Breadcrumb.Item>
                                            ))
}
                                            <Breadcrumb.Item>
                                                <span>{page.menu}</span>
                                            </Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                    <div className="ant-layout-container">
                                        <div className="ant-layout-content">
                                            {this.props.children}
                                        </div>
                                    </div>
                                    <div className="ant-layout-footer">
                                        YourCoin © 2017
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </LocaleProvider>
                <AmpAnalytics type="googleanalytics" id="analytics1">
                    <script type="application/json" dangerouslySetInnerHTML={{
                        __html: ` { "vars": { "account": "UA-89070820-1" }, "triggers": { "trackPageview": { "on": "visible", "request": "pageview" }, "scrollPings": { "on": "scroll", "scrollSpec": { "verticalBoundaries": [20, 60, 100, 140, 180, 220, 260] }, "request": "event", "vars": { "eventCategory": "page", "eventAction": "scroll" } }, "trackimgClicks": { "on": "click", "selector": "#addressimg", "request": "event", "vars": { "eventCategory": "click", "eventAction": "addressimg" } }, "trackInputClicks": { "on": "click", "selector": "input", "request": "event", "vars": { "eventCategory": "click", "eventAction": "input" } }, "trackButtonClicks": { "on": "click", "selector": "button", "request": "event", "vars": { "eventCategory": "click", "eventAction": "button" } }, "pageTimer": { "on": "timer", "timerSpec": { "interval": 30, "maxTimerLength": 600 }, "request": "event", "vars": { "eventCategory": "page", "eventAction": "timer" } } } } `
                    }}></script>
                </AmpAnalytics>
            </div>
        )
    }
}
