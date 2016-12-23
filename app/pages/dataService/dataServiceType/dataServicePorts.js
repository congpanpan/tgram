/*定制接口的申请*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Tabs,Input,Form ,Select} from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
import WindowSize from 'components/windowSize'


const TabPane = Tabs.TabPane;
const createForm = Form.create
const FormItem = Form.Item
const Option = Select.Option



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)
@Form.create({
    
})


// 声明组件  并对外输出
export default class dataApp extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
    }
     this.updateState = this.updateState.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `数据应用`,
        key: `/dataApp`,
      }))
    }
    
  }
  updateState(){
    this.setState({})
  }

  render() {
     const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Panel>
        <div className="appRankWrap" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px'}}>
          <WindowSize updateState={this.updateState}/>
          <Form >
            <FormItem
              {...formItemLayout}
            >
              <Input  placeholder="搜索服务名称"/>  
            </FormItem>  
            <FormItem
              {...formItemLayout}
            >
              {
                <Select defaultValue="提供方">
                  <Option value="WR">WR</Option>
                  <Option value="borf">borf</Option>   
                </Select>
              }
            </FormItem>
          </Form>
        </div>
      
      </Panel>
    )

  }
}
