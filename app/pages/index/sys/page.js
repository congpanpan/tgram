
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, message, Row, Col, Card, Icon, Tabs, Table } from 'antd'
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
      list:[
        {
          id:1,
          title:'培训教材下载',
          name:'培训教材下载',
          text:'以下问题为在平台中可能会出现的，若有其他问题补充可联系管理员。'+
                '1、  登陆不了平台跳回登陆页：确认通讯录身份证号和PKI证书中是否一致或PKI姓名与通讯录上是否一致'+
                '2、  登陆报错： IP地址不在允许范围内，请联系管理员'+
                '3、  数据搜索权限不够：在主界面系统公告中下载系统权限申请表，填好单位分管领导签字再交单位科技科'+
                '4、  登陆后出现主界面空白页：按CTRL + F5进行刷新'+
                '5、  系统卡顿：工具-清除浏览器缓存'+
                '6、  操作问题：系统公告中有平台的操作手册，如有其它疑问可联系管理员'+
                '管理员电话：87280333',
          time:'2015-12-18 17:50:01',
        },
        {
          id:2,
          title:' 常见问题说明',
          name:'杭州石家庄',
          text:'为进一步深化平台应用，给民警提供一个使用和交流的平台，及时发现和解决平台过程中出现的问题。市局科信局建立了“HZ信息资源服务平台交流群”，民警可在该群中提出问题，科信部门发现后将立即解答。请各位民警通过微信扫描二维码入群，入群后请按照“单位-真实姓名”格式修改群名。',
          time:'2015-11-09 12:26:43',
        },
      ]
    }
    this.updateState=this.updateState.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    console.log(this.props.params)
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `系统公告详情${this.props.params.pageId}`,
        key: `/sysPage/${this.props.params.pageId}`,
      }))
    }
  }

  _tabChange(){

  }


  updateState(){
    this.setState({})
  }

  render() {

    return (
      <div className="body page" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        <Panel>
          <div className="head">
            <h1>常见问题说明</h1>
            <span>2015-12-18 17:50:01</span>
            <span>系统管理员</span>
          </div>
          <div className="content">
            <p>以下问题为在平台中可能会出现的，若有其他问题补充可联系管理员。</p>
            <p>1、  登陆不了平台跳回登陆页：确认通讯录身份证号和PKI证书中是否一致或PKI姓名与通讯录上是否一致</p>
            <p>2、  登陆报错： IP地址不在允许范围内，请联系管理员</p>
            <p>3、  数据搜索权限不够：在主界面系统公告中下载系统权限申请表，填好单位分管领导签字再交单位科技科</p>
            <p>4、  登陆后出现主界面空白页：按CTRL + F5进行刷新</p>
            <p>5、  系统卡顿：工具-清除浏览器缓存</p>
            <p>6、  操作问题：系统公告中有平台的操作手册，如有其它疑问可联系管理员</p>
            <p>管理员电话：87280333</p>
          </div>
        </Panel>
      </div>
    )
  }
}
