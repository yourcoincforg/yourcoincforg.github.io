import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import heads from '../utils/head'
import styles from './index.css'
import Helmet from 'react-helmet'
import {config} from 'config'

export default class Index extends React.Component {

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
                        "href": "https://www.yourcoin.cf/",
                        "itemProp": "url"
                    }
                ]} meta={[
                    {
                        "name": "twitter:card",
                        "content": "summary"
                    }, {
                        "name": "twitter:site",
                        "content": "@FaucetHub"
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
                        "content": "2016-15-12T12:10Z"
                    }, {
                        "property": "article:modified_time",
                        "content": "2016-15-12T12:10Z"
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
                <meta itemProp="lastReviewed" content="2016-15-12T12:10Z"/>
                <div>
                    <h1>Easy Money Giveaway</h1>

                    <p>
                        <a href="http://9m.no/븇꾴">
                            <img src="/images/7c735c3a509d449.png" id="addressimg"/>
                        </a>
                    </p>

                    <h2>Bitcoin</h2>
                    <p>Unlike credit card networks like Visa and payment processors like Paypal, bitcoin is not owned by an individual or company. Bitcoin is the world's first completely open payment network which anyone with an internet connection can participate in. Bitcoin was designed to be used on the internet, and doesn't depend on banks or private companies to process transactions.</p>
                    <p>Bitcoin is a new online payment system for peer-to-peer transactions - system for the digital age. People can use bitcoin for instant and secure transfer of value anywhere in the world. Bitcoin is like cash, but with digital benefits. Bitcoin has no central authority - instead it is an open network which is managed by its users. Bitcoin use the P2P system - users can transact directly without needing an intermediary.</p>

                    <p>Bitcoin is completely anonymous and decentralized currency, which operates worldwide. Bitcoin has some similarities with electronic money,but the principle of complete anonymity, lack of control and limited edition set it apart from the work of electronic payment systems. Coin Bitcoin is divisible up to 8 decimal places. 0.00000001 BTC is the minimal fraction of Bitcoin.</p>

                    <p>1 BTC = 1 Bitcoin (1 BTC).</p>
                    <p>0.01 BTC = 1 cBTC (1 Bitset, 1 Bitcoin cent).</p>
                    <p>0.001 BTC = 1 mBTC (1 Milli-bitcoin).</p>
                    <p>0.000001 BTC = 1 micro-bitcoin.</p>
                    <p>0.00000001 BTC = 1 Satoshi (smallest fraction of a coin bitcoin, named after the Creator of Bitcoin, Satoshi Nakamoto)</p>

                    <h2>How to get free bitcoins</h2>
                    <p>Free Bitcoin faucets are getting more popular day by day because bitcoin is getting more famous. We can buy products with the use of bitcoin. Recharging Mobiles with Bitcoin , Buy gifts with bitcoins etc. Not everyone is technically strong to earn bitcoin by doing mining work, or freelancer works. So best source to earn Free Bitcoin is faucets, where we can earn handsome amount of free bitcoin by filling simple captchas. Here in this page I am providing some faucets verified to pay.</p>

                    <h2>Blockchain</h2>
                    <p>The blockchain is a technology that underlies bitcoin—conceived in 2008 and first implemented in 2009—where it serves as the public ledger for all transactions. In the bitcoin case, every compatible client is able to connect to the network, send new transactions to it, verify transactions, and take part in the competition to create new blocks. The competition creating new blocks is known as mining.The bitcoin design has been the inspiration for other applications.</p>
                    <p>The faucets given below are easy to earn and Quick. Also paying to Faucetbox or Directly to your Bitcoin wallet.</p>

                    <h2>Bitcoin Faucets</h2>
                    <p>Free Bitcoin faucets are a reward system, in the form of a website or app, that dispenses rewards in the form of a satoshi, which is a hundredth of a millionth BTC, for visitors to claim in exchange for completing a captcha or task as described by the website. There are also faucets that dispense alternative cryptocurrencies.</p>
                    <p>Named after real faucets, bitcoin faucets dispense cryptocurrencies instead of water.</p>
                    <p>Rewards are dispensed at various predetermined intervals of time. Faucets usually give fractions of a bitcoin, but the amount will typically fluctuate according to the value of bitcoin. Typical payout per transaction is less than 1000 satoshi,[note 1] although some faucets also have random larger rewards. To reduce mining fees, faucets normally save up these small individual payments in their own ledgers, which then add up to make a larger payment that is sent to a user's bitcoin address.</p>

                    <h2>Bitcoin Address</h2>
                    <p>A Bitcoin address, or simply address, is an identifier of 26-35 alphanumeric characters, beginning with the number 1 or 3, that represents a possible destination for a bitcoin payment. Addresses can be generated at no cost by any user of Bitcoin. For example, using Bitcoin Core, one can click "New Address" and be assigned an address. It is also possible to get a Bitcoin address using an account at an exchange or online wallet service.</p>

                    <p>There are currently two address formats in common use:</p>

                    <p>Common P2PKH which begin with the number 1, eg: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2.</p>
                    <p>Newer P2SH type starting with the number 3, eg: 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy.</p>

                    <p>Bitcoin's core protocol is viewable by anyone, has been vetted by thousands of security researchers around the world, and has proven to be robust and reliable after immense scrutiny. Using bitcoin is similar to using other private applications on the internet, such as email or online banking. Just like these other web services, you must access your bitcoin with a password in order to ensure only you have access to your money</p>
                    <br/>
                    <br/>

                </div>

            </div>
        )
    }
}
