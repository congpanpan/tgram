import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, Row, Col, Button ,Form,Select,Input,Pagination} from 'antd'
//引入请求的模块
import { connect } from 'react-redux'
import { updateTabList } from 'actions/tabList'
import WindowSize from 'components/windowSize'
import  './cards.less'
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
    this.updateState = this.updateState.bind(this)
    this.state = {
      currentPage: 1,
      pageSize: 10,
      list:[
        {
          appName: '数印搜索', 
          appClass: '特朗普',
          appSClass: '数据分析',
          place: 'www.baidu.com',
          edition: '32121',
          applyTime: '2016-02-08',
          examTime: '2016-02-08',   
          examMore: '合格的产品',
          examSign: '合格',
          examState: '合格',
          operation: '无',
        },
        {
          appName: '数印搜索', 
          appClass: '特朗普',
          appSClass: '数据分析',
          place: 'www.baidu.com',
          edition: '32121',
          applyTime: '2016-02-08',
          examTime: '2016-02-08',   
          examMore: '合格的产品',
          examSign: '合格',
          examState: '合格',
          operation: '无',
        },
      ]
     }
  }
   // 组件已经加载到dom中
  componentDidMount() {//debugger
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `原生应用`,
        key: `/dataApp/appNative`,
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
        width: '11%',
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
        title: '应用类别',
        dataIndex: 'appClass',
        key: 'appClass',
        width: '8%',
      },
      {
        title: '应用分类',
        dataIndex: 'appSClass',
        key: 'appSClass',
        width: '8%',
      },
      {
        title: '访问地址',
        dataIndex: 'place',
        key: 'place',
        width: '11%',
      },
      {
        title: '版本号',
        dataIndex: 'edition',
        key: 'edition',
        width: '11%',
      },
      {
        title: '申请时间',
        dataIndex: 'applyTime',
        key: 'applyTime',
        width: '10%',
      },
      {
        title: '审核时间',
        dataIndex: 'examTime',
        key: 'examTime',
        width: '10%',
      },
      {
        title: '审核备注',
        dataIndex: 'examMore',
        key: 'examMore',
        width: '10%',
      },
      {
        title: '推荐标志',
        dataIndex: 'examSign',
        key: 'examSign',
        width: '8%',
      },
      {
        title: '审核状态',
        dataIndex: 'examState',
        key: 'examState',
        width: '8%',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        width: '5%',
      },
    ]
  }
  //page改变的调用
  pageChange(currentPage) {
    console.log(currentPage);
    //page改变时，重新获取新的数据
    // this.props.dispatch(fetchHouseCheckList({ currentPage: currentPage }))
    this.setState({
      currentPage: currentPage
    })
  }
  //pageSize改变的调用
  pageSizeChange (e,pageSize){
    console.log(pageSize)
    //pageSize改变时，重新获取新的数据
    // this.props.dispatch(fetchHouseCheckList({ currentPage: 1 ,pageSize: pageSize}))
    this.setState({
      pageSize: pageSize,
      currentPage: 1
    })
  }
  //显示总条数
  showTotal(){
    return `共 ${30} 条`
  }
  render() {
    const {
            relyListSearchResult,
            peopleSituationResult
        } = this.props
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div  className="appRankWrap body" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px', paddingBottom: '20px'}}>
        <WindowSize updateState={this.updateState}/>
        <Form onSubmit={this.handleSubmit}>      
          <FormItem
            {...formItemLayout}
          >
            {
              <Select defaultValue="应用分类">
                <Option value="中国共产党员">中国共产党员</Option>
                <Option value="中国共产党预备员">中国共产党预备员</Option>   
              </Select>
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
          >
            {
              <Select defaultValue="模型应用">
                <Option value="中国共产党员">中国共产党员</Option>
                <Option value="中国共产党预备员">中国共产党预备员</Option>   
              </Select>
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
          >
            {
              <Select defaultValue="模型应用">
                <Option value="中国共产党员">中国共产党员</Option>
                <Option value="中国共产党预备员">中国共产党预备员</Option>   
              </Select>
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
          >
            {
              <Input placeholder="搜索"/>
            }
          </FormItem>
        </Form>
        <Table 
          columns={this.columns()} 
          dataSource={this.state.list}
          pagination={false}
          bordered
        />
        <div className="listFooter">
          <Pagination
            current={this.state.currentPage || 1}
            total={30}
            showSizeChanger //是否可以改变pageSize
            onShowSizeChange={this.pageSizeChange.bind(this)}
            onChange={this.pageChange.bind(this)}
            showTotal={this.showTotal.bind(this)}
          />
        </div> 
      </div>
       
    )
  }
}
