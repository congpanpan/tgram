import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, Row, Col, Button ,Form,Select,Input,Pagination} from 'antd'
//引入请求的模块
import { connect } from 'react-redux'
import { updateTabList } from 'actions/tabList'
import WindowSize from 'components/windowSize'

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
      currentPage: 1,
      pageSize: 10,
      list:[
        {
          serviceName: '客运售票记录接口', 
          provider: '数印',
          versionNumber: '1.0',
          tx: 'BDW-EWRE-WR-09',
          star: '3',
          serviceAddress: 'http://10.118.203.232:8088/basepolice_new/html',
          ruquestMethod: 'POST',
          supportFormat: 'JSON',
          applyNumbers: '3',
          passTime: '2016-12-21',
        },
        {
          serviceName: '客运售票记录接口', 
          provider: '数印',
          versionNumber: '1.0',
          tx: 'BDW-EWRE-WR-09',
          star: '3',
          serviceAddress: 'http://10.118.203.232:8088/basepolice_new/html',
          ruquestMethod: 'POST',
          supportFormat: 'JSON',
          applyNumbers: '3',
          passTime: '2016-12-21',
        },
        {
          serviceName: '客运售票记录接口', 
          provider: '数印',
          versionNumber: '1.0',
          tx: 'BDW-EWRE-WR-09',
          star: '3',
          serviceAddress: 'http://10.118.203.232:8088/basepolice_new/html',
          ruquestMethod: 'POST',
          supportFormat: 'JSON',
          applyNumbers: '3',
          passTime: '2016-12-21',
        },
        {
          serviceName: '客运售票记录接口', 
          provider: '数印',
          versionNumber: '1.0',
          tx: 'BDW-EWRE-WR-09',
          star: '3',
          serviceAddress: 'http://10.118.203.232:8088/basepolice_new/html',
          ruquestMethod: 'POST',
          supportFormat: 'JSON',
          applyNumbers: '3',
          passTime: '2016-12-21',
        },
        
      ]
     }
     this.updateState=this.updateState.bind(this)
  }
   // 组件已经加载到dom中
  componentDidMount() {//debugger
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `服务列表`,
        key: `/dataService/serviceList`,
      }))
    } 
  }
  // 表格展示项的配置
  columns() {
    return [
     
      {
        title: '服务名称',
        dataIndex: 'serviceName',
        key: 'serviceName',
      },
      {
        title: '提供方',
        dataIndex: 'provider',
        key: 'provider',
      },
      {
        title: '版本号',
        dataIndex: 'versionNumber',
        key: 'versionNumber',
      },
      {
        title: 'TX码',
        dataIndex: 'tx',
        key: 'tx',
      },
      {
        title: '星级',
        dataIndex: 'star',
        key: 'star',
      },
      {
        title: '服务地址',
        dataIndex: 'serviceAddress',
        key: 'serviceAddress',
      },
      {
        title: '请求方式',
        dataIndex: 'ruquestMethod',
        key: 'ruquestMethod',
      },
      {
        title: '支持格式',
        dataIndex: 'supportFormat',
        key: 'supportFormat',
      },
      {
        title: '申请次数',
        dataIndex: 'applyNumbers',
        key: 'applyNumbers',
      },
      {
        title: '审核通过时间',
        dataIndex: 'passTime',
        key: 'passTime',
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
  updateState(){
    this.setState({})
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
      <div  className="appRankWrap"  style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        <Form onSubmit={this.handleSubmit}>      
          <FormItem
            {...formItemLayout}
          >
            {
              <Select defaultValue="提供方">
                <Option value="WR">WR</Option>
                <Option value="borf">borf</Option>   
              </Select>
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
          >
            {
              <Select defaultValue="请求方式">
                <Option value="POST">POST</Option>
                <Option value="GET">GET</Option>   
              </Select>
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
          >
            {
              <Select defaultValue="支持格式">
                <Option value="JSON">JSON</Option>
                <Option value="XML">XML</Option> 
                <Option value="JSONP">JSONP</Option>
                <Option value="XML">XML</Option>    
              </Select>
            }
          </FormItem>
        </Form>
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
