import React,{Component} from 'react'
import { Row, Col, Icon, Tabs, Modal, Button, Tag, Badge } from 'antd'
const TabPane = Tabs.TabPane
const CheckableTag = Tag.CheckableTag

export default class gsearch extends Component{
	// 初始化页面常量 绑定事件方法
	constructor(props,context){
		super(props)
		this.state = {
      visible: false,
      currentTab: '',
      selectedList: [
        {
          id: 1,
          name: '常住人口',
          type: 1,
          checked: false
        },
        {
          id: 2,
          name: '居住人口',
          type: 2,
          checked: false
        },
        {
          id: 3,
          name: '境外人员',
          type: 3,
          checked: false
        },
        {
          id: 4,
          name: '三实访查人口',
          type: 3,
          checked: false
        },
      ],
      data: [
        {
          tab: '人员',
          pane: [
            {
              title: '基本信息',
              list: [
                {
                  id: 1,
                  name: '常住人口',
                  type: 1,
                  checked: false
                },
                {
                  id: 2,
                  name: '居住人口',
                  type: 2,
                  checked: false
                },
                {
                  id: 3,
                  name: '境外人员',
                  type: 3,
                  checked: false
                },
                {
                  id: 4,
                  name: '三实访查人口',
                  type: 3,
                  checked: false
                },
                {
                  id: 5,
                  name: '三实访查人口2',
                  type: 3,
                  checked: false
                },
              ]
            },
            {
              title: '身份登记',
              list: [
                {
                  id: 1,
                  name: '驾照登记',
                  type: 1,
                  checked: false
                },
                {
                  id: 2,
                  name: '驾驶学员登记',
                  type: 1,
                  checked: false
                },
                {
                  id: 3,
                  name: '市民卡',
                  type: 1,
                  checked: false
                },
                {
                  id: 4,
                  name: '出入境证件登记',
                  type: 1,
                  checked: false
                },
              ]
            },
          ]
        },
        {
          tab: '车辆',
          pane: [
            {
              title: '车辆登记',
              list: [
                {
                  id: 1,
                  name: '机动车登记',
                  type: 1,
                  checked: false
                },
                {
                  id: 2,
                  name: '电动自行车登记',
                  type: 2,
                  checked: false
                },
              ]
            },
            {
              title: '车辆轨迹',
              list: [
                {
                  id: 1,
                  name: '卡口过车记录',
                  type: 1,
                  checked: false
                },
                {
                  id: 2,
                  name: '城管泊车记录',
                  type: 1,
                  checked: false
                },
                {
                  id: 3,
                  name: '市民卡',
                  type: 1,
                  checked: false
                },
                {
                  id: 4,
                  name: '出入境证件登记',
                  type: 1,
                  checked: false
                },
              ]
            },
          ]
        },
      ]
		}
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.listType = this.listType.bind(this)
	}

  componentDidMount(){
    this.setState({
      currentTab: this.state.data[0].tab
    })
  }

  showModal(){
    this.props.handleSelect()
    this.setState({ visible: true})
  }

  handleOk(){

  }

  // 取消弹窗
  handleCancel(){
    this.props.handleSelect()
    this.setState({ visible: false})
  }

  // 选择tag
  handleChange(tag, checked){
    console.log(tag)
    console.log(checked)
    tag.checked = !tag.checked
    this.setState({})
  }

  // 判断当前的数据类型
  listType(e, type){
    let a = ''
    switch(type){
      case 1:
        a = ''
      break
      case 2:
        a = 'green'
      break
      case 3:
        a = 'red'
    }
    return a
  }

	render(){
    const panes = this.state.data.map((tab, index) => {
      return (
        <TabPane key={tab.tab} tab={tab.tab} className="list-wrap">
          {
            tab.pane.map((pane, index) => {
              return (
                <div key={index}>
                  <h3>{pane.title}</h3>
                  <div className="list">
                    <Row gutter={15}>
                      {
                        pane.list.map(list => (
                            <Col key={list.id} span={6}>
                              <div className="tag-wrap">
                                <CheckableTag
                                  checked={list.checked}
                                  onChange={checked => this.handleChange(list, checked)}
                                  className={this.listType(event, list.type)}
                                  >
                                  {list.name}
                                </CheckableTag>
                                <span className="link pull-right">详情</span>
                              </div>
                            </Col>
                          )
                        )
                      }
                    </Row>
                  </div>
                </div>
              )
            })
          }
        </TabPane>
      )
    })
    const selectedList = this.state.selectedList.map(list => {
      return (
        
          <Col key={list.id} span={6}>
            <div className="tag-wrap">
              <CheckableTag
                checked={list.checked}
                onChange={checked => this.handleChange(list, checked)}
                >
                {list.name}
              </CheckableTag>
              <span className="link pull-right"><Icon type="close" /></span>
            </div>
          </Col>
        
      )
    })
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
              <Button key="selectAll" type="default" onClick={this.handleCancel}>全部选择</Button>,
              <Button key="selectNone" type="default" onClick={this.handleCancel}>全部清除</Button>,
              <Button key="selectSave" type="default" onClick={this.handleCancel}>存为默认</Button>,
              <Button key="submit" type="primary" onClick={this.handleOk}>确定</Button>,
            ]
          }>
          <div className="head">
            <Icon className="back" onClick={this.props.handleSelect} type="left" />
            <span className="title">选择数据</span>
          </div>
          <Tabs 
            defaultActiveKey={this.state.data[0].tab} 
            tabPosition="top" 
            onChange={this._tabChange}>
            <TabPane tab="已选" key="selected" className="list-wrap">
              <div className="list-wrap list-wrap-selected">
                <Row gutter={15}>
                  {selectedList}
                </Row>
              </div>
            </TabPane>
            {panes}
          </Tabs>
          <div className="badges">
            <Badge status="default" text="实时更新" />
            <Badge status="success" text="手动更新" />
            <Badge status="error" text="定期更新" />
          </div>
        </Modal>
				
			</div>
		)	
	}
}