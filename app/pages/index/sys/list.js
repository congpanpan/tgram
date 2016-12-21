
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
        {
          id:3,
          title:' 关于新增省厅人车核录统计应用的通知',
          name:'关于新增省厅人车核录统计应用的通知',
          text:'现新增省厅人车核录统计报表的通知，可按照检查站统计人车数据，位于常用应用中。-真实姓名”格式修改群名。',
          time:'2015-11-09 12:26:43',
        },
        {
          id:4,
          title:' 关于卡口数据查询方法的通知',
          name:'关于卡口数据查询方法的通知',
          text:'卡口数据位于车辆，车辆轨迹中，授权范围高级用户。现可根据卡口过车时间、车牌号、车辆类型等进行查询。如需要查看具体车辆轨迹数据（按时间排序），可选择列表方式查看数据，点击车辆图标，在车辆聚合中查看。',
          time:'2015-11-09 12:26:43',
        },
        {
          id:5,
          title:' 常见问题说明',
          name:'杭州石家庄',
          text:'为进一步深化平台应用，给民警提供一个使用和交流的平台，及时发现和解决平台过程中出现的问题。市局科信局建立了“HZ信息资源服务平台交流群”，民警可在该群中提出问题，科信部门发现后将立即解答。请各位民警通过微信扫描二维码入群，入群后请按照“单位-真实姓名”格式修改群名。',
          time:'2015-11-09 12:26:43',
        },
        {
          id:6,
          title:' 关于新增省厅人车核录统计应用的通知',
          name:'关于新增省厅人车核录统计应用的通知',
          text:'现新增省厅人车核录统计报表的通知，可按照检查站统计人车数据，位于常用应用中。-真实姓名”格式修改群名。',
          time:'2015-11-09 12:26:43',
        },
        {
          id:7,
          title:' 关于卡口数据查询方法的通知',
          name:'关于卡口数据查询方法的通知',
          text:'卡口数据位于车辆，车辆轨迹中，授权范围高级用户。现可根据卡口过车时间、车牌号、车辆类型等进行查询。如需要查看具体车辆轨迹数据（按时间排序），可选择列表方式查看数据，点击车辆图标，在车辆聚合中查看。',
          time:'2015-11-09 12:26:43',
        },
        {
          id:8,
          title:' 常见问题说明',
          name:'杭州石家庄',
          text:'为进一步深化平台应用，给民警提供一个使用和交流的平台，及时发现和解决平台过程中出现的问题。市局科信局建立了“HZ信息资源服务平台交流群”，民警可在该群中提出问题，科信部门发现后将立即解答。请各位民警通过微信扫描二维码入群，入群后请按照“单位-真实姓名”格式修改群名。',
          time:'2015-11-09 12:26:43',
        },
        {
          id:9,
          title:' 关于新增省厅人车核录统计应用的通知',
          name:'关于新增省厅人车核录统计应用的通知',
          text:'现新增省厅人车核录统计报表的通知，可按照检查站统计人车数据，位于常用应用中。-真实姓名”格式修改群名。',
          time:'2015-11-09 12:26:43',
        },
        {
          id:10,
          title:' 关于卡口数据查询方法的通知',
          name:'关于卡口数据查询方法的通知',
          text:'卡口数据位于车辆，车辆轨迹中，授权范围高级用户。现可根据卡口过车时间、车牌号、车辆类型等进行查询。如需要查看具体车辆轨迹数据（按时间排序），可选择列表方式查看数据，点击车辆图标，在车辆聚合中查看。',
          time:'2015-11-09 12:26:43',
        },
      ]
    }
    this.updateState=this.updateState.bind(this)
    this.columns = this.columns.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `系统公告列表`,
        key: `/sysList`,
      }))
    }
  }

  _tabChange(){

  }

  columns(){
    const self = this
    return [
      {
        title:'公告标题',
        key:'title',
        dataIndex:'title',
        width: '20%',
        render:(text,record,index)=>(<p><Link to={`/sysPage/${record.id}`}>{text}</Link></p>)
      },
      {
        title:'公告名称',
        key:'name',
        dataIndex:'name',
        width: '15%'
      },
      {
        title:'公告内容',
        key:'text',
        dataIndex:'text',
        width: '50%'
      },
      {
        title:'发布时间',
        key:'time',
        dataIndex:'time',
        width: '15%'
      }
    ]
  }

  updateState(){
    this.setState({})
  }

  render() {

    return (
      <div className="body welcome" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        <Panel>
          <Table columns={this.columns()} dataSource={this.state.list} bordered={true} />
        </Panel>
      </div>
    )
  }
}
