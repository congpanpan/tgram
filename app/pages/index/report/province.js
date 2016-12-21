import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs } from 'antd'
import { updateTabList } from 'actions/tabList'
import china from './china'
import echarts from 'echarts'


const TabPane = Tabs.TabPane;

function randomData() {
    return Math.round(Math.random()*1000);
}

//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)

// 声明组件  并对外输出
export default class province extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `省份数据`,
        key: `/province`,
      }))
    }
    this.init()
    
  }


  init(){
    const _self = this
    const theme = _self.props.theme ? _self.props.theme : 'macarons'
    const option = {
        title : {
            text: '省份数据统计',
            subtext: '',
            textStyle:{
                fontSize:'14',
                fontWeight: 'bold'
            },
            padding:[15, 10, 10, 10]
        },
        tooltip: {
            trigger: 'item',
            show: false
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['iphone3'],
            show: false
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'iphone3',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '浙江',value: randomData() },
                ]
            }
        ]
    };
    const _pie = echarts.init(_self.pie, theme) // 圆环实例
    _pie.setOption(option)
  }
  
  render() {

    const _self = this;
    const width = _self.props.width ? _self.props.width : '100%'
    const height = _self.props.height ? _self.props.height : '225px'
    return (
      <div className="echart-wrap">
        <div className="subtext" style={{position:'absolute', left: '110px', top: '13px', color: '#2879c8', zIndex: '555'}}>
            全国人口迁徙
        </div>
        <div 
          ref={(c) => { this.pie = c; }} 
          style={{ height: height, width: width, backgrundColor: '#fff' }} 
          >
        </div>
      </div>
    )

  }
}
