import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table, Button, Tabs, Card, Col, Row } from 'antd'
import { updateTabList } from 'actions/tabList'
import AppRank from './component/appRank'

import  './cards.less'


const TabPane = Tabs.TabPane;



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)

// 声明组件  并对外输出
export default class cards extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
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
  }

  // 组件已经加载到dom中
  componentDidMount() {
     
  }
  allAppTitle(){
    return(
        <p className="allAppTitle">
          <span>全部新增数据</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  appClassTitle(){
    return(
        <p className="allAppTitle">
          <span>应用分类</span>
        </p>
      )
  }
  appSuggestTitle(){
    return(
        <p className="allAppTitle">
          <span>全部推荐</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  appAddTitle(){
    return(
        <p className="allAppTitle">
          <span>数据实时性监测</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  appRankTitle(){
    return(
        <p className="allAppTitle">
          <span>七日关键词排行</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }

  render() {
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
    return (
      <div className="hjt-dataApp info">
        <Row gutter={15}>
          <Col span="12">
            <Card title={this.allAppTitle()} >
              <div className="appDetailWrap">
                <Row type="flex" justify="center" gutter={50}>
                  <Col span={4}>
                    <div className="appDetail">
                      <p className="specialP">46</p> 
                        <span><Link to={`/dataApp/appNative`}>原生应用</Link></span>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="appDetail">
                      <p className="specialP">2359064662</p>
                      <span><Link to={`/dataApp/appModel`}>模型应用</Link></span>
                    </div>
                  </Col>
                </Row>
                
                
              </div>
            </Card>
          </Col>
          <Col span="12" className="welcome">
            <div className="box">
              <Card className="log" title="今日新增数据" extra={<Link to={`/logList`} >更多</Link>}>
                <table className="tbl tbl-log">
                    <tbody>
                      {logList}
                    </tbody>
                </table>
              </Card>
            </div>
          </Col>  
        </Row>
        <Row gutter={15} className="rightCol">
          <Col span="12">
            <Card  title={this.appAddTitle()} >
              <ul className="appAddWrap">
                <li className="appAddItem">
                  <span>2016-12-02</span>&nbsp;&nbsp;
                  <span>13:14:15</span>&nbsp;&nbsp;
                  <span>上传</span>&nbsp;&nbsp;
                  <span className="appAddName">《多人关系对比》</span>&nbsp;&nbsp;
                  <span>原生应用</span>
                </li>
                <li className="appAddItem">
                  <span>2016-12-02</span>&nbsp;&nbsp;
                  <span>13:14:15</span>&nbsp;&nbsp;
                  <span>上传</span>&nbsp;&nbsp;
                  <span className="appAddName">《多人关系对比》</span>&nbsp;&nbsp;
                  <span>原生应用</span>
                </li>
                <li className="appAddItem">
                  <span>2016-12-02</span>&nbsp;&nbsp;
                  <span>13:14:15</span>&nbsp;&nbsp;
                  <span>上传</span>&nbsp;&nbsp;
                  <span className="appAddName">《多人关系对比》</span>&nbsp;&nbsp;
                  <span>原生应用</span>
                </li>
              </ul>
            </Card>
          </Col>
          <Col span="12" className="specialRow">
            <Card title={this.appRankTitle()} >
              <AppRank></AppRank>
            </Card>
          </Col> 
        </Row>   
      </div>
    )

  }
}
