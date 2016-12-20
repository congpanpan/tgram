/*服务申请*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs,Row,Col,Input } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'


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
      <div>
        <Row>
          <Col span={18}>
          <div className='search-cpp'>
            <Input  placeholder="搜索服务名称"/>
           </div>
          </Col>
          <Col span={6}>
            <div className='serviceManage-button-cpp'> 
              <Button>新增服务</Button>
            </div>
          </Col>
        </Row>
      </div>
     
      </Panel>
    )

  }
}
