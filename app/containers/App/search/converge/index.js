import React,{Component} from 'react'
import { Row,Col,Spin ,Tabs} from 'antd'
import { connect } from 'react-redux'
import { convergeType } from 'utils/config'
import Panel from 'components/panel'
import { updateTabList } from 'actions/tabList'

import Attention from './attention/index'
import PartArchives from './partArchives'
import ProvincalArchives from './provincalArchives'
import RegisterMes from './registerMes/index'
import Social from './social'
import Trail from './trail'
import WholeSearch from './wholeSearch'

const TabPane = Tabs.TabPane

@connect(
    (state) => ({
      config: state.config,
    })
)

export default class converage extends Component{
	// 初始化页面常量 绑定事件方法
	constructor(props,context){
		super(props)
		this.state={
			activeSub:"register",
		}
	}

  componentDidMount() {
    const value = this.props.value || this.props.params.value || ""
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: '聚合'+`${value}`,
        key: `/searchConverge/${value}`,
      }))
    }
  }

	_getTabMenus(){
    const menu = []
    menu.push(convergeType[0])
    menu.push(convergeType[1])
    menu.push(convergeType[2])
    menu.push(convergeType[3])
    menu.push(convergeType[4])
    menu.push(convergeType[5])
    menu.push(convergeType[6])
    return menu
  }

  _tabChange = (key) => {
    this.setState({ activeSub: key })
  }
	render(){
		const templateConfig = {
      attention: (<Attention/>),
      partArchives: (<PartArchives/>),
      provincalArchives: (<ProvincalArchives />),
      register: (<RegisterMes/>),
      social: (<Social/>),
      trail: (<Trail/>),
      wholeSearch: (<WholeSearch/>),
    }
		return(
			<Panel>
        <Spin spinning={ false }>
          <Tabs defaultActiveKey="register" tabPosition="top" onChange={this._tabChange}>
            {
              this._getTabMenus().map((sub) => (
                <TabPane tab={sub.name} key={sub.url}/>
              ))
            }
          </Tabs>
          <div className="tab-main">
            {templateConfig[this.state.activeSub]}
          </div>
        </Spin>
      </Panel>
		)	
	}
}