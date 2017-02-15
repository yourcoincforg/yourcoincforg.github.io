import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import heads from '../../utils/head'
import styles from './../index.css'
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
const FormItem = Form.Item

exports.data = {
  title: 'Claim your free coin',
  key: 'freebitcoin'
}

export default class Freebitcoin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            message: 'Success!',
            description: 'initial',
            success: false,
            type: 'success',
            action: 'Close',
            duration: 5
        };
    }

    handleRequestClose = () => {

        if (this.state.success) {
            window.location = 'http://viid.me/qrjoLM';
        } else {
            if (this.state.failure === 428) {
                window.location = 'http://viid.me/qr47dE';
            } else {
                window.location = 'http://viid.me/qt1rAb';
            }
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

    handle_submit = (e) => {
        e.preventDefault();
        this.setState({success: false});
        const forms = document.getElementsByTagName('form');
        if (forms) {
            const form = forms[0];
            const adcopy_challenge = form.elements[1].value;
            const adcopy_response = form.elements[0].value;

            fetch(config.apiurl + 'claim', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.faucet.v1+json'
                },
                method: "POST",
                body: JSON.stringify({'adcopy_challenge': adcopy_challenge, 'adcopy_response': adcopy_response})
            }).then(response => {
                console.log(response);

                if (response.status === 202) {
                    console.log('is 202 true')
                    this.setState({
                        description: 'You got a White CHIP !',
                        step: 2,
                        action: 'CLAIM',
                        type: 'success',
                        success: true,
                        duration: 10,
                        message: 'Success!',
                    }, () => this.openNotification());
                } else {
                    this.setState({failure: response.status});
                    var error = new Error(response.statusText)
                    error.response = response
                    throw error
                }

            }).catch(error => {
                console.log(error);
                let description = 'Try again later';
                let action = 'Retry !';
                if (this.state.failure === 428) {
                    description = 'Incorrect order of actions, see Instructions !';
                    action = 'Read Instructions !';
                } else if (this.state.failure === 406) {
                    description = 'Incorrectly entered Captcha !'
                }
                this.setState({
                    success: false,
                    duration: 10,
                    type: 'error',
                    message: 'Error !',
                    description: description,
                    action: action
                }, () => this.openNotification());
            });
        }
    }

    render() {
        return (
            <div>
                {heads()}
                <Helmet link={[{
                        "rel": "canonical",
                        "href": "http://www.yourcoin.cf/freebitcoin/",
                        "itemProp": "url"
                    }
                ]} script={[
                    {
                        "src": "//api.solvemedia.com/papi/challenge.ajax",
                        "async": "async",
                        "type": "text/javascript"
                    }, {
                        "src": "//cdn.polyfill.io/v2/polyfill.js?features=fetch,Promise&gated=1",
                        "async": "async",
                        "type": "text/javascript"
                    }
                ]}/>
                <meta itemProp="lastReviewed" content="2016-19-12T16:10Z"/>

                <div className="ant-layout-aside">
                    <aside className="ant-layout-sider">
                        <div className="ant-layout-logo"></div>
                        <Menu mode="inline" theme="dark" defaultSelectedKeys={['freebitcoin']} defaultOpenKeys={['faucet']}>
                            <Menu.Item key="qrjoLM">Home</Menu.Item>
                            <SubMenu key="faucet" title={< span > <Icon type="user"/>Faucet < /span>}>
                                <Menu.Item key="1">Instructions</Menu.Item>
                                <Menu.Item key="freebitcoin">Free bitcoins</Menu.Item>
                            </SubMenu>
                            <SubMenu key="faucets_list" title={< span > <Icon type="folder"/>Faucets List < /span>}>
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
                                    <span>Free bitcoins</span>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="ant-layout-container">
                            <div className="ant-layout-content">
                                <div>
                                    <h1>Claim your free coin</h1>

                                    <p>
                                        <a href="http://9m.no/븇꾴">
                                            <img src="/images/7c735c3a509d449.png" id="addressimg"/>
                                        </a>
                                    </p>

                                    <br/>
                                    <br/>

                                    <Steps current={this.state.step}>
                                        <Step title="Enter your bitcoin address"/>
                                        <Step title="Complete Captcha"/>
                                        <Step title="Claim"/>
                                    </Steps>

                                    <form onSubmit={this.handle_submit}>
                                        <div id="acwidget" className="steps-content"></div>
                                        <div className="steps-action">
                                            <Button type="primary" htmlType="submit">Claim</Button>
                                        </div>
                                    </form>
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
