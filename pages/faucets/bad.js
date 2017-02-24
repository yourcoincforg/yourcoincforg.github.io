import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import heads from '../../utils/head'
import {badData} from '../../utils/baddata'
import styles from './../index.css'
import Helmet from 'react-helmet'
import {config} from 'config'
import {Table, Icon, Button, notification} from 'antd'
import 'antd/dist/antd.less'

exports.data = {
    menu: "Not paying",
    title: 'NOT paying',
    key: 'bad'
}

export default class Bad extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            info: {},
            message: 'Success!',
            description: 'initial',
            success: false,
            type: 'success',
            action: 'Close',
            duration: 5,
            url: ''
        };
    }

    handleRequestClose = () => {
        if (this.state.success) {
            window.location = this.state.url;
        }
    }

    clickHandler = (url) => {
        this.setState({
            duration: 2,
            success: true,
            type: 'success',
            message: 'Success !',
            description: "Redirecting",
            action: 'GO',
            url: url
        }, () => this.openNotification());
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

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)
        }, {
            title: '',
            dataIndex: 'url',
            key: 'url',
            render: url => <Button type="primary" shape="circle" icon="link" onClick={() => this.clickHandler(url)}/>
        }
    ]

    render() {
        return (
            <div>
                {heads()}
                <Helmet link={[{
                        "rel": "canonical",
                        "href": "https://www.yourcoin.cf/faucets/highest",
                        "itemProp": "url"
                    }
                ]} meta={[
                    {
                        "name": "twitter:card",
                        "content": "summary"
                    }, {
                        "name": "twitter:site",
                        "content": "@yourcoin_cf"
                    }, {
                        "name": "twitter:title",
                        "content": config.siteTitle
                    }, {
                        "name": "twitter:description",
                        "content": config.description
                    }, {
                        "name": "twitter:image",
                        "content": "https://www.yourcoin.cf/images/images2.jpg"
                    }, {
                        "name": "og:site_name",
                        "content": "FaucetHub Highest Paying Faucets"
                    }, {
                        "name": "og:type",
                        "content": "article"
                    }, {
                        "name": "og:title",
                        "content": config.siteTitle
                    }, {
                        "name": "og:description",
                        "content": config.description
                    }, {
                        "name": "og:image",
                        "content": "https://www.yourcoin.cf/images/images2.jpg"
                    }, {
                        "name": "og:url",
                        "content": config.url
                    }, {
                        "property": "article:tag",
                        "content": "Highest Paying Faucet"
                    }, {
                        "property": "article:tag",
                        "content": "Faucet Hot List"
                    }, {
                        "property": "article:tag",
                        "content": "Bitcoin"
                    }, {
                        "property": "article:tag",
                        "content": "blockchain"
                    }, {
                        "property": "article:section",
                        "content": "earn bitcoins"
                    }, {
                        "property": "article:published_time",
                        "content": "2017-10-01T12:10Z"
                    }, {
                        "property": "article:modified_time",
                        "content": "2017-10-01T12:10Z"
                    }
                ]} script={[
                    {
                        "src": "//cdn.ampproject.org/v0.js",
                        "async": "async"
                    }, {
                        "src": "//cdn.ampproject.org/v0/amp-analytics-0.1.js",
                        "async": "async",
                        "custom-element": "amp-analytics"
                    }, {
                        "src": "//cdn.polyfill.io/v2/polyfill.js?features=fetch,Promise&gated=1",
                        "async": "async",
                        "type": "text/javascript"
                    }
                ]}/>
                <meta itemProp="lastReviewed" content="2017-10-01T12:10Z"/>
                <div>
                    <p>
                        <a href="http://9m.no/븇꾴">
                            <img src="/images/7c735c3a509d449.png" id="addressimg"/>
                        </a>
                    </p>

                    <br/>
                    <Table columns={this.columns} pagination={{
                        showQuickJumper: true,
                        showSizeChanger: true
                    }} rowKey='name' dataSource={badData}/>
                </div>

            </div>
        )
    }
}
