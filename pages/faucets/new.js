import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import heads from '../../utils/head'
import {newData} from '../../utils/newdata'
import styles from './../index.css'
import Helmet from 'react-helmet'
import {config} from 'config'
import {
  Form,
  Modal,
  Table,
  Icon,
  Tooltip,
  Input,
  InputNumber,
  Rate,
  Button,
  notification
} from 'antd'
import 'antd/dist/antd.less'

const FormItem = Form.Item

exports.data = {
  menu: "New",
  title: 'New faucets',
  key: 'new',
  published_time: '2017-10-01T12:10Z'
}

class FaucetForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible,
      confirmLoading: false,
      message: 'Success!',
      description: 'initial',
      success: false,
      type: 'success',
      action: 'Close',
      duration: 5,
      rate_value: 0
    };
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true
    }, () => {
      this.handle_submit();
    });
  }

  handleCancel = () => {
    this.setState({visible: false});
  }

  handle_submit = () => {
    //e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.createNew(values);
      } else {
        this.setState({confirmLoading: false});
      }
    });
  }

  createNew = (values) => {

    fetch(config.apiurl, {
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({"method": "faucet_new", "params": [values], "id": 1, "jsonrpc": "2.0"})
    }).then(response => {
      // console.log(response);
      if (response.status === 200) {
        return response.json()
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }).then(r => {
      console.log(r);
      if (!r.hasOwnProperty("error") && r.hasOwnProperty("result") && r.result.status === "SuccessFull") {
        this.setState({
          visible: false,
          confirmLoading: false
        }, () => {
          this.props.onNotify({type: 'success', duration: 30, message: 'Success!', description: 'Your faucet have been submited and after moderation review will be included !', action: 'Ok'});
        });
      } else {
        var msg = "";
        if (r.hasOwnProperty("error")) {
          msg = r.error;
        } else {
          msg = r.result.status;
        }
        var error = new Error(msg);
        error.response = r;
        throw error
      }
    }).catch(error => {
      console.log(error);
      this.setState({
        visible: false,
        confirmLoading: false
      }, () => {
        this.props.onNotify({duration: 10, type: 'error', message: 'Error !', description: 'Try again later !', action: 'Ok'});
      });
    });

  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    };
    return (
      <Modal title="New Faucet" visible={this.state.visible} onOk={this.handleOk} confirmLoading={this.state.confirmLoading} onCancel={this.handleCancel}>
        <Form onSubmit={this.handle_submit} method="post">
          <FormItem {...formItemLayout} label={(
            <span>
              Name&nbsp;
              <Tooltip title="Faucet Name">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )} hasFeedback>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input faucet name!'
                }
              ]
            })(
              <Input addonBefore={< Icon type = "user" />} autoComplete="username" id="name" name="name" type="text" placeholder="name"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={(
            <span>
              Interval&nbsp;
              <Tooltip title="Reload Interval">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )} hasFeedback>
            {getFieldDecorator('interval', {
              rules: [
                {
                  pattern: RegExp('^R\/P\\d{1,3}[HM]$'),
                  message: 'Must have the format R/Pd{1,3}[HM] !'
                }, {
                  required: true,
                  message: 'Please input Interval period!'
                }
              ]
            })(
              <Input addonBefore={< Icon type = "reload" />} id="interval" name="interval" type="text" placeholder="R/P20M"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={(
            <span>
              Payment&nbsp;
              <Tooltip title="Payment processor">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )} hasFeedback>
            {getFieldDecorator('payment', {
              rules: [
                {
                  required: true,
                  message: 'Please input Payment processor!'
                }
              ]
            })(
              <Input addonBefore={< Icon type = "credit-card" />} id="payment" name="payment" type="text" placeholder="Directly"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={(
            <span>
              Security&nbsp;
              <Tooltip title="Anti spam Security">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )} hasFeedback>
            {getFieldDecorator('security', {rules: []})(
              <Input addonBefore={< Icon type = "lock" />} id="security" name="security" type="text" placeholder="ReCaptcha"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={(
            <span>
              Payout&nbsp;
              <Tooltip title="Payout amount">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )} hasFeedback>
            {getFieldDecorator('payout', {rules: []})(
              <InputNumber addonBefore={< Icon type = "pay-circle-o" />} id="payout" name="payout" type="number" min={0} step={1.00}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={(
            <span>
              Cashout&nbsp;
              <Tooltip title="Withdraw minimal amount">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )} hasFeedback>
            {getFieldDecorator('cashout', {rules: []})(
              <InputNumber addonBefore={< Icon type = "export" />} id="cashout" name="cashout" type="number" min={0} step={1.00}/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={(
            <span>
              Coin&nbsp;
              <Tooltip title="Coin name">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )} hasFeedback>
            {getFieldDecorator('coin', {rules: []})(
              <Input addonBefore={< Icon type = "pay-circle" />} id="coin" name="coin" type="text" placeholder="Bitcoin"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={(
            <span>
              Url&nbsp;
              <Tooltip title="Internet Url address">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )} hasFeedback>
            {getFieldDecorator('url', {
              rules: [
                {
                  required: true,
                  message: 'Please input faucet url address!'
                }
              ]
            })(
              <Input addonBefore={< Icon type = "link" />} id="url" name="url" type="text" placeholder="https://www."/>
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default class New extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
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

  handleNotification = ({action, message, description, duration, type}) => {
    this.setState({
      duration: duration,
      success: false,
      visible: false,
      type: type,
      message: message,
      description: description,
      action: action
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

  handleAdd = () => {
    this.setState({visible: true});
  }

  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name)
    }, {
      title: 'Interval',
      dataIndex: 'interval',
      key: 'interval'
    }, {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
      sorter: (a, b) => a.payment.localeCompare(b.payment)
    }, {
      title: 'Security',
      dataIndex: 'security',
      key: 'security',
      sorter: (a, b) => a.security.localeCompare(b.security)
    }, {
      title: 'Payout',
      dataIndex: 'payout',
      key: 'payout',
      sorter: (a, b) => a.payout > b.payout
    }, {
      title: 'Cashout',
      dataIndex: 'cashout',
      key: 'cashout'
    }, {
      title: 'Coin',
      dataIndex: 'coin',
      key: 'coin',
      sorter: (a, b) => a.coin.localeCompare(b.coin)
    }, {
      title: '',
      dataIndex: 'url',
      key: 'url',
      render: url => <Button type="primary" shape="circle" icon="link" onClick={() => this.clickHandler(url)}/>
    }
  ]

  render() {
    FaucetForm = Form.create({})(FaucetForm);
    return (
      <div>
        {heads()}
        <Helmet link={[{
            "rel": "canonical",
            "href": "https://www.yourcoin.cf/faucets/new/",
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
            "content": "YourCoin Highest Paying Faucets"
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
          <Button onClick={this.handleAdd} type="primary" icon="plus" size="large">Add New Faucet</Button>
          <br/>
          <FaucetForm visible={this.state.visible} onNotify={this.handleNotification}/>
          <Table columns={this.columns} pagination={{
            showQuickJumper: true,
            showSizeChanger: true
          }} rowKey='name' dataSource={newData}/>
        </div>

      </div>
    )
  }
}
