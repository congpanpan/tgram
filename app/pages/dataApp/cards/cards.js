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
    return (
      <div className="hjt-dataApp">
        <Col span="12">
          <Row>
            <Card title={this.allAppTitle()} >
              <div className="appDetailWrap">
                <div className="appDetail">
                  <p className="specialP">46</p> 
                    <span><Link to={`/dataApp/appNative`}>原生应用</Link></span>
                </div>
                <div className="appDetail">
                  <p className="specialP">4</p>
                  <span><Link to={`/dataApp/appModel`}>模型应用</Link></span>
                </div>
                <div className="appDetail specialAppDetail">
                  <p>
                    <Link to={`/dataApp/addNewNative`}>新增<span>原生应用</span></Link>
                  </p>
                </div>
                <div className="appDetail specialAppDetail">
                  <p>
                    <Link to={`/dataApp/addNewModel`}>新增<span>模型</span></Link>
                  </p>                 
                </div>
              </div>
            </Card>
          </Row>
          <Row>
            <Card title={this.appClassTitle()} >
              <ul className="appClassWrap">
                <li className="appClassItem">
                  <span>数据碰撞</span>
                  <em><Link to={`/dataApp/appList`}>17</Link></em>
                </li>
                <li className="appClassItem">
                  <span>数据碰撞</span>
                  <em><Link to={`/dataApp/appList`}>17</Link></em>
                </li>
                <li className="appClassItem">
                  <span>数据碰撞</span>
                  <em><Link to={`/dataApp/appList`}>17</Link></em>
                </li>
                <li className="appClassItem">
                  <span>数据碰撞</span>
                  <em><Link to={`/dataApp/appList`}>17</Link></em>
                </li>
                <li className="appClassItem">
                  <span>数据碰撞</span>
                  <em><Link to={`/dataApp/appList`}>17</Link></em>
                </li>
                <li className="appClassItem">
                  <span>数据碰撞</span>
                  <em><Link to={`/dataApp/appList`}>17</Link></em>
                </li>    
              </ul>
            </Card>
          </Row> 
          <Row>
            <Card title={this.appSuggestTitle()} >
              <ul className="appClassWrap appSuggestWrap">
                <li className="appClassItem appSuggestItem">
                  <span>地铁高频人员信息</span>
                </li>
                <li className="appClassItem appSuggestItem">
                  <span>地铁高频人员信息</span>
                </li>
                <li className="appClassItem appSuggestItem">
                  <span>地铁高频人员信息</span>
                </li>
                <li className="appClassItem appSuggestItem">
                  <span>地铁高频人员信息</span>
                </li>
                <li className="appClassItem appSuggestItem">
                  <span>地铁高频人员信息</span>
                </li>
              </ul>
            </Card>
          </Row>  
        </Col>
        <Col span="12" className="rightCol">
          <Row>
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
