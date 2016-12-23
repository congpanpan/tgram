/*服务首页*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table, Button, Tabs,Row,Col,Rate,Icon,Card} from 'antd'
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
        {key:'02',xm:'机动车查询接口',policeNumber:'七巧板 李某某',institutions:'5',sq:'8'},
        {key:'03',xm:'组织机构查询接口',policeNumber:'七巧板 李某某',institutions:'10',sq:'7'},
       
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
        title: '服务名称',
        dataIndex: 'xm',
        key: 'name',
        render: function(text,record){
          return (
            <div>
              <Link className="appName" to={`/dataService/serviceDetail`}>{text}</Link>
            </div>
          )
        }
      },
        {
        title: '制作单位  制作人',
        dataIndex: 'policeNumber',
        key: 'sex',
      },
     
      {
        title: '申请次数',
        dataIndex: 'institutions',
        key: 'institutions1',
      },
      {
        title: '评分',
        dataIndex: 'sq',
        key: 'sq',
        },     
    ]
  }
  updateState(){
    this.setState({})
  }

  render() {
  	const DemoBox=props=><p className={`height-${props.value}`}>{props.children}</p>
    return (
      <Panel>
        <div className="body welcome" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
        <WindowSize updateState={this.updateState}/>
        	<Row gutter={16}>
        		<Col span={12} className="box">
              <Card title="新增服务" className='service-div-cpp' extra={<Link to={`/dataService/serviceList`}>更多</Link>} >
                <div className='add-service-cpp'>
                  <ul>
                    <li>
                      <span>2016-11-18 admin 上线 </span> 
                      <a>客运售票记录接口</a>
                    </li>
                     <li>
                      <span>2016-11-18 admin 上线 </span> 
                      <a>客运售票记录接口</a>
                    </li> 
                    <li>
                      <span>2016-11-18 admin 上线 </span> 
                      <a>检查站总体当前数据（数字大屏）</a>
                    </li> 
                    <li>
                      <span>2016-11-18 admin 上线 </span> 
                      <a>客运售票记录接口</a>
                    </li> 
                  </ul>
                </div>
              </Card>
              <Card title="服务统计" className='service-div-cpp' extra={<Link to={`/dataService/serviceList`}>更多</Link>}>
                <div className='serviceCount-cpp'>
                  <Button className='add-button-cpp'>86</Button>
                  <Button className='add-bigButton-cpp'>39</Button>
                  <Button type="primary" className='add-button-cpp'><Link  to={`/dataService/addNewService`}>新增服务</Link></Button>
                </div>
              </Card>
              <Card title="提供方" className='service-div-cpp' extra={<Link to={`/dataService/serviceList`}>更多</Link>} >
                 <div className='provider-div-cpp'>
                  <span>数印</span>
                  <a>86</a>
                </div>
              </Card>
        		</Col>
        		<Col span={12} className="box">
              <Card title="服务推荐" className='service-bigDiv-cpp' extra={<Link to={`/dataService/serviceList`}>更多</Link>}>
                <div  className='service-bigDiv-cpp '>
                  <ul>
                    <li>
                      <span className='service-img-cpp'></span>
                       <a>人员核查接口(警务通)</a>
                        <span><Rate/></span>
                       <a className='more-cpp'>七巧板</a>
                    </li>
                    <li>
                      <span className='service-img-cpp'></span>
                       <a>人员核查接口(警务通)</a>
                      <span><Rate/></span>
                       <a className='more-cpp'>七巧板</a>
                    </li>
                    <li>
                      <span className='service-img-cpp'></span>
                       <a>人员核查接口(警务通)</a>
                       <span><Rate/></span>
                       <a className='more-cpp'>七巧板</a>
                    </li>
                    <li>
                      <span className='service-img-cpp'></span>
                       <a>人员核查接口(警务通)</a>
                       <span><Rate/></span>
                       <a className='more-cpp'>七巧板</a>
                    </li>
                  </ul>
                </div>
              </Card>
               <Card title="服务排行" className='service-div-cpp' extra={<Link to={`/dataService/serviceList`}>更多</Link>}>
                  <div className='service-table-cpp'>
                    <Table
                       columns={this.columns()} 
                        dataSource={this.state.dataSource}
                        pagination={ false}
                        bordered
                      />                  
                  </div>
              </Card>
        		</Col>
        	</Row>
        </div>
      </Panel>
    )

  }
}
