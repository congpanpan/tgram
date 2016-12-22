import React,{Component} from 'react'
import { Row, Col, Icon, Tabs, Modal, Button } from 'antd'

export default class gsearch extends Component{
	// 初始化页面常量 绑定事件方法
	constructor(props,context){
		super(props)
		this.state = {
      visible: false,
		}
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
	}

  showModal(){
    this.props.handleSelect()
    this.setState({ visible: true})
  }

  handleOk(){

  }

  handleCancel(){
    this.props.handleSelect()
    this.setState({ visible: false})
  }

	render(){
		return(
			<div>
        <Modal 
          className="gsearch" id="gsearch"
          width="100%"
          style={{top: 0}}
          visible={this.props.status}
          title="title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={
            [
              <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返回</Button>,
              <Button key="submit" type="primary" size="large" onClick={this.handleOk}>确定</Button>,
            ]
          }
          >
          <div className="head">
            <Icon onClick={this.props.handleSelect} type="left" />
            <span className="title">选择数据</span>
          </div>
        </Modal>
				
			</div>
		)	
	}
}