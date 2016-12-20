
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, message, Row, Col, Card, Icon, Tabs } from 'antd'
import Panel from 'components/panel'
import './welcome.less'
const TabPane = Tabs.TabPane

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
  }

  // 组件已经加载到dom中
  componentDidMount() {
   
  }

  _tabChange(){

  }

  render() {
    const id = 1
    const more = <Link to={`/room/${id}`}>更多</Link>
    return (
      <div className="welcome">
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
                <div className="ant-card-head">
                  <h3 className="ant-card-head-title">
                    数据统计
                    <span className="link sub">截止今日数据共计283.79亿条，业务数据224张表283.32亿条</span>
                  </h3>
                </div>
                <div className="ant-card-body">

                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} className="box">
              <div className="ant-card ant-card-bordered card-tab">
                <div className="content">
                  <Tabs defaultActiveKey="1" tabPosition="top" onChange={this._tabChange} tabBarExtraContent={more}>
                    <TabPane tab="系统公告" key="1">
                      <table className="tbl">
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
                                <span>2016-12-20 14:03:53</span>
                                <span>在【旅馆内宾】中</span>
                                <span className="yellow">ZKLSH:3301060800201611190001 的详情</span>
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
                                <span>2016-12-20 14:03:53</span>
                                <span>在【旅馆内宾】中</span>
                                <span className="yellow">ZKLSH:3301060800201611190001 的详情</span>
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
                    </TabPane>
                    <TabPane tab="经验交流" key="2">
                      2
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </Col>
            <Col span={12} className="box">
              <div className="ant-card ant-card-bordered">
                <div className="ant-card-head">
                  <h3 className="ant-card-head-title">
                    服务统计
                    <span className="link sub">截止今日提供服务123635555次</span>
                  </h3>
                </div>
                <div className="ant-card-body">
                
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12} className="box">
              <Card className="log" title="查询日志" extra={<a href="javascript:void:;">更多</a>}>
                <table className="tbl">
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
                            <span>2016-12-20 14:03:53</span>
                            <span>在【旅馆内宾】中</span>
                            <span className="yellow">ZKLSH:3301060800201611190001 的详情</span>
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
                            <span>2016-12-20 14:03:53</span>
                            <span>在【旅馆内宾】中</span>
                            <span className="yellow">ZKLSH:3301060800201611190001 的详情</span>
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
                <div className="ant-card-head">
                  <h3 className="ant-card-head-title">
                    应用统计
                    <span className="link sub">截止今日应用共计50个（原生应用46个，模型应用4个）</span>
                  </h3>
                </div>
                <div className="ant-card-body">
                
                </div>
              </div>
            </Col>
          </Row>
        </Panel>
      </div>
    )
  }
}
