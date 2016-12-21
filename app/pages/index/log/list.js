
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, message, Row, Col, Card, Icon, Tabs, Table } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import WindowSize from 'components/windowSize'
const TabPane = Tabs.TabPane


@connect(
    (state, props) => ({
      config: state.config,
    })
)
export default class list extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = { 
      list:[
        {
          id:1,
          user:'QQB测试',
          style: '查看聚合',
          service: '常住人口',
          content: '332502199208260020 的聚合',
          time:'2015-12-18 17:50:01',
        },
        {
          id:2,
          user:'QQB测试',
          style: '查看应用',
          service: '数印搜索',
          content: '',
          time:'2016-12-18 17:50:01',
        },
        {
          id:3,
          user:'QQB测试',
          style: '搜索',
          service: '常住人口',
          content: '*',
          time:'2016-12-18 17:50:01',
        },{
          id:4,
          user:'QQB测试',
          style: '查看聚合',
          service: '常住人口',
          content: '332502199208260020 的聚合',
          time:'2015-12-18 17:50:01',
        },
        {
          id:5,
          user:'QQB测试',
          style: '查看应用',
          service: '数印搜索',
          content: '',
          time:'2016-12-18 17:50:01',
        },
        {
          id:6,
          user:'QQB测试',
          style: '搜索',
          service: '常住人口',
          content: '*',
          time:'2016-12-18 17:50:01',
        },{
          id: 7,
          user:'QQB测试',
          style: '查看聚合',
          service: '常住人口',
          content: '332502199208260020 的聚合',
          time:'2015-12-18 17:50:01',
        },
        {
          id:8,
          user:'QQB测试',
          style: '查看应用',
          service: '数印搜索',
          content: '',
          time:'2016-12-18 17:50:01',
        },
        {
          id:9,
          user:'QQB测试',
          style: '搜索',
          service: '常住人口',
          content: '*',
          time:'2016-12-18 17:50:01',
        },{
          id:10,
          user:'QQB测试',
          style: '查看聚合',
          service: '常住人口',
          content: '332502199208260020 的聚合',
          time:'2015-12-18 17:50:01',
        },
        {
          id:11,
          user:'QQB测试',
          style: '查看应用',
          service: '数印搜索',
          content: '',
          time:'2016-12-18 17:50:01',
        },
        {
          id:12,
          user:'QQB测试',
          style: '搜索',
          service: '常住人口',
          content: '*',
          time:'2016-12-18 17:50:01',
        },
      ]
    }
    this.updateState=this.updateState.bind(this)
    this.columns = this.columns.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `日志列表`,
        key: `/logList`,
      }))
    }
  }


  columns(){
    const self = this
    return [
      {
        title:'用户',
        key:'user',
        dataIndex:'user',
        // render:(text,record,index)=>(<p><Link to={`/sysPage/${record.id}`}>{text}</Link></p>)
      },
      {
        title:'查询方式',
        key:'style',
        dataIndex:'style',
      },
      {
        title:'查询服务',
        key:'service',
        dataIndex:'service',
      },
      {
        title:'查询内容',
        key:'content',
        dataIndex:'content',
      },
      {
        title:'查询时间',
        key:'time',
        dataIndex:'time',
      }
    ]
  }

  updateState(){
    this.setState({})
  }

  render() {

    return (
      <div className="body welcome" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        <Panel>
          <Table columns={this.columns()} dataSource={this.state.list} bordered={true} />
        </Panel>
      </div>
    )
  }
}
