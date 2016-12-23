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
      appClassData:[
        {
          id: 1,
          title: '数据碰撞1',
          number: '11'
        },
        {
          id: 2,
          title: '数据碰撞2',
          number: '22'
        },
        {
          id: 3,
          title: '数据碰撞3',
          number: '33'
        },
        {
          id: 4,
          title: '数据碰撞4',
          number: '44'
        }
      ],
      appAddData:[
        {
          id: 1,
          date: '2016-12-02',
          time: '13:14:15',
          describe: '上传',
          name: '《多人关系对比》',
          whichApp: '原生应用',
        },
        {
          id: 2,
          date: '2016-12-02',
          time: '13:14:15',
          describe: '上传',
          name: '《多人关系对比》',
          whichApp: '原生应用',
        },
        {
          id: 3,
          date: '2016-12-02',
          time: '13:14:15',
          describe: '上传',
          name: '《多人关系对比》',
          whichApp: '原生应用',
        },
      ],
    }
  }

  // 组件已经加载到dom中
  componentDidMount() {
     
  }
  allAppTitle(){
    return(
        <p className="allAppTitle">
          <span>全部应用</span>
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
          <span>新增应用</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  appRankTitle(){
    return(
        <p className="allAppTitle">
          <span>应用排行</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  render() {
    // console.log(this.state.appClassData)
    const appClassTd = this.state.appClassData.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            {item.title}<span><Link to={`/dataApp/appList`}>{item.number}</Link></span>
          </td>
          <td>
            {item.title}<span><Link to={`/dataApp/appList`}>{item.number}</Link></span>
          </td>
          <td>
            {item.title}<span><Link to={`/dataApp/appList`}>{item.number}</Link></span>
          </td>
        </tr>
      )
    })
    const appAddTd = this.state.appAddData.map((item, index) => {
      return (
        <tr key={index}>
          <td className="appAddItem">
            <span>{item.date}</span>&nbsp;&nbsp;
            <span>{item.time}</span>&nbsp;&nbsp;
            <span>{item.describe}</span>&nbsp;&nbsp;
            <span className="appAddName">{item.name}</span>&nbsp;&nbsp;
            <span className="whichApp">{item.whichApp}</span>
          </td>
        </tr>
      )
    })
    return (
      <div className="hjt-dataApp">
        <Col span="12">
          <Row>
            <Card title={this.allAppTitle()} >
              <div className="appDetailWrap">
                <div className="appDetail">
                  <p>46</p> 
                    <span><Link to={`/dataApp/appNative`}>原生应用</Link></span>
                </div>
                <div className="appDetail">
                  <p>4</p>
                  <span><Link to={`/dataApp/appModel`}>模型应用</Link></span>
                </div>
                <div className="appDetail specialAppDetail">
                  <p className="specialP">
                    <Link to={`/dataApp/addNewNative`}>新增<span>原生应用</span></Link>
                  </p>
                </div>
                <div className="appDetail specialAppDetail">
                  <p className="specialP">
                    <Link to={`/dataApp/addNewModel`}>新增<span>模型</span></Link>
                  </p>                 
                </div>
              </div>
            </Card>
          </Row>
          <Row>
            <Card title={this.appClassTitle()} >
              <table className="appClassTable">
                <tbody>{appClassTd}</tbody>
              </table> 
            </Card>
          </Row> 
          <Row>
            <Card title={this.appSuggestTitle()} >
              <table className="appSuggestTable tbl tbl-log">
                <tbody>
                  <tr>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                  </tr>
                  <tr>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                  </tr>
                  <tr>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/dataApp/appAttribute`}>地铁高频人员信息</Link></td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Row>  
        </Col>
        <Col span="12" className="rightCol">
          <Row>
            <Card  title={this.appAddTitle()} >
              <table className="appAddTable">
                <tbody>{appAddTd}</tbody>
              </table> 
            </Card>
          </Row>
          <Row className="specialRow">
            <Card title={this.appRankTitle()} >
              <AppRank></AppRank>
            </Card>
          </Row> 
        </Col>   
      </div>
    )

  }
}
