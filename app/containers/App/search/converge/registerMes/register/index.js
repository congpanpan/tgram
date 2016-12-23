import React ,{Component} from 'react'
import {Spin ,Tabs} from 'antd'
import Panel from 'components/panel'
import {convergeRegisterType} from 'utils/config'

import DrivingLicense from './drivingLicense'
import DrivingStudent from './drivingStudent'
import MarriageMes from './marriageMes'
import NewIdCard from './newIdCard'
import PublicLoan from './publicLoan'
import PublicMes from './publicMes'
import VirtualWorld from './virtualWorld'

const TabPane = Tabs.TabPane

export default class register extends Component{
  constructor(props){
    super(props)
    this.state={
      activeSub:"newIdCard",
      list:{

      }
    }
  }
  
  _tabChange = (key) => {
    this.setState({ activeSub: key })
  }
  _getTabMenus(){
    const menu = []
    menu.push(convergeRegisterType[0])
    menu.push(convergeRegisterType[1])
    menu.push(convergeRegisterType[2])
    menu.push(convergeRegisterType[3])
    menu.push(convergeRegisterType[4])
    menu.push(convergeRegisterType[5])
    menu.push(convergeRegisterType[6])
    return menu
  }

  render(){
    const templateConfig = {
      drivingLicense: (<DrivingLicense/>),
      drivingStudent: (<DrivingStudent/>),
      marriageMes: (<MarriageMes />),
      newIdCard: (<NewIdCard/>),
      publicLoan: (<PublicLoan/>),
      publicMes: (<PublicMes/>),
      virtualWorld: (<VirtualWorld/>),
    }
    return(
      <Spin spinning={ false }>
        <Tabs defaultActiveKey="newIdCard" tabPosition="top" onChange={this._tabChange}>
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