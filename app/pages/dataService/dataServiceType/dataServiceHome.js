/*服务首页*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs,Row,Col,Rate,Icon } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'


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
        render:text=><span>{text}</span>
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

  render() {
  	const DemoBox=props=><p className={`height-${props.value}`}>{props.children}</p>
    return (
      <Panel>
        <div>
        	<Row gutter={16}>
        		<Col span={12}>
        		{/*  <DemoBox value={}></DemoBox>*/}
        		  <div className='service-div-cpp'>
        		  	<span className='div-title-cpp'>新增服务</span>
        		  	<a className='more-cpp'>更多</a>
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
        		  </div>
        		   <div className='service-div-cpp'>
        		  	<span className='div-title-cpp' >服务统计</span>
        		  	<a className='more-cpp'>更多</a>
        		  	<div className='serviceCount-cpp'>
        		  	     <Button className='add-button-cpp'>86</Button>
        		  	     <Button className='add-bigButton-cpp'>39</Button>
        		  	    <Button type="primary" className='add-button-cpp'>新增服务</Button>
        		  	</div>
        		  </div>
        		  <div className='service-div-cpp'>
        		  	<span className='div-title-cpp'>提供方</span>
        		  	<div className='provider-div-cpp'>
        		  		<span>数印</span>
        		  		<a>86</a>
        		  	</div>
        		  </div>
        		</Col>
        		<Col span={12}>
        		  <div className='service-bigDiv-cpp '>
        		  	<span className='div-title-cpp'>服务推荐</span>
        		  	<a className='more-cpp'>更多</a>
        		  	<div >
	        		  	<ul>
	        		  		<li>
                      <span className='service-img-cpp'></span>
	        		  		   <a>人员核查接口(警务通)</a>
	        		  		   <span><Icon type="star-o"/>sdfg</span>
	        		  		   <a className='more-cpp'>七巧板</a>
	        		  		</li>
                    <li>
                      <span className='service-img-cpp'></span>
                       <a>人员核查接口(警务通)</a>
                       <span><Icon type="star-o"/>sdfg</span>
                       <a className='more-cpp'>七巧板</a>
                    </li>
                    <li>
                      <span className='service-img-cpp'></span>
                       <a>人员核查接口(警务通)</a>
                       <span><Icon type="star-o"/>sdfg</span>
                       <a className='more-cpp'>七巧板</a>
                    </li>
                    <li>
                      <span className='service-img-cpp'></span>
                       <a>人员核查接口(警务通)</a>
                       <span><Icon type="star-o"/>sdfg</span>
                       <a className='more-cpp'>七巧板</a>
                    </li>
	        		  	</ul>
        		    </div>
        		  </div>

        		  <div className='service-div-cpp'>
        		  	<span className='div-title-cpp'>服务排行</span>
        		  	<a className='more-cpp'>更多</a>
                <div className='service-table-cpp'>
                  <Table
                     columns={this.columns()} 
                      dataSource={this.state.dataSource}
                      pagination={ false}
                      bordered
                    />                  
                </div>

        		  </div>

        		</Col>
        	</Row>
        </div>
      </Panel>
    )

  }
}
