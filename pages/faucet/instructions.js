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

exports.data = {
    menu: "Instructions",
    title: 'Get Free Bitcoin instructions',
    key: 'instructions'
}

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
                <div>
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

        )
    }

}
