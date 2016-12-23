import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table, Button, Tabs, Card, Col, Row ,Modal,Input, Icon,Upload} from 'antd'
import { updateTabList } from 'actions/tabList'

import ChinaMap from './component/province/province'

import  './cards.less'


const TabPane = Tabs.TabPane;



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)

// 声明组件  并对外输出
export default class cards extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
      uploadVisitive: false,
      appClassData:[
        {
          id: 1,
          title: '数据碰撞1',
          number: '11'
        },
        {
          id: 2,
          title: '数据碰撞2',
          number: '22'
        },
        {
          id: 3,
          title: '数据碰撞3',
          number: '33'
        },
        {
          id: 4,
          title: '数据碰撞4',
          number: '44'
        }
      ],
      appAddData:[
        {
          id: 1,
          time: '13:14:15',
          name: '霍建华',
          describe: '上传',
          detail: '明星',
          from: '情报中心',
          place: '杭州',
          fromData: '人员：身份信息类零散数据',
          number: '2121',
        },
        {
          id: 2,
          time: '13:14:15',
          name: '霍建华',
          describe: '上传',
          detail: '明星',
          from: '情报中心',
          place: '杭州',
          fromData: '人员：身份信息类零散数据',
          number: '2121',
        },
        {
          id: 3,
          time: '13:14:15',
          name: '霍建华',
          describe: '上传',
          detail: '明星',
          from: '情报中心',
          place: '杭州',
          fromData: '人员：身份信息类零散数据',
          number: '2121',
        },
      ],
    }
  }

  // 组件已经加载到dom中
  componentDidMount() {
     
  }
  allAppTitle(){
    return(
        <p className="allAppTitle">
          <span>全部新增零散数据</span>
          <Link className="moreBt" to={`/scatteredData/scatterDataList`}>更多</Link>
        </p>
      )
  }
  appClassTitle(){
    return(
        <p className="allAppTitle">
          <span>零散数据业务分类</span>
          <Link className="moreBt" to={`/scatteredData/scatterDataList`}>更多</Link>
        </p>
      )
  }
  appSuggestTitle(){
    return(
        <p className="allAppTitle">
          <span>零散数据所属单位</span>
          <Link className="moreBt" to={`/scatteredData/scatterDataList`}>更多</Link>
        </p>
      )
  }
  appAddTitle(){
    return(
        <p className="allAppTitle">
          <span>今日新增零散数据</span>
          <span className="newDataStatis"><em>85</em>个数据表，<em>12334123</em>条记录</span>
          <Link className="moreBt" to={`/scatteredData/scatterDataList`}>更多</Link>
        </p>
      )
  }
  appRankTitle(){
    return(
        <p className="allAppTitle">
          <span>零散数据地域分类</span>
          <Link className="moreBt" to={`/scatteredData/scatterDataList`}>更多</Link>
        </p>
      )
  }
  uploadModal(){
    this.setState({
      uploadVisitive: true,
    })
  }
  uploadModalCancel(){
    this.setState({
      uploadVisitive: false,
    })
  }
  render() {
    // console.log(this.state.appClassData)
    const appClassTd = this.state.appClassData.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            {item.title}<span><Link to={`/scatteredData/scatterDataList`}>{item.number}</Link></span>
          </td>
          <td>
            {item.title}<span><Link to={`/scatteredData/scatterDataList`}>{item.number}</Link></span>
          </td>
          <td>
            {item.title}<span><Link to={`/scatteredData/scatterDataList`}>{item.number}</Link></span>
          </td>
        </tr>
      )
    })
    const appAddTd = this.state.appAddData.map((item, index) => {
      return (
        <tr key={index}>
          <td className="appAddItem">
            <span>{item.time}</span>
            <span>{item.name}</span>
            <span>{item.describe}</span>
            <span>{item.describe}</span>
            <span>{item.detail}</span>
            <span >{item.from}</span>
            <span >{item.place}</span>
            <span>{item.fromData}</span>&nbsp;&nbsp;
            记录数:<span>{item.number}</span>
          </td>
        </tr>
      )
    })
    return (
      <div className="hjt-scatterData">
        <Col span="12" className="leftCol">
          <Row className="topRow">
            <Card title={this.allAppTitle()} >
              <div className="appDetailWrap">
                <div className="appDetail">
                  <p>46</p> 
                    <span><Link to={`/scatteredData/newScatterData`}>数据表数</Link></span>
                </div>
                <div className="appDetail">
                  <p>4</p>
                  <span><Link to={`/scatteredData/newScatterData`}>记录条数</Link></span>
                </div>
                <Button className="uploadBt" onClick={this.uploadModal.bind(this)}>
                  导入数据
                </Button>
                <Modal className="uploadModal" title="导入零散数据" footer="" visible={this.state.uploadVisitive} onCancel={this.uploadModalCancel.bind(this)}>
                  <p className="uploadLimit">请选择。。格式文件上传</p>
                  <p className="uploadFile"><Upload className="choseFile" type="ghost"><Icon type="upload" />选择文件</Upload></p>
                  <p className="uploadWrap"><Button className="upload" type="primary">上传</Button></p>                  
                </Modal>
              </div>
            </Card>
          </Row>
          <Row>
            <Card title={this.appClassTitle()} >
              <table className="appClassTable">
                <tbody>{appClassTd}</tbody>
              </table> 
            </Card>
          </Row> 
          <Row>
            <Card title={this.appSuggestTitle()} >
              <table className="appSuggestTable tbl tbl-log">
                <tbody>
                  <tr>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                  </tr>
                  <tr>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                  </tr>
                  <tr>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                    <td><Link to={`/scatteredData/scatterDataList`}>地铁高频人员信息</Link></td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Row>  
        </Col>
        <Col span="12" className="rightCol">
          <Row className="topRow">
            <Card  title={this.appAddTitle()} >
              <table className="appAddTable">
                <tbody>{appAddTd}</tbody>
              </table> 
            </Card>
          </Row>
          <Row className="specialRow">
            <Card title={this.appRankTitle()} >
              <ChinaMap></ChinaMap>
            </Card>
          </Row> 
        </Col>   
      </div>
    )

  }
}
