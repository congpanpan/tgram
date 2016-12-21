import React ,{Component} from 'react'
import { Spin,Tabs} from 'antd'
import Panel from 'components/panel'
import { searchResultType } from 'utils/config'

import ResultList from './resultList'
import ResultCard from './resultCard'
import ResultChart from './resultChart'

const TabPane = Tabs.TabPane;

export default class searchResult extends Component{
	constructor(props,context){
		super(props)
		this.state={
			activeSub:"list",
      list:[
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
        {name:'许晶晶',sex:'女',age:'24岁',nation:'汉族',birthday:'1992-04-22出生',sfhm:'321323199204227280',phoneNum:18268845258,hjd:"杭州市萧山区",jgsxs:'江苏省泗阳县',gxdw:'下城分局文晖派出所'},
      ]
		}
	}

	_getTabMenus(){
    const menu = []
    menu.push(searchResultType[0])
    menu.push(searchResultType[1])
    menu.push(searchResultType[2])
    return menu
  }

  _tabChange = (key) => {
    this.setState({ activeSub: key })
  }
	render(){
		const templateConfig = {
      list: (<ResultList data={this.state.list}/>),
      card: (<ResultCard data={this.state.list}/>),
      chart: (<ResultChart data={this.state.list}/>),
    }
		return(
			<Panel>
        <Spin spinning={ false }>
          <Tabs defaultActiveKey="list" tabPosition="top" onChange={this._tabChange}>
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