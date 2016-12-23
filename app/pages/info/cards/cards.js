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
      appAddData:[
        {
          id: 1,
          name: '《多人关系对比》',
        },
        {
          id: 2,
          name: '《多人关系对比rwerwer》',
        },
        {
          id: 3,
          name: '《多人关系对比rwrwe》',
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
          <span>全部新增数据</span>
          <Link className="moreBt" to={`/info/infoResourceList`}>更多</Link>
        </p>
    )
  }
  appAddTitle(){
    return(
        <p className="allAppTitle">
          <span>数据实时性监测</span>
          <Link className="moreBt" to={`/info/infoResourceList`}>更多</Link>
        </p>
      )
  }

  tNewDataTitle(){
    return(
        <p className="allAppTitle">
          <span>今日新增数据</span>
          <span className="newDataStatis"><em>85</em>个数据表，<em>12334123</em>条记录</span>
          <Link className="moreBt" to={`/info/infoResourceList`}>更多</Link>
        </p>
      )
  }

  appRankTitle(){
    return(
        <p className="allAppTitle">
          <span>七日关键词排行</span>
        </p>
      )
  }

  render() {
    const appAddTd = this.state.appAddData.map((item, index) => {
      return (
        <tr key={index}>
          <td className="appAddItem">
            <span className="appAddName">{item.name}</span>
          </td>
        </tr>
      )
    })
    return (
      <div className="hjt-infoResource">
        <Row gutter={15}>
          <Col span="12">
            <Card title={this.allAppTitle()} >
              <div className="appDetailWrap">
                <div className="appDetail">
                  <p className="specialP">46</p> 
                    <span><Link to={`/dataApp/appNative`}>数据表数</Link></span>
                </div>
                <div className="appDetail">
                  <p className="specialP">2359064662</p>
                  <span><Link to={`/dataApp/appModel`}>记录条数</Link></span>
                </div>       
              </div>
            </Card>
          </Col>
          <Col span="12" className="welcome">
            <div className="box">
              <Card className="log" title={this.tNewDataTitle()}>
                <table className="appAddTable">
                    <tbody>
                      {appAddTd}
                    </tbody>
                </table>
              </Card>
            </div>
          </Col>  
        </Row>
        <Row gutter={15} className="rightCol">
          <Col span="12">
            <Card  title={this.appAddTitle()} >
              <div className="appDetailWrap">
                <div className="appDetail">
                  <p className="specialP">212222</p> 
                    <span><Link to={`/info/infoResourceList`}>实时数据</Link></span>
                </div>
                <div className="appDetail">
                  <p className="specialP">4662</p>
                  <span><Link to={`/info/infoResourceList`}>一日内</Link></span>
                </div>
                <div className="appDetail">
                  <p className="specialP">2359064662</p>
                  <span><Link to={`/info/infoResourceList`}>久不更新</Link></span>
                </div>         
              </div>
            </Card>
          </Col>
          <Col span="12" className="specialRow">
            <Card title={this.appRankTitle()} >
              <KeyWordStatis></KeyWordStatis>
            </Card>
          </Col> 
        </Row> 
      </div>
    )
  }


  
  
}
