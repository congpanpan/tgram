
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, message, Row, Col, Card, Icon, Tabs, Table, Pagination, Button } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import WindowSize from 'components/windowSize'
const TabPane = Tabs.TabPane


@connect(
    (state, props) => ({
      config: state.config,
    })
)
export default class list extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = { 
      editorShow: false,
      reply: {},
      list:[
        {
          id: 1,
          name: "樊翊中",
          time: "2015-11-25 15:56:21",
          content: "网综系统通讯录里面的数据是那里采集来的？",
        },
        {
          id: 2,
          name: "肚皮叔",
          time: "2016-11-11 11:11:11",
          content: "忽悠来的",
        }
      ]
    }
    this.updateState = this.updateState.bind(this)
    this.submit = this.submit.bind(this)
    this.cancel = this.cancel.bind(this)
    this.reply = this.reply.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    console.log(this.props.params)
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `系统公告详情${this.props.params.pageId}`,
        key: `/talkPage/${this.props.params.pageId}`,
      }))
    }
  }

  _tabChange(){

  }

  submit(){
    this.setState({editorShow: false})
  }

  cancel(){
    this.setState({editorShow: false})
  }

  updateState(){
    this.setState({})
  }

  reply(){
    this.setState({editorShow: true})
  }

  render() {
    const self = this
    const list = this.state.list.map((item, index) => {
      return (
        <div key={index} className={index == 0 ? "ant-card ant-card-bordered host" : "ant-card ant-card-bordered"}>
          <div className="ant-card-head">
            <h3 className="ant-card-head-title">
              <Icon type="user" />
              <span className="name">{item.name}</span>
              <span className="time-wrap">{index == 0 ? "发表于" : "回复于"} <span className="time">{item.time}</span></span>
            </h3>
          </div>
          <div className="ant-card-extra">
            <span>{index + 1}楼{index == 0 ? "(楼主)" : null}</span>
          </div>
          <div className="ant-card-body">
            {item.content}
          </div>
          <div className="ant-card-btm">
            <span onClick={this.reply} className="link">回复</span>
          </div>
        </div>
      )
    })
    return (
      <div className="body talkPage" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        <Panel>
          <h3>请留言</h3>
          {list}
          <div className={this.state.editorShow ? "editor-wrap clearfix" : "editor-wrap hide clearfix"}>
            <textarea placeholder="请输入"></textarea>
            <div className="pull-right buttons">
              <Button onClick={this.submit} type="primary">提交</Button>
              <Button onClick={this.cancel}>取消</Button>
            </div>
          </div>
          <div className="ant-table-pagination">
            <Pagination current={1} pageSize={10} totle={50} />
          </div>
        </Panel>
      </div>
    )
  }
}
