import React from 'react'
import {Container} from 'react-responsive-grid'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Headroom from 'react-headroom'
import convertPages from '../../utils/url'
import {CoinMenu, CoinBreadcrumbItem, folderMeta} from '../../utils/coinmenu'
import '../../css/markdown-styles'

import {rhythm} from '../../utils/typography'
import amphtml from 'react-amphtml'

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

const ampScripts = [];
const addScript = script => ampScripts.push(script);

const AmpAnalytics = amphtml('analytics', addScript);

module.exports = React.createClass({
    propTypes() {
        return {children: React.PropTypes.any}
    },
    page() {
        const loc = this.props.location.pathname;
        const l = this.props.route.pages.length;
        for (var i = 0; i < l; i++) {
            if (this.props.route.pages[i].path === loc) {
                return this.props.route.pages[i].data;
            }
        }
        return undefined;
    },
    folders() {
        const loc = this.props.location.pathname;
        const ps = loc.substring(1, loc.length - 1);
        const path = ps.length > 1
            ? ps.split("/")
            : [""];
        return path;
    },
    urls() {
        return convertPages(this.props.route.pages);
    },
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
    },
    render() {
        const page = this.page();
        const folders = this.folders();
        const fl = folders.length;
        const sl = folders.slice(0, fl - 1);
        console.log(sl);
        return (
            <div>
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
                                <CoinMenu selectedKeys={[page.key]} doKeys={sl.map((name) => folderMeta[name].key)} data={this.urls()}/>
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
                                        {fl > 1 && sl.map((name,index) => (
                                          <CoinBreadcrumbItem key={index} name={name} />
                                        ))}
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

                <AmpAnalytics type="googleanalytics" id="analytics1">
                    <script type="application/json" dangerouslySetInnerHTML={{
                        __html: ` { "vars": { "account": "UA-89070820-1" }, "triggers": { "trackPageview": { "on": "visible", "request": "pageview" }, "scrollPings": { "on": "scroll", "scrollSpec": { "verticalBoundaries": [20, 60, 100, 140, 180, 220, 260] }, "request": "event", "vars": { "eventCategory": "page", "eventAction": "scroll" } }, "trackimgClicks": { "on": "click", "selector": "#addressimg", "request": "event", "vars": { "eventCategory": "click", "eventAction": "addressimg" } }, "trackInputClicks": { "on": "click", "selector": "input", "request": "event", "vars": { "eventCategory": "click", "eventAction": "input" } }, "trackButtonClicks": { "on": "click", "selector": "button", "request": "event", "vars": { "eventCategory": "click", "eventAction": "button" } }, "pageTimer": { "on": "timer", "timerSpec": { "interval": 30, "maxTimerLength": 600 }, "request": "event", "vars": { "eventCategory": "page", "eventAction": "timer" } } } } `
                    }}></script>
                </AmpAnalytics>
            </div>
        )
    }
})
