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
          appName: '数印搜索', 
          appMaker: '特朗普',
          appUseNumber: '32121',
          appValue: '88'
        },
        {
          appName: '电话号码聚合', 
          appMaker: '特朗普',
          appUseNumber: '34123',
          appValue: '44'
        },
        {
          appName: '数印碰撞', 
          appMaker: '特朗普',
          appUseNumber: '543543',
          appValue: '56'
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
        title: '应用名称',
        dataIndex: 'appName',
        key: 'appName',
        width: '30%',
        render: function(text,record){
          // debugger
          // console.log(record)
          return (
            <div>
              <Link className="appName" to={`/houseDetail/${record.id}`}>{text}</Link>
            </div>
          )
        }
      },
      {
        title: '制作单位、制作人',
        dataIndex: 'appMaker',
        key: 'appMaker',
        width: '30%',
      },
      {
        title: '应用次数',
        dataIndex: 'appUseNumber',
        key: 'appUseNumber',
        width: '25%',
      },
      {
        title: '评分',
        dataIndex: 'appValue',
        key: 'appValue',
        width: '15%',
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
