import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table, Button, Tabs, Card, Col, Row } from 'antd'
import { updateTabList } from 'actions/tabList'

import ChinaMap from './component/province/province'

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
          <span>全部新增零散数据</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  appClassTitle(){
    return(
        <p className="allAppTitle">
          <span>零散数据业务分类</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  appSuggestTitle(){
    return(
        <p className="allAppTitle">
          <span>零散数据所属单位</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  tNewDataTitle(){
    return(
        <p className="allAppTitle">
          <span>今日新增零散数据</span>
          <span className="newDataStatis"><em>85</em>个数据表，<em>12334123</em>条记录</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  weekKeyTitle(){
    return(
        <p className="allAppTitle">
          <span>零散数据地域分布</span>
          <Link className="moreBt" to={`/dataApp/appList`}>更多</Link>
        </p>
      )
  }
  render() {
    return (
      <div className="scatterData">
        <Col span="12">
          <Row>
            <Card title={this.yNewDataTitle()} >
              <div className="appDetailWrap">
                <div className="appDetail">
                  <p>46232</p> 
                    <span><Link to={`/dataApp/appNative`}>数据表数</Link></span>
                </div>
                <div className="appDetail">
                  <p>48765435</p>
                  <span><Link to={`/dataApp/appModel`}>记录条数</Link></span>
                </div>
                <div className="appDetail">
                  <p className="specialP">导入数据</p>
                </div>
              </div>
              <p className="dataStatic">
                <span>正在导入：<em>0</em>个</span>&nbsp;&nbsp;
                <span>正在建立索引：<em>0</em>个</span>&nbsp;&nbsp;
                <span>当前用户已导入：<em>0</em>个</span>
              </p>
            </Card>
          </Row>
          <Row>
            <Card title={this.appClassTitle()} >
              <table className="unitTable">
                <tbody>
                  <tr>
                    <td>人员：身份信息<span>3221</span></td>
                    <td>其他：社会信息<span>3221</span></td>
                    <td>车辆：动态轨迹<span>3221</span></td>
                  </tr>
                  <tr>
                    <td>车辆：等级信息<span>3221</span></td>
                    <td>单位：基本信息<span>3221</span></td>
                    <td>记录：邮政寄递<span>3221</span></td>
                  </tr>
                  <tr>
                    <td>车辆：等级信息<span>3221</span></td>
                    <td>单位：基本信息<span>3221</span></td>
                    <td>记录：邮政寄递<span>3221</span></td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Row> 
          <Row>
            <Card title={this.appSuggestTitle()} >
              <table className="unitTable">
                <tbody>
                  <tr>
                    <td>西湖区分局<span>3221</span></td>
                    <td>办公室<span>3221</span></td>
                    <td>余杭区分局<span>3221</span></td>
                  </tr>
                  <tr>
                    <td>科技信息化局<span>3221</span></td>
                    <td>胡政支队<span>3221</span></td>
                    <td>建德市公安局<span>3221</span></td>
                  </tr>
                  <tr>
                    <td>禁毒支队<span>3221</span></td>
                    <td>情报中心<span>3221</span></td>
                    <td>版本号<span>3221</span></td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Row> 
        </Col>
        <Col span="12" className="rightCol">
          <Row>
            <Card  title={this.tNewDataTitle()} >
              <ul className="appAddWrap">
                <li className="appAddItem">
                  <span className="appAddName">
                    <em>14:17</em>&nbsp;&nbsp;
                    <em>霍建华</em>&nbsp;&nbsp;
                    <em>明星对比数据</em>&nbsp;&nbsp;
                    <em>情报中心</em>&nbsp;&nbsp;
                    <em>杭州</em>&nbsp;&nbsp;
                    <em>人员：身份信息类零散数据</em>&nbsp;&nbsp;
                    记录数：<em>6544</em>
                  </span>
                </li>
                <li className="appAddItem">
                  <span className="appAddName">
                    <em>14:17</em>&nbsp;&nbsp;
                    <em>霍建华</em>&nbsp;&nbsp;
                    <em>明星对比数据</em>&nbsp;&nbsp;
                    <em>情报中心</em>&nbsp;&nbsp;
                    <em>杭州</em>&nbsp;&nbsp;
                    <em>人员：身份信息类零散数据</em>&nbsp;&nbsp;
                    记录数：<em>6544</em>
                  </span>
                </li>
                <li className="appAddItem">
                  <span className="appAddName">
                    <em>14:17</em>&nbsp;&nbsp;
                    <em>霍建华</em>&nbsp;&nbsp;
                    <em>明星对比数据</em>&nbsp;&nbsp;
                    <em>情报中心</em>&nbsp;&nbsp;
                    <em>杭州</em>&nbsp;&nbsp;
                    <em>人员：身份信息类零散数据</em>&nbsp;&nbsp;
                    记录数：<em>6544</em>
                  </span>
                </li>
              </ul>
            </Card>
          </Row>
          <Row className="specialRow">
            <Card title={this.weekKeyTitle()} >
              <ChinaMap></ChinaMap>
            </Card>
          </Row> 
        </Col>   
      </div>
    )

  }
}
