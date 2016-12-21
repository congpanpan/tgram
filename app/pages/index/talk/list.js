
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
          title:'零散数据重复上传如何删除？',
          name:'官明',
          time:'2015-12-18 17:50:01',
        },
        {
          id:2,
          title:' 使用教程的ppt中旅馆专题、地铁高频人员专题从哪里进？',
          name:'  胡恒信',
          time:'2015-11-09 12:26:43',
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
        title: `经验交流列表`,
        key: `/talkList`,
      }))
    }
  }

  _tabChange(){

  }

  columns(){
    const self = this
    return [
      {
        title:'留言标题',
        key:'title',
        dataIndex:'title',
        width: '60%',
        render:(text,record,index)=>(<p><Link to={`/talkPage/${record.id}`}>{text}</Link></p>)
      },
      {
        title:'留言人',
        key:'name',
        dataIndex:'name',
        width: '20%'
      },
      {
        title:'发布时间',
        key:'time',
        dataIndex:'time',
        width: '20%'
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
