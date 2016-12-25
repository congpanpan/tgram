/*服务申请*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table, Button, Tabs,Row,Col,Input,Radio} from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import WindowSize from 'components/windowSize'


const TabPane = Tabs.TabPane;
const RadioButton = Radio.Button;
const RadioGroup =Radio.Group;



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
       list:[
        {
          serviceName: '客运售票记录接口', 
          applyTime:'2016-12-25',
          tx:'HGY-KHK-YTY5',
          applyStatus:'未审核 不可用',
          expriyDate:'3年',
          keyValue:'wftrhy3653457346',
          ipAddress:'10.118.133.88',
          passTime: '2016-12-21',
          deadline:'',
          reviewer:'李小明',
          done:'评级 延缓 删除 上传 下载 导出'
        },
         {
          serviceName: '客运售票记录接口', 
          applyTime:'2016-12-25',
          tx:'HGY-KHK-YTY5',
          applyStatus:'未审核 不可用',
          expriyDate:'3年',
          keyValue:'wftrhy3653457346',
          ipAddress:'10.118.133.88',
          passTime: '2016-12-21',
          deadline:'',
          reviewer:'李小明',
          done:''
        },
         {
          serviceName: '客运售票记录接口', 
          applyTime:'2016-12-25',
          tx:'HGY-KHK-YTY5',
          applyStatus:'未审核 不可用',
          expriyDate:'3年',
          keyValue:'wftrhy3653457346',
          ipAddress:'10.118.133.88',
          passTime: '2016-12-21',
          deadline:'',
          reviewer:'李小明',
          done:''
        },
       
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
  // 表格展示项的配置
  columns() {
    return [
     
      {
        title: '服务名称',
        dataIndex: 'serviceName',
        key: 'serviceName',
      },
      {
        title: '申请时间',
        dataIndex: 'applyTime',
        key: 'applyTime',
      },
      {
        title: 'TX码',
        dataIndex: 'tx',
        key: 'tx',
      },
        {
        title: '审批状态',
        dataIndex: 'applyStatus',
        key: 'applyStatus',
      },
      {
        title: '有效期',
        dataIndex: 'expriyDate',
        key: 'expriyDate',
      },
      {
        title: 'key',
        dataIndex: 'keyValue',
        key: 'keyValue',
      },
      {
        title: 'ip地址',
        dataIndex: 'ipAddress',
        key: 'ipAddress',
      },
      {
        title: '审核通过时间',
        dataIndex: 'passTime',
        key: 'passTime',
      },
      {
        title: '截止时间',
        dataIndex: 'deadline',
        key: 'deadline',
      },
      {
        title: '审核人',
        dataIndex: 'reviewer',
        key: 'reviewer',
      },
      {
        title: '操作',
        dataIndex: 'done',
        key: 'done',
          render: function (text, record, index) {
            return (
            <div>
              <Link className="appName" to={`/dataService/serviceDetail`}>
              <span>评级</span> <span>延缓</span><span>删除</span><span>上传</span><span>下载</span><span>导出</span>
              </Link>
            </div>
          )
        },      
       
      },
    ]
  }
  updateState(){
    this.setState({})
  }


  render() {
    return (
      <Panel>
       <div className="body " style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
          <WindowSize updateState={this.updateState}/>
          <Row>
            <Col  span={6}>
              <div>
                <RadioGroup defaultValue="a" size="large">
                  <RadioButton value="a" >服务列表</RadioButton>
                  <RadioButton value="b">服务申请

                  </RadioButton>
                </RadioGroup>
                
              </div>
              
            </Col>
            <Col span={12}>
            <div className='search-cpp'>
              <Input  placeholder="搜索服务名称"/>
             </div>
            </Col>
            <Col span={6}>
              <div className='serviceManage-button-cpp'> 
                <Button><Link  to={`/dataService/addNewService`}><span>新增服务</span></Link></Button>

              </div>
            </Col>
            
          </Row>
         <div>
            <Table 
              columns={this.columns()} 
              dataSource={this.state.list}
              pagination={false}
              bordered
            />
            
          </div>
      </div>
     
      </Panel>
    )

  }
}
