import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import heads from '../../utils/head'
import styles from './../index.css'
import Helmet from 'react-helmet'
import {config} from 'config'
import {
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

exports.data = {
  menu: "Highest paying",
  title: 'Highest paying faucets',
  key: 'highest'
}

export default class Highest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 0
        };
    }

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
                </div>

            </div>
        )
    }
}
