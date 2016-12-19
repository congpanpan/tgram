import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs } from 'antd'
import { updateTabList } from 'actions/tabList'
import echarts from 'echarts'


const TabPane = Tabs.TabPane;



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)

// 声明组件  并对外输出
export default class newdata extends Component {
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
        title: `今日新增数据`,
        key: `/newdata`,
      }))
    }
    this.init()
    
  }


  init(){
    const _self = this
    const theme = _self.props.theme ? _self.props.theme : 'macarons'
    const option = {
    title: {
        text: '今日新增数据',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最新成交价', '预购队列']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        },
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(len + 1);
                }
                return res;
            })()
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '价格',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            name:'预购队列',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data:(function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(Math.round(Math.random() * 1000));
                }
                return res;
            })()
        },
        {
            name:'最新成交价',
            type:'line',
            data:(function (){
                var res = [];
                var len = 0;
                while (len < 10) {
                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                    len++;
                }
                return res;
            })()
        }
    ]
};

// app.count = 11;
// setInterval(function (){
//     axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

//     var data0 = option.series[0].data;
//     var data1 = option.series[1].data;
//     data0.shift();
//     data0.push(Math.round(Math.random() * 1000));
//     data1.shift();
//     data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

//     option.xAxis[0].data.shift();
//     option.xAxis[0].data.push(axisData);
//     option.xAxis[1].data.shift();
//     option.xAxis[1].data.push(app.count++);

//     myChart.setOption(option);
// }, 2100);


    const _pie = echarts.init(_self.pie, theme) // 圆环实例
    _pie.setOption(option)
  }
  
  render() {

    const _self = this;
    const width = _self.props.width ? _self.props.width : '100%'
    const height = _self.props.height ? _self.props.height : '500px'
    return (
      <div className="echart-wrap">
        <div 
          ref={(c) => { this.pie = c; }} 
          style={{ height: height, width: width, backgrundColor: '#fff' }} 
          >
        </div>
      </div>
    )

  }
}
