import React ,{Component} from 'react'
import {Spin ,Tabs,Timeline} from 'antd'
import Panel from 'components/panel'
import {trailConvergeType} from 'utils/config'
 

const TabPane = Tabs.TabPane

export default class trailConverge extends Component{
  constructor(props){
    super(props)
    this.state={
      activeSub:"trailAll",
      trailAll:[
        {time:'2016-11-29 05:29',unit:'杭州市江干区九堡分区 江干派出所',place:'杭州市江干区九堡街道九堡村九堡家园2区9排27号',result:'通过'},
        {time:'2016-11-29 05:29',unit:'杭州市江干区九堡分区 江干派出所',place:'杭州市江干区九堡街道九堡村九堡家园2区9排27号',result:'通过'},
        {time:'2016-11-29 05:29',unit:'杭州市江干区九堡分区 江干派出所',place:'杭州市江干区九堡街道九堡村九堡家园2区9排27号',result:'通过'},
        {time:'2016-11-29 05:29',unit:'杭州市江干区九堡分区 江干派出所',place:'杭州市江干区九堡街道九堡村九堡家园2区9排27号',result:'通过'},
        {time:'2016-11-29 05:29',unit:'杭州市江干区九堡分区 江干派出所',place:'杭州市江干区九堡街道九堡村九堡家园2区9排27号',result:'通过'}
      ],
      peopleLive:[
        {place:'杭州市江干区 杨公社区',content:'人口数据入库'}
      ],
      oldLive:[
        {time:'2016-11-29 05:29',action:'离店',houseId:'520'},
        {time:'2016-11-29 05:29',action:'离店',houseId:'520'},
        {time:'2016-11-29 05:29',action:'离店',houseId:'520'},
        {time:'2016-11-29 05:29',action:'离店',houseId:'520'},
      ]
    }
  }
  
  _tabChange = (key) => {
    this.setState({ activeSub: key })
  }
  _getTabMenus(){
    const menu = []
    menu.push(trailConvergeType[0])
    menu.push(trailConvergeType[1])
    menu.push(trailConvergeType[2])
    menu.push(trailConvergeType[3])
    menu.push(trailConvergeType[4])
    menu.push(trailConvergeType[5])
    menu.push(trailConvergeType[6])
    return menu
  }

  render(){
    const trailAll =(
      <div className="timeline trail-line">
        <Timeline>{this.state.trailAll.map((sub,i)=>
          <Timeline.Item key={i}>
            <span>{sub.time}</span>
            <span className='line-span'>
              <span className="notice">{'核查单位:'}</span>
              <span>{sub.unit}</span>
            </span>
            <span className='line-span'>
              <span className="notice">{'核查地点:'}</span>
              <span>{sub.place}</span>
            </span>
            <span className='line-span'>
              <span className="notice">{'核查地点:'}</span>
              <span>{sub.result}</span>
            </span>
          </Timeline.Item>
          )}
        </Timeline>
      </div>
    )
    const peopleLive =(
      <div className="timeline trail-line">
        <Timeline>{this.state.peopleLive.map((sub,i)=>
          <Timeline.Item key={i}>
            <span className="notice">{'何时何地迁来本地址:'}</span>
            <span>{sub.place}</span>
            <span className="notice">{'业务内容:'}</span>
            <span>{sub.content}</span>
          </Timeline.Item>
          )}
        </Timeline>
      </div>
    )
    const oldLive =(
      <div className="timeline trail-line">
        <Timeline>{this.state.oldLive.map((sub,i)=>
          <Timeline.Item key={i}>
            <span>{sub.time}</span>
            <span>{sub.action}</span>
            <span className="notice">{'房号:'}</span>
            <span>{sub.houseId}</span>
          </Timeline.Item>
          )}
        </Timeline>
      </div>
    )
    const templateConfig = {
      trailAll:trailAll,
      peopleLive:peopleLive,
      oldLive:oldLive,
    }
    return(
      <Spin spinning={ false }>
        <Tabs defaultActiveKey="trailAll" tabPosition="top" onChange={this._tabChange}>
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