import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs,Menu,Dropdown,Icon } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import './style.css'
import DataServiceHome from './dataServiceType/dataServiceHome'
import DataServiceManage from './dataServiceType/dataServiceManage'
import DataServiceApply  from './dataServiceType/dataServiceApply'
import DataServicePorts  from './dataServiceType/dataServicePorts'


const TabPane = Tabs.TabPane;



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)

// 声明组件  并对外输出
export default class dataService extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
    }
    this._typeChange=this._typeChange.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `数据服务`,
        key: `/dataService`,
      }))
    }

    
  }
   _typeChange(key){
    this.setState({key:key})
    /*const data = { currentPage: 1,rylb: key}
    this.props.dispatch(fetchTipList(data))*/
  }


  render() {
    const menu=(
      <Menu>
        <Menu.Item>
          <a>我申请的服务</a>
        </Menu.Item>
         <Menu.Item>
          <a>我发布的服务</a>
        </Menu.Item>
        
      </Menu>
      )
    return (
      <Panel>
        <div className="list-tab">
          <Tabs tabPosition="top" onChange={this._typeChange}>
            <TabPane tab="服务首页" key="1" >
             <DataServiceHome/>
            </TabPane>
            <TabPane tab="服务管理" key="2">
             {/* <Dropdown overlay={menu}>
                
              </Dropdown>*/}

              <DataServiceManage/>
            </TabPane>
             <TabPane tab="服务申请" key="3">
              <DataServiceApply/>
            </TabPane>
             <TabPane tab="定制接口申请" key="4">
              <DataServicePorts/>
            </TabPane>
          </Tabs>
        </div>
      </Panel>
    )

  }
}
