import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, Row, Col, Button ,Form,Select,Input,Pagination,Rate} from 'antd'
//引入请求的模块
import { connect } from 'react-redux'
import { updateTabList } from 'actions/tabList'
import WindowSize from 'components/windowSize'
import  './style.less'
/*import {
  fetchRelyList,  
  } from 'actions/rely'*/
const FormItem = Form.Item;
const Option = Select.Option;

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
@Form.create({
    onFieldsChange(props, items) {
        console.log(props)
        console.log(items)
        // props.cacheSearch(items);
    },
})
export default class TypeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3,
      list:[
        {
          appName: '数印搜索', 
          appMaker: '特朗普',
          appClass: '数据分析',
          ifNative: '是',
          appUseNumber: '32121',
          appExam: '合格'
        },
        {
          appName: '多人关系对比', 
          appMaker: '特朗普',
          appClass: '数据分析',
          ifNative: '是',
          appUseNumber: '32121',
          appExam: '合格'
        },
        {
          appName: '数印搜索', 
          appMaker: '特朗普',
          appClass: '数据分析',
          ifNative: '是',
          appUseNumber: '32121',
          appExam: '合格'
        }
      ]
     }
    this.updateState = this.updateState.bind(this)
  }
   // 组件已经加载到dom中
  componentDidMount() {//debugger
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `新增零散数据`,
        key: `/scatteredData/newScatterData`,
      }))
    } 
  }
  updateState(){
    this.setState({})
  }
  // 表格展示项的配置
  columns() {
    return [
      {
        title: '应用名称',
        dataIndex: 'appName',
        key: 'appName',
        width: '25%',
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
        title: '应用分类',
        dataIndex: 'appClass',
        key: 'appClass',
        width: '15%',
      },
      {
        title: '是否原生',
        dataIndex: 'ifNative',
        key: 'ifNative',
        width: '15%',
      },
      {
        title: '开发单位、制作人',
        dataIndex: 'appMaker',
        key: 'appMaker',
        width: '20%',
      },
      {
        title: '应用次数',
        dataIndex: 'appUseNumber',
        key: 'appUseNumber',
        width: '15%',
      },
      {
        title: '审核备注',
        dataIndex: 'appExam',
        key: 'appExam',
        width: '20%',
      },
    ]
  }
  startChange(value){
    this.setState({
      value: value
    })
  }
  render() {
    const {
            relyListSearchResult,
            peopleSituationResult
        } = this.props
    return (
      <div  className="newScatterDataWrap body" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px', paddingBottom: '20px'}}>
        <WindowSize updateState={this.updateState}/>
        <h4>零散数据样本</h4>
        {/*<Table 
          columns={this.columns()} 
          dataSource={this.state.list}
          pagination={false}
          bordered
        /> */}
        <table>
          <tbody>
            <tr>
              <td>应用名称</td>
              <td>地铁高频人员信息</td>
            </tr>
            <tr>
              <td>制作单位</td>
              <td>科技通讯管理局</td>
            </tr>
            <tr>
              <td>应用分类</td>
              <td>原生应用</td>
            </tr>
            <tr>
              <td>访问地址</td>
              <td>www.12306.com</td>
            </tr>
          </tbody>
        </table>
        <h4>零散数据属性</h4>
        <table>
          <tbody>
            <tr>
              <td>应用名称</td>
              <td>地铁高频人员信息</td>
              <td>应用类别</td>
              <td>原生应用</td>
            </tr>
            <tr>
              <td>制作单位</td>
              <td>科技通讯管理局</td>
              <td>制作人</td>
              <td></td>
            </tr>
            <tr>
              <td>应用分类</td>
              <td>原生应用</td>
              <td>应用说明</td>
              <td>地铁高频人员信息</td>
            </tr>
            <tr>
              <td>访问地址</td>
              <td>www.12306.com</td>
              <td>审核状态</td>
              <td>通过</td>
            </tr>
          </tbody>
        </table>
        <ul className="userValueList">
          <li className="userValueItem">
            <div className="valueTime">
              <span>这是一个很不错的项目</span>
              <span>
                <em>2016-12-22</em>
                <em>16:26:50</em>
                <em>梁祝</em>
              </span>
            </div>
            <div className="valueNumber">
              <Rate disabled value={3}/>
            </div>
          </li>
        </ul>
        <div className="userValue">
          <p><span>零散数据评价</span><span>{this.state.value} starts</span></p>
          <Rate onChange={this.startChange.bind(this)} value={this.state.value}/>
          <textarea className="userValueText"></textarea>
        </div>
        <div className="keepModel"><Button type="primary" >提交评价</Button></div>
      </div>
       
    )
  }
}
