import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, Row, Col, Button ,} from 'antd'
//引入请求的模块
import { connect } from 'react-redux'
import { updateTabList } from 'actions/tabList'
import  './style.less'
/*import {
  fetchRelyList,  
  } from 'actions/rely'*/

//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
      relyListSearchResult: state.relyListSearchResult,
      deleteDetailResult: state.deleteDetailResult,
      exportDataResult: state.exportDataResult,
      addRelyPowerResult: state.addRelyPowerResult,
      peopleSituationResult: state.peopleSituationResult,
      amList: state.amList,
    })
)

export default class TypeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[
        {
          keyWord: '数印搜索', 
          searchNumber: '特朗普',
          NewKeyWord: '32121',
          NewSearchNumber: '88'
        },
        {
          keyWord: '电话号码聚合', 
          searchNumber: '特朗普',
          NewKeyWord: '34123',
          NewSearchNumber: '44'
        },
        {
          keyWord: '数印碰撞', 
          searchNumber: '特朗普',
          NewKeyWord: '543543',
          NewSearchNumber: '56'
        },
      ]
     }
  }
   // 组件已经加载到dom中
  componentDidMount() {//debugger
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `应用列表`,
        key: `/dataApp/appRank`,
      }))
    } 
  }
     // 表格展示项的配置
  columns() {
    return [
      {
        title: '关键词',
        dataIndex: 'keyWord',
        key: 'keyWord',
        width: '30%',
      },
      {
        title: '搜索次数',
        dataIndex: 'searchNumber',
        key: 'searchNumber',
        width: '20%',
      },
      {
        title: '关键词',
        dataIndex: 'NewKeyWord',
        key: 'NewKeyWord',
        width: '30%',
      },
      {
        title: '搜索次数',
        dataIndex: 'NewSearchNumber',
        key: 'NewSearchNumber',
        width: '20%',
      },
    ]
  }

  render() {
    const {
            relyListSearchResult,
            peopleSituationResult
        } = this.props
    return (
      <div  className="appRankWrap">
        <Table 
          columns={this.columns()} 
          dataSource={this.state.list}
          pagination={false}
          bordered
        />
      </div>  
    )
  }
}
