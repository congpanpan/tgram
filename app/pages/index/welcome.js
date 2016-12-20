
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, message, Row, Col, Card, Icon, Tabs } from 'antd'
import Panel from 'components/panel'
import WindowSize from 'components/windowSize'
import './welcome.less'
const TabPane = Tabs.TabPane

import Data from './report/data'

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
    }
    this.updateState=this.updateState.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
   
  }

  _tabChange(){

  }

  updateState(){
    this.setState({})
  }

  render() {
    console.log($GLOBALCONFIG.PAGEHEIGHT)
    const id = 1
    const more = <Link to={`/room/${id}`}>更多</Link>
    return (
      <div className="welcome" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        <Panel>
          <Row gutter={16}>
            <Col span={12} className="box">
              <Card title="常用应用" extra={<a href="javascript:void:;">更多</a>}>
                <ul className="icons clearfix">
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap blue"><Icon type="smile" /></span>
                      <p>电话号码聚合</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap green"><Icon type="smile" /></span>
                      <p>数印搜索</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap red"><Icon type="smile" /></span>
                      <p>数印主题</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap purple"><Icon type="smile" /></span>
                      <p>省云搜</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap orange"><Icon type="smile" /></span>
                      <p>部云搜</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap green"><Icon type="smile" /></span>
                      <p>多人关系比对</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap green"><Icon type="smile" /></span>
                      <p>多人轨迹比对</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap blue"><Icon type="smile" /></span>
                      <p>电话号码聚合</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap green"><Icon type="smile" /></span>
                      <p>数印搜索</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap red"><Icon type="smile" /></span>
                      <p>数印主题</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap purple"><Icon type="smile" /></span>
                      <p>省云搜</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap orange"><Icon type="smile" /></span>
                      <p>部云搜</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap green"><Icon type="smile" /></span>
                      <p>多人关系比对</p>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void:;" target="_blank">
                      <span className="icon-wrap green"><Icon type="smile" /></span>
                      <p>多人轨迹比对</p>
                    </a>
                  </li>
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
                  <Tabs defaultActiveKey="1" tabPosition="top" onChange={this._tabChange} tabBarExtraContent={more}>
                    <TabPane tab="系统公告" key="1">
                      <div className="tbl-wrap">
                        <table className="tbl">
                          <tbody>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 培训教材下载 </a>
                              </td>
                              <td className="text-right">
                                <span>2016-03-25 15:27:30</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 常见问题说明 </a>
                              </td>
                              <td className="text-right">
                                <span>2015-12-18 17:50:01</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 关于加入“HZ信息资源服务平台交流群”的通知 </a>
                              </td>
                              <td className="text-right">
                                <span>2015-11-09 12:26:43</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 关于新增租赁车辆登记和租赁车辆记录等数据查询的通知 </a>
                              </td>
                              <td className="text-right">
                                <span>2016-09-27 17:26:47</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 关于新增厅下发铁路和民航数据查询的通知 </a>
                              </td>
                              <td className="text-right">
                                <span>2016-08-27 12:15:37</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </TabPane>
                    <TabPane tab="经验交流" key="2">
                      <div className="tbl-wrap">
                        <table className="tbl">
                          <tbody>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 零散数据重复上传如何删除？  </a>
                              </td>
                              <td className="text-right">
                                <span>2016-03-25 15:27:30</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 使用教程的ppt中旅馆专题、地铁高频人员专题从哪里进？  </a>
                              </td>
                              <td className="text-right">
                                <span>2016-03-25 15:27:30</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 人脸比对怎么用，照片有什么要求 </a>
                              </td>
                              <td className="text-right">
                                <span>2016-03-25 15:27:30</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 测试  </a>
                              </td>
                              <td className="text-right">
                                <span>2016-03-25 15:27:30</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <a href="javascript:void:;"> 请留言  </a>
                              </td>
                              <td className="text-right">
                                <span>2016-03-25 15:27:30</span>
                              </td>
                            </tr>
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
                <Data />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} className="box">
              <Card className="log" title="查询日志" extra={<a href="javascript:void:;">更多</a>}>
                <table className="tbl tbl-log">
                    <tbody>
                      <tr>
                        <td>
                          <a href="javascript:void:;">
                            <span>2016-12-20 14:03:53</span>
                            <span>在【旅馆内宾】中</span>
                            <span className="yellow">ZKLSH:3301060800201611190001 的详情</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="javascript:void:;">
                            <span>2016-12-20 17:03:02</span>
                            <span>查看应用 【数印搜索】</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="javascript:void:;">
                            <span>2016-12-20 14:03:53</span>
                            <span>在【旅馆内宾】中</span>
                            <span className="yellow">ZKLSH:3301060800201611190001 的详情</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="javascript:void:;">
                            <span>2016-12-20 17:03:02</span>
                            <span>查看应用 【数印搜索】</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="javascript:void:;">
                            <span>2016-12-20 14:03:53</span>
                            <span>在【旅馆内宾】中</span>
                            <span className="yellow">ZKLSH:3301060800201611190001 的详情</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                </table>
              </Card>
            </Col>
            <Col span={12} className="box">
              <div className="ant-card ant-card-bordered">
                <Data />
              </div>
            </Col>
          </Row>
        </Panel>
      </div>
    )
  }
}
