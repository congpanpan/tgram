
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, message, Row, Col } from 'antd'
import './welcome.less'

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

  render() {
    
    return (
      <div className="welcome">
        <Row gutter={16}>
          <Col span={12}>
            内容一
          </Col>
          <Col span={12}>
            内容二
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            内容3
          </Col>
          <Col span={12}>
            内容4
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            内容5
          </Col>
          <Col span={12}>
            内容6
          </Col>
        </Row>
      </div>
    )
  }
}
