/*服务申请*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table, Button, Tabs,Row,Col,Input,Mention } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import WindowSize from 'components/windowSize'


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
        dataSource:[
        {key:'01',xm:'组织机构查询接口',policeNumber:'七巧板 李某某',institutions:'10',sq:'7'},
      ]
    }
    this.updateState = this.updateState.bind(this)
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
   columns() {
    return [
    /*  {
        title: '',
        key: 'index',
        render: (text, recordId, index) => <span>{index + 1}</span>,
      },*/
      {
        title: '错误码',
        dataIndex: 'xm',
        key: 'name',
        render: function(text,record){
          return (
            <div>
             <span>{text}</span>
            </div>
          )
        }
      },
        {
        title: '状态',
        dataIndex: 'policeNumber',
        key: 'sex',
      },
     
      {
        title: '说明',
        dataIndex: 'institutions',
        key: 'institutions1',
      },
    ]
  }
   updateState(){
    this.setState({})
  }


  render() {
    return (
      <Panel>
       <div className='serviceApi-cpp' style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
         <WindowSize updateState={this.updateState}/>
        <ul>
          
          <li>
            <span>错误码参数参数：</span>
          </li>
          <div className='params-div-cpp'>
            <Table
               columns={this.columns()} 
                dataSource={this.state.dataSource}
                pagination={ false}
                bordered
              />        
           </div>
          
        </ul>
        
       </div>
     
      </Panel>
    )

  }
}
