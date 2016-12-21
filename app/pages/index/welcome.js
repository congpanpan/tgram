
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, message, Row, Col, Card, Icon, Tabs } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import WindowSize from 'components/windowSize'
import './welcome.less'
const TabPane = Tabs.TabPane

import Data from './report/data'
import Popflow from './report/popflow'
import Province from './report/province'
import Apppop from './report/apppop'

@connect(
    (state, props) => ({
      config: state.config,
    })
)
export default class welcome extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = { 
      more: 'sysList',
      data: {
        appList:[
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '电话号码聚合',
            color: 'blue'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '数印搜索',
            color: 'green'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '数印主题',
            color: 'red'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '省云搜',
            color: 'purple'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '部云搜',
            color: 'orange'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '多人关系比对',
            color: 'blue'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '网警数据',
            color: 'green'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '激度°',
            color: 'red'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '旅馆信息',
            color: 'purple'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '核查高频人员应用',
            color: 'blue'
          },,
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '省厅人车核查统计信息',
            color: 'green'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: 'WZ专题应用',
            color: 'red'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '地铁高频人员信息',
            color: 'purple'
          },
          {
            url: 'http://zyfw.gat.zj/resourcesystem-web/actions/index',
            name: '零散数据导入',
            color: 'blue'
          },
        ],
        logList:[
          {
            id:1,
            user:'QQB测试',
            style: '查看聚合',
            service: '常住人口',
            content: '332502199208260020 的聚合',
            time:'2015-12-18 17:50:01',
          },
          {
            id:2,
            user:'QQB测试',
            style: '查看应用',
            service: '数印搜索',
            content: '',
            time:'2016-12-18 17:50:01',
          },
          {
            id:3,
            user:'QQB测试',
            style: '搜索',
            service: '常住人口',
            content: '*',
            time:'2016-12-18 17:50:01',
          },
          {
            id:4,
            user:'QQB测试',
            style: '搜索',
            service: '常住人口',
            content: '',
            time:'2016-12-18 17:50:01',
          },
          {
            id:5,
            user:'QQB测试',
            style: '查看应用',
            service: '数印搜索',
            content: '',
            time:'2016-12-18 17:50:01',
          },
        ],
        sysList:[
          {
            id: 1,
            title: '培训教材下载',
            time: '2016-03-25 15:27:30'
          },
          {
            id: 2,
            title: '常见问题说明',
            time: '2015-12-18 17:50:01'
          },
          {
            id: 3,
            title: '关于加入“HZ信息资源服务平台交流群”的通知',
            time: '2015-11-09 12:26:43'
          },
          {
            id: 4,
            title: '关于新增租赁车辆登记和租赁车辆记录等数据查询的通知',
            time: '2016-09-27 17:26:47'
          },
          {
            id: 5,
            title: '关于新增厅下发铁路和民航数据查询的通知',
            time: '2016-08-27 12:15:37'
          },
        ],
        talkList:[
          {
            id: 1,
            title: '零散数据重复上传如何删除？',
            time: '2016-03-25 15:27:30'
          },
          {
            id: 2,
            title: '使用教程的ppt中旅馆专题、地铁高频人员专题从哪里进？',
            time: '2015-12-18 17:50:01'
          },
          {
            id: 3,
            title: '人脸比对怎么用，照片有什么要求',
            time: '2015-11-09 12:26:43'
          },
          {
            id: 4,
            title: '测试',
            time: '2016-09-27 17:26:47'
          },
          {
            id: 5,
            title: '请留言',
            time: '2016-08-27 12:15:37'
          },
        ]
      }
    }
    this.updateState = this.updateState.bind(this)
    this._tabChange = this._tabChange.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `首页`,
        key: `/index`,
      }))
    }
  }

  _tabChange(key){
    console.log(key)
    this.setState({more: key})
  }

  updateState(){
    this.setState({})
  }

  render() {
    const id = 1
    const more = <Link to={`/${this.state.more}`}>更多</Link>
    const appList = this.state.data.appList.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url} target="_blank">
            <span className={"icon-wrap " + item.color}><Icon type="smile" /></span>
            <p>{item.name}</p>
          </a>
        </li>
      )
    })
    const logList = this.state.data.logList.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <a href="javascript:void:;">
              <span>{item.time}</span>
              <span>{item.style} {item.service}</span>
              <span className="yellow">{item.content}</span>
            </a>
          </td>
        </tr>
      )
    })
    const sysList = this.state.data.sysList.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <Link to={`/sysPage/${item.id}`}>{item.title}</Link>
          </td>
          <td className="text-right">
            <span>{item.time}</span>
          </td>
        </tr>
      )
    })
    const talkList = this.state.data.talkList.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <Link to={`/talkPage/${item.id}`}>{item.title}</Link>
          </td>
          <td className="text-right">
            <span>{item.time}</span>
          </td>
        </tr>
      )
    })
    return (
      <div className="body welcome" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        <Panel>
          <Row gutter={16}>
            <Col span={12} className="box">
              <Card title="常用应用" extra={<a href="javascript:void:;">更多</a>}>
                <ul className="icons clearfix">
                  {appList}
                </ul>
              </Card>
            </Col>
            <Col span={12} className="box">
              <div className="ant-card ant-card-bordered">
                  <Data />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} className="box">
              <div className="ant-card ant-card-bordered card-tab">
                <div className="content">
                  <Tabs 
                    defaultActiveKey="sysList" 
                    tabPosition="top" 
                    onChange={this._tabChange} 
                    tabBarExtraContent={more}>
                    <TabPane tab="系统公告" key="sysList">
                      <div className="tbl-wrap">
                        <table className="tbl">
                          <tbody>
                            {sysList}
                          </tbody>
                        </table>
                      </div>
                    </TabPane>
                    <TabPane tab="经验交流" key="talkList">
                      <div className="tbl-wrap">
                        <table className="tbl">
                          <tbody>
                            {talkList}
                          </tbody>
                        </table>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </Col>
            <Col span={12} className="box">
              <div className="ant-card ant-card-bordered">
                {/*<Popflow />*/}
                <Data />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} className="box">
              <Card className="log" title="查询日志" extra={<Link to={`/logList`} >更多</Link>}>
                <table className="tbl tbl-log">
                    <tbody>
                      {logList}
                    </tbody>
                </table>
              </Card>
            </Col>
            <Col span={12} className="box">
              <div className="ant-card ant-card-bordered">
                <Province />
              </div>
            </Col>
          </Row>
        </Panel>
      </div>
    )
  }
}
