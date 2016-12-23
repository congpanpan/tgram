/*服务申请*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs,Row,Col,Modal } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import ServiceAddModal from './serviceAddModal'


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
    	ServiceAddVisible:false
    }
    
    this.serviceApply=this.serviceApply.bind(this)
    this.handleserviceAddCancel=this.handleserviceAddCancel.bind(this)
    this.handleserviceAddOk=this.handleserviceAddOk.bind(this)

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
  serviceApply(){
  	this.setState({
  		 ServiceAddVisible: true
  	})
  }
  handleserviceAddOk(){
  	this.setState({
  		ServiceAddVisible:false
  	})
  }
  handleserviceAddCancel(){
  	this.setState({
  		ServiceAddVisible:false
  	})
  }


  render() {
    return (
      <Panel className='serviceApply-cpp'>
        <div className='serviceApply-cpp'>
	      <div className='apply-div-cpp'>
	      	<Row>
	      	 <Col span={2}>
		      	  <div>
		      	   	<span className='service-img-cpp'></span>
		      	  </div>
	      	 </Col>
	      		<Col span={6}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>组织机构查询接口</li>
		      				<li>请求方式:POST</li>
		      				<li><span className='apply-span-cpp'>已申请</span><span>40</span></li>
		      				<li><span className='use-span-cpp'>已使用</span><span>0</span></li>
		      			</ul>
	      		  </div>
	      		</Col>
	      		<Col span={10}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>提供方:数印</li>
		      				<li>请求方式:POST</li>
		      				<li>提供方:数印</li>
		      				<li>服务状态:可用</li>
		      			</ul>
		      		</div>
	      		</Col>
	      		<Col span={6}>
	      		  <div className='apply-button-cpp'>
	      		  	<Button onClick={this.serviceApply}>申请服务</Button>
	      		  </div>   
	      		</Col>
	      	</Row>
	      </div>
	       <div className='apply-div-cpp'>
	      	<Row>
	      	 <Col span={2}>
		      	  <div>
		      	   	<span className='service-img-cpp'></span>
		      	  </div>
	      	 </Col>
	      		<Col span={6}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>组织机构查询接口</li>
		      				<li>请求方式:POST</li>
		      				<li><span className='apply-span-cpp'>已申请</span><span>40</span></li>
		      				<li><span className='use-span-cpp'>已使用</span><span>0</span></li>
		      			</ul>
	      		  </div>
	      		</Col>
	      		<Col span={10}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>提供方:数印</li>
		      				<li>请求方式:POST</li>
		      				<li>提供方:数印</li>
		      				<li>服务状态:可用</li>
		      			</ul>
		      		</div>
	      		</Col>
	      		<Col span={6}>
	      		  <div className='apply-button-cpp'>
	      		  	<Button onClick={this.serviceApply}>申请服务</Button>
	      		  </div>   
	      		</Col>
	      	</Row>
	      </div>
	       <div className='apply-div-cpp'>
	      	<Row>
	      	 <Col span={2}>
		      	  <div>
		      	   	<span className='service-img-cpp'></span>
		      	  </div>
	      	 </Col>
	      		<Col span={6}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>组织机构查询接口</li>
		      				<li>请求方式:POST</li>
		      				<li><span className='apply-span-cpp'>已申请</span><span>40</span></li>
		      				<li><span className='use-span-cpp'>已使用</span><span>0</span></li>
		      			</ul>
	      		  </div>
	      		</Col>
	      		<Col span={10}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>提供方:数印</li>
		      				<li>请求方式:POST</li>
		      				<li>提供方:数印</li>
		      				<li>服务状态:可用</li>
		      			</ul>
		      		</div>
	      		</Col>
	      		<Col span={6}>
	      		  <div className='apply-button-cpp'>
	      		  	<Button onClick={this.serviceApply}>申请服务</Button>
	      		  </div>   
	      		</Col>
	      	</Row>
	      </div>
	      <div className='apply-div-cpp'>
	      	<Row>
	      	 <Col span={2}>
		      	  <div>
		      	   	<span className='service-img-cpp'></span>
		      	  </div>
	      	 </Col>
	      		<Col span={6}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>组织机构查询接口</li>
		      				<li>请求方式:POST</li>
		      				<li><span className='apply-span-cpp'>已申请</span><span>40</span></li>
		      				<li><span className='use-span-cpp'>已使用</span><span>0</span></li>
		      			</ul>
	      		  </div>
	      		</Col>
	      		<Col span={10}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>提供方:数印</li>
		      				<li>请求方式:POST</li>
		      				<li>提供方:数印</li>
		      				<li>服务状态:可用</li>
		      			</ul>
		      		</div>
	      		</Col>
	      		<Col span={6}>
	      		  <div className='apply-button-cpp'>
	      		  	<Button onClick={this.serviceApply}>申请服务</Button>
	      		  </div>   
	      		</Col>
	      	</Row>
	      </div>
	      <div className='apply-div-cpp'>
	      	<Row>
	      	 <Col span={2}>
		      	  <div>
		      	   	<span className='service-img-cpp'></span>
		      	  </div>
	      	 </Col>
	      		<Col span={6}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>组织机构查询接口</li>
		      				<li>请求方式:POST</li>
		      				<li><span className='apply-span-cpp'>已申请</span><span>40</span></li>
		      				<li><span className='use-span-cpp'>已使用</span><span>0</span></li>
		      			</ul>
	      		  </div>
	      		</Col>
	      		<Col span={10}>
		      		<div className='apply-title-cpp'>
		      			<ul>
		      				<li>提供方:数印</li>
		      				<li>请求方式:POST</li>
		      				<li>提供方:数印</li>
		      				<li>服务状态:可用</li>
		      			</ul>
		      		</div>
	      		</Col>
	      		<Col span={6}>
	      		  <div className='apply-button-cpp'>
	      		  	<Button onClick={this.serviceApply}>申请服务</Button>
	      		  </div>   
	      		</Col>
	      	</Row>
	      </div>
	      </div>
	      <Modal
            visible={this.state.ServiceAddVisible}
            title="申请服务"
            onOk={this.handleserviceAddOk}
            onCancel={this.handleserviceAddCancel}
          >
           <ServiceAddModal />
         </Modal>		

      </Panel>
    )

  }
}
