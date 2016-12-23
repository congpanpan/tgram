import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, Row, Col, Button ,Form,Select,Input,Pagination} from 'antd'
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
        title: `新增原生应用`,
        key: `/dataApp/addNewNative`,
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
  render() {
    const {
            relyListSearchResult,
            peopleSituationResult
        } = this.props
    return (
      <div  className="addNativeWrap body" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px', paddingBottom: '20px'}}>
        <WindowSize updateState={this.updateState}/>
        <h4>新建应用</h4>
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
              <td><input type="text" placeholder="应用名称"/></td>
              <td>应用分类</td>
              <td>
                <Select placeholder="交通警察支队指挥中心">
                  <Option value="11">交通警察支队指挥中心1</Option>
                  <Option value="22">交通警察支队指挥中心2</Option>
                  <Option value="33">交通警察支队指挥中心3</Option>
                </Select>
              </td>
            </tr>
            <tr>
              <td>应用说明</td>
              <td><input type="text" placeholder="应用说明"/></td>
              <td>应用类别</td>
              <td>
                <Select placeholder="交通警察支队指挥中心">
                  <Option value="11">交通警察支队指挥中心1</Option>
                  <Option value="22">交通警察支队指挥中心2</Option>
                  <Option value="33">交通警察支队指挥中心3</Option>
                </Select>
              </td>
            </tr>
            <tr>
              <td>访问地址</td>
              <td><input type="text" placeholder="访问地址"/></td>
              <td>版本号</td>
              <td><input type="text" placeholder="版本号"/></td>
            </tr>
            <tr>
              <td>显示数据</td>
              <td><input type="text" placeholder="显示数据"/></td>
              <td>应用开发所属阶段</td>
              <td>
                <Select placeholder="交通警察支队指挥中心">
                  <Option value="11">交通警察支队指挥中心1</Option>
                  <Option value="22">交通警察支队指挥中心2</Option>
                  <Option value="33">交通警察支队指挥中心3</Option>
                </Select>
              </td>
            </tr>
            <tr>
              <td>应用开发管辖单位编码</td>
              <td>
                <Select placeholder="交通警察支队指挥中心">
                  <Option value="11">交通警察支队指挥中心1</Option>
                  <Option value="22">交通警察支队指挥中心2</Option>
                  <Option value="33">交通警察支队指挥中心3</Option>
                </Select>
              </td>
              <td>应用开发管辖单位名称</td>
              <td>00000001111</td>
            </tr>
            <tr>
              <td>应用开发管辖单位联系人</td>
              <td><input type="text" placeholder="应用开发管辖单位联系人"/></td>
              <td>应用开发管辖单位联系电话</td>
              <td><input type="text" placeholder="应用开发管辖单位联系电话"/></td>
            </tr>
          </tbody>
        </table>
        <div className="keepModel"><Button type="primary" >保存模型</Button></div>
      </div>
       
    )
  }
}
