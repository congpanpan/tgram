/*服务申请*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs,Row,Col,Input,Modal } from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import ServiceApi from './serviceApi'
import ServiceError from './serviceError'
import ServiceAddModal from './serviceAddModal'
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
      ServiceAddVisible:false
    }
    this._typeChange=this._typeChange.bind(this)
    this.serviceApply=this.serviceApply.bind(this)
    this.handleserviceAddCancel=this.handleserviceAddCancel.bind(this)
    this.handleserviceAddOk=this.handleserviceAddOk.bind(this)
    this.updateState=this.updateState.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
     if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `服务列表`,
        key: `/dataService/serviceDetail`,
      }))
    } 

    
  }
  _typeChange(key){
    this.setState({key:key})
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
   updateState(){
    this.setState({})
  }



  render() {
    return (
      <Panel>
       <div className='detail-cpp' >
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
              <div className='apply-title-cpp '>
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
        <div className='detail-cpp'>
          <span>描述</span>
          <p>根据机构号码或者营业执照号码查询企业信息</p>
        </div>
        <div className='detail-cpp'>
          <Tabs tabPosition="top" onChange={this._typeChange}>
            <TabPane tab="API" key="1" >
            <ServiceApi/>
            
            </TabPane>
            <TabPane tab="错误码" key="2">
            <ServiceError/>
            
            </TabPane>
             <TabPane tab="调试工具" key="3">
              <ServiceError/>
            
            </TabPane>
             <TabPane tab="日志" key="4">
              <ServiceError/>
             
            </TabPane>
          </Tabs>
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
