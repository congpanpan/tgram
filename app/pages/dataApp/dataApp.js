import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs, Card, col, Row } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'

import CardsComponent from './cards/cards'


const TabPane = Tabs.TabPane;



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)

// 声明组件  并对外输出
export default class dataApp extends Component {
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
        title: `数据应用`,
        key: `/dataApp`,
      }))
    }

    
  }


  render() {
    return (
      <Panel>
        <div className="dataApp-tab">
          <Tabs tabPosition="top" onChange={this._typeChange}>
            <TabPane tab="应用首页" key="list">
              <CardsComponent></CardsComponent>
            </TabPane>
            <TabPane tab="应用管理" key="map">
              数据应用2
            </TabPane>
          </Tabs>
        </div>
      </Panel>
    )

  }
}
