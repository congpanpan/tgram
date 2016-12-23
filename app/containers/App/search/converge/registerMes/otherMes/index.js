import React ,{Component} from 'react'
import {Spin ,Tabs} from 'antd'
import Panel from 'components/panel'
import {convergeOtherType} from 'utils/config'

import Car from './car'

const TabPane = Tabs.TabPane

export default class otherMes extends Component{
  constructor(props){
    super(props)
    this.state={
      activeSub:"car",
      list:{

      }
    }
  }
  
  _tabChange = (key) => {
    this.setState({ activeSub: key })
  }
  _getTabMenus(){
    const menu = []
    menu.push(convergeOtherType[0])
    return menu
  }

  render(){
    const templateConfig = {
      car: (<Car/>),
    }
    return(
      <Spin spinning={ false }>
        <Tabs defaultActiveKey="car" tabPosition="top" onChange={this._tabChange}>
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
    )
  }
}