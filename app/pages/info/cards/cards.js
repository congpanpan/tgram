import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table, Button, Tabs, Card, Col, Row } from 'antd'
import { updateTabList } from 'actions/tabList'

import KeyWordStatis from './component/keyWordStatis'

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
  yNewDataTitle(){
    return(
        <p className="allAppTitle">
          <span>昨日新增数据</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  nowDataTitle(){
    return(
        <p className="allAppTitle">
          <span>数据实时性监测</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  tNewDataTitle(){
    return(
        <p className="allAppTitle">
          <span>今日新增数据</span>
          <span className="newDataStatis"><em>85</em>个数据表，<em>12334123</em>条记录</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  weekKeyTitle(){
    return(
        <p className="allAppTitle">
          <span>七日关键词排行</span>
        </p>
      )
  }
  render() {
    return (
      <div className="infoResource">
        <Col span="12">
          <Row>
            <Card title={this.yNewDataTitle()} >
              <div className="appDetailWrap">
                <div className="appDetail">
                  <p className="specialP">46232</p> 
                    <span><Link to={`/dataApp/appNative`}>数据表数</Link></span>
                </div>
                <div className="appDetail">
                  <p className="specialP">48765435</p>
                  <span><Link to={`/dataApp/appModel`}>记录条数</Link></span>
                </div>
              </div>
              <p className="dataStatic">
                <span>人员：<em>24.8亿</em></span>&nbsp;&nbsp;
                <span>案件：<em>3.8千万</em></span>&nbsp;&nbsp;
                <span>车辆：<em>26.2亿</em></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>机构：<em>688万</em></span>&nbsp;&nbsp;
                <span>线索：<em>212万</em></span>&nbsp;&nbsp;
                <span>地址：<em>20万</em></span>&nbsp;&nbsp;
                <span>其他：<em>232.7亿</em></span>
              </p>
            </Card>
          </Row>
          <Row>
            <Card title={this.nowDataTitle()} >
              <div className="appDetailWrap">
                <div className="appDetail">
                  <p className="specialP">46</p> 
                    <span><Link to={`/dataApp/appNative`}>实时数据</Link></span>
                </div>
                <div className="appDetail">
                  <p className="specialP">4</p>
                  <span><Link to={`/dataApp/appModel`}>一日内</Link></span>
                </div>
                <div className="appDetail">
                  <p className="specialP">4</p>
                  <span><Link to={`/dataApp/appModel`}>久不更新</Link></span>
                </div>
              </div>
            </Card>
          </Row>
        </Col>
        <Col span="12" className="rightCol">
          <Row>
            <Card  title={this.tNewDataTitle()} >
              <ul className="appAddWrap">
                <li className="appAddItem">
                  <span className="appAddName">《多人关系对比》</span>
                </li>
                <li className="appAddItem">
                  <span className="appAddName">《常住人口信息管理系统-常住人口》</span>
                </li>
                <li className="appAddItem">
                  <span className="appAddName">《常住人口信息管理系统-境外人员》</span>
                </li>
              </ul>
            </Card>
          </Row>
          <Row className="specialRow">
            <Card title={this.weekKeyTitle()} >
              <KeyWordStatis></KeyWordStatis>
            </Card>
          </Row> 
        </Col>   
      </div>
    )

  }
}
