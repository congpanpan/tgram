
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs } from 'antd'
import { updateTabList } from 'actions/tabList'
import WindowSize from 'components/windowSize'
import Panel from 'components/panel'
import CardsComponent from './cards/cards'

const TabPane = Tabs.TabPane



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)

// 声明组件  并对外输出
export default class info extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
    }
    this.updateState = this.updateState.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `零散数据`,
        key: `/scatteredData`,
      }))
    }

    
  }

  updateState(){
    this.setState({})
  }

  render() {
    return (
      <div className="body" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        <Panel>
          <div className="houseAddrList-tab">
              <CardsComponent></CardsComponent>
          </div>
        </Panel>
      </div>
    )

  }
}

