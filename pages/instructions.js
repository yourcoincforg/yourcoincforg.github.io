import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import heads from '../utils/head'
import styles from './index.css'
import Helmet from 'react-helmet'
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

const SubMenu = Menu.SubMenu
const Step = Steps.Step

export default class Instructions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 0
        };
    }

    handleNext = () => {
        if (this.state.step < this.steps.length - 1) {
            const newstep = this.state.step + 1;
            this.setState({step: newstep});
        } else {
            window.location = 'http://viid.me/qr47dE'
        }
    }

    steps = [
        {
            title: 'Disable Adblocker',
            content: 'If you are using an extension to block ads. Whitelist YourCoin on your extension options to allow ads on it or disable it entirely while surfing on YourCoin.'
        }, {
            title: 'Find YourCoin',
            content: "Go to Google Site and Find YourCoin searching for keywords like ' yourcoin.cf ' or other similar. Follow link to YourCoin !"
        }, {
            title: 'Enter your Address',
            content: 'Find the input text field and enter your Bitcoin address.'
        }, {
            title: 'Validate',
            content: "Find the 'Next Step' Button and click on it to Validate your Bitcoin Address."
        }, {
            title: 'Complete Captcha',
            content: 'Fill the input with the Captcha on display and click on Claim button to Validate.'
        }, {
            title: 'Repeat',
            content: 'Repeat the steps to claim more bitcoins.'
        }, {
            title: 'Withdraw',
            content: 'Exchange your chips and Withdraw your free bitcoins to your wallet.'
        }
    ]

    render() {
        return (
            <div>
                {heads()}
                <Helmet link={[{
                        "rel": "canonical",
                        "href": "https://www.yourcoin.cf/instructions/",
                        "itemProp": "url"
                    }
                ]}/>
                <meta itemProp="lastReviewed" content="2016-21-12T16:10Z"/>

                <div className="ant-layout-aside">
                    <aside className="ant-layout-sider">
                        <div className="ant-layout-logo"></div>
                        <Menu mode="inline" theme="dark" defaultSelectedKeys={['instructions']} defaultOpenKeys={['faucet']}>
                            <Menu.Item key="qrjoLM">Home</Menu.Item>
                            <SubMenu key="faucet" title={< span > <Icon type="user"/>Faucet < /span>}>
                                <Menu.Item key="instructions">Instructions</Menu.Item>
                                <Menu.Item key="freebitcoin">Free bitcoins</Menu.Item>
                            </SubMenu>
                            <SubMenu key="faucets_list" title={< span > <Icon type="laptop"/>Faucets List < /span>}>
                                <Menu.Item key="5">Highest Paying</Menu.Item>
                                <Menu.Item key="6">New Faucets</Menu.Item>
                                <Menu.Item key="7">Not Paying</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </aside>
                    <div className="ant-layout-main">
                        <div className="ant-layout-header"></div>
                        <div className="ant-layout-breadcrumb">
                            <Breadcrumb>
                                <Breadcrumb.Item href="http://viid.me/qrjoLM">
                                    <Icon type="home"/>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <Icon type="user"/>
                                    <span>Faucet</span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <span>Instructions</span>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="ant-layout-container">
                            <div className="ant-layout-content">

                                <h1>Get Free Bitcoin instructions</h1>
                                <br/>

                                <Steps size="small" current={this.state.step}>
                                    {this.steps.map(item => <Step key={item.title} title={item.title}/>)}
                                </Steps>
                                <div className="steps-content">{this.steps[this.state.step].content}</div>
                                <div className="steps-action">
                                    {this.state.step < this.steps.length - 1 && <Button type="primary" onClick={() => this.handleNext()}>Next</Button>
}
                                    {this.state.step === this.steps.length - 1 && <Button type="primary" onClick={() => this.handleNext()}>Read Again</Button>
}
                                </div>
                            </div>
                        </div>
                        <div className="ant-layout-footer">
                            YourCoin © 2016
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}
