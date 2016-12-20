import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs, Row, Col } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
const TabPane = Tabs.TabPane



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)

// 声明组件  并对外输出
export default class user extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `个人信息`,
        key: `/user`,
      }))
    }

    
  }


  render() {
    return (
      <Panel>
        <div className="user">
          <div className="main">
            <div className="box">
              <h3 className="head"><span className="title">用户信息</span></h3>
              <Row gutter={0} className="content">
                <Col span={8}>
                  <table className="tbl">
                    <tbody>
                      <tr>
                        <td>姓名：</td>
                        <td className="text-right">
                          <span className="link">QQB测试</span>
                        </td>
                      </tr>
                      <tr>
                        <td>部门：</td>
                        <td className="text-right">
                          <span className="link">杭州市公安局信息通信处（科技处）计算机应用管理科</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
                <Col span={8}>
                  <table className="tbl">
                    <tbody>
                      <tr>
                        <td>警号：</td>
                        <td className="text-right">
                          <span className="link">qiqiaoban</span>
                        </td>
                      </tr>
                      <tr>
                        <td>身份证号：</td>
                        <td className="text-right">
                          <span className="link">42900519741202857X</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
                <Col span={8}>
                  <table className="tbl">
                    <tbody>
                      <tr>
                        <td>用户权限：</td>
                        <td className="text-right">
                          <span className="link">普通用户</span>
                        </td>
                      </tr>
                      <tr>
                        <td>用户ID：</td>
                        <td className="text-right">
                          <span className="link">11039</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </div>
          </div>

          <div className="main">
            <div className="box">
              <h3 className="head"><span className="title">用户信息</span></h3>
                <div className="buttons">
                  <Button type="primary" className="down">下载审批表</Button>
                  <Button type="primary" className="upload">重新上传审批凭证</Button>
                  <img className="thumb" src="../../images/serviseManagement.png" />
                </div>
            </div>
          </div>
        </div>
      </Panel>
    )

  }
}
