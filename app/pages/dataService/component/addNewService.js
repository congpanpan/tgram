/*服务申请*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Table, Button, Tabs,Row,Col,Input,Form, Select} from 'antd'
import { updateTabList } from 'actions/tabList'
import Panel from 'components/panel'
const createForm = Form.create
const FormItem = Form.Item
const Option = Select.Option


const TabPane = Tabs.TabPane;



//连接公用常量、后端返回的数据方法  并放置在props里面调用
@connect(
    (state, props) => ({
      config: state.config,
    })
)
@Form.create({
  //onFieldsChange(props, items) {
  //  console.log(props)
  //  console.log(items)
  //  // props.cacheSearch(items);
  //},
})

// 声明组件  并对外输出
export default class dataApp extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
       dataSource:[
        {key:'01',xm:'组织机构查询接口',type:'',policeNumber:'七巧板 李某某',institutions:'10',sq:'7'},
        {key:'02',xm:'机动车查询接口',type:'',policeNumber:'七巧板 李某某',institutions:'5',sq:'8'},
        {key:'03',xm:'组织机构查询接口',type:'',policeNumber:'七巧板 李某某',institutions:'10',sq:'7'},
      ],
       fieldsDataSource:[
        {key:'01',xm:'组织机构查询接口',xsmc:'',type:'',policeNumber:'七巧板 李某某',institutions:'10',sq:'7'},
        {key:'02',xm:'机动车查询接口',xsmc:'',type:'',policeNumber:'七巧板 李某某',institutions:'5',sq:'8'},
      ],
      errorDataSource:[
        {key:'01',xm:'组织机构查询接口',type:'',policeNumber:'七巧板 李某某',sq:'7',institutions:'10',shuom:''},
      ],
    }
     this._typeChange=this._typeChange.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: `新增数据服务`,
        key: `/dataService/addNewService`,
      }))
    }

    
  }
  //请求参数的表头
  paramColumns() {
    return [
      {
        title: '名称',
        dataIndex: 'xm',
        key: 'name',
        render:text=><span>{text}</span>
      },
       {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
      },
        {
        title: '必填',
        dataIndex: 'policeNumber',
        key: 'sex',
      },
      {
        title: '显示顺序',
        dataIndex: 'institutions',
        key: 'institutions1',
      },
      {
        title: '说明',
        dataIndex: 'sq',
        key: 'sq',
        },     
    ]
  }
   //输出字段的表头
  fieldsColumns() {
    return [
      {
        title: '名称',
        dataIndex: 'xm',
        key: 'name',
        render:text=><span>{text}</span>
      },
       {
        title: '显示名称',
        dataIndex: 'xsmc',
        key: 'xsmc',
      },
       {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
      },
        {
        title: '特征标志',
        dataIndex: 'policeNumber',
        key: 'sex',
      },
      {
        title: '显示顺序',
        dataIndex: 'institutions',
        key: 'institutions1',
      },
      {
        title: '备注说明',
        dataIndex: 'sq',
        key: 'sq',
        },     
    ]
  }
   //错误码的表头
  errorColumns() {
    return [
      {
        title: '错误码',
        dataIndex: 'xm',
        key: 'xm',
        render:text=><span>{text}</span>
      },
       {
        title: '状态',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '显示顺序',
        dataIndex: 'institutions',
        key: 'institutions1',
      },
      {
        title: '备注说明',
        dataIndex: 'sq',
        key: 'sq',
        },  
      {
        title: '详细描述',
        dataIndex: 'policeNumber',
        key: 'shuom',
      },   
    ]
  }
  _typeChange(key){
  this.setState({key:key})

  }


  render() {
      const { getFieldDecorator } = this.props.form;
     const formItemLayout = {
      labelCol: {span: 2},
      wrapperCol: {span: 8},
     }
    return (
      <Panel>
        <div>
          <Tabs tabPosition="top" onChange={this._typeChange}>
            <TabPane tab="基本信息" key="1" >
               <div  className="baseMessages-cpp">
                  <Form>
                    <FormItem {...formItemLayout} label="提供方">
                      <Select
                         className='select-cpp'
                        //onChange={this.handleSelectChange}
                       >
                        <Option value="1">数印1</Option>
                        <Option value="2">数印2</Option>
                        <Option value="3">数印3</Option>
                      </Select>
                    </FormItem>
                    <FormItem {...formItemLayout} label="服务名称">
                      <Input  />
                    </FormItem>
                    <FormItem {...formItemLayout} label="版本号">
                       <Input  />
                    </FormItem> 
                    <FormItem {...formItemLayout} label="TX码">
                      <Input  />
                    </FormItem> 
                    <FormItem {...formItemLayout} label="请求方式">
                      <label class="ant-checkbox-wrapper">
                        <span class="ant-checkbox ant-checkbox-checked ant-checkbox-checked-1">  </span>
                        <span class="ant-checkbox-inner"></span>
                        <input type="checkbox" class="ant-checkbox-input" value="on"/>
                        <span>POST</span>
                      </label>
                       <label class="ant-checkbox-wrapper">
                        <span class="ant-checkbox ant-checkbox-checked ant-checkbox-checked-1">  </span>
                        <span class="ant-checkbox-inner"></span>
                        <input type="checkbox" class="ant-checkbox-input" value="on"/>
                        <span>GET</span>
                      </label>
                    </FormItem> 
                     <FormItem {...formItemLayout} label="支持格式">
                      <label class="ant-checkbox-wrapper">
                        <span class="ant-checkbox ant-checkbox-checked ant-checkbox-checked-1">  </span>
                        <span class="ant-checkbox-inner"></span>
                        <input type="checkbox" class="ant-checkbox-input" value="on"/>
                        <span>JSON</span>
                      </label>
                       <label class="ant-checkbox-wrapper">
                        <span class="ant-checkbox ant-checkbox-checked ant-checkbox-checked-1">  </span>
                        <span class="ant-checkbox-inner"></span>
                        <input type="checkbox" class="ant-checkbox-input" value="on"/>
                        <span>XML</span>
                      </label>
                       <label class="ant-checkbox-wrapper">
                        <span class="ant-checkbox ant-checkbox-checked ant-checkbox-checked-1">  </span>
                        <span class="ant-checkbox-inner"></span>
                        <input type="checkbox" class="ant-checkbox-input" value="on"/>
                        <span>JSONP</span>
                      </label>
                       <label class="ant-checkbox-wrapper">
                        <span class="ant-checkbox ant-checkbox-checked ant-checkbox-checked-1">  </span>
                        <span class="ant-checkbox-inner"></span>
                        <input type="checkbox" class="ant-checkbox-input" value="on"/>
                        <span>BINARY</span>
                      </label>
                    </FormItem> 
                    <FormItem {...formItemLayout} label="服务地址">
                       <Input  />
                    </FormItem>
                    <FormItem {...formItemLayout} label="服务描述">
                      <textarea rows="4" cols="65"/>    
                    </FormItem>
                    <FormItem {...formItemLayout} label="服务状态">
                      <Select
                        size="large" className='select-cpp'
                        //onChange={this.handleSelectChange}
                       >
                        <Option value="1">可用</Option>
                        <Option value="2">不可用</Option>
                     
                      </Select>
                    </FormItem>
                   
                 </Form>
               
                 
               </div>
          
            </TabPane>
            <TabPane tab="请求参数" key="2">
              <div className='service-table-cpp  baseMessages-cpp"'>
                <Table
                  columns={this.paramColumns()} 
                  dataSource={this.state.dataSource}
                  pagination={ false}
                  bordered
                 />                  
              </div>
            </TabPane>
            <TabPane tab="输出字段" key="3">
             <div className='service-table-cpp baseMessages-cpp'>
                <Table
                  columns={this.fieldsColumns()} 
                  dataSource={this.state.fieldsDataSource}
                  pagination={ false}
                  bordered
                 />                  
              </div>
            </TabPane>
             <TabPane tab="错误码" key="4">
              <div className='service-table-cpp baseMessages-cpp'>
                <Table
                  columns={this.errorColumns()} 
                  dataSource={this.state.errorDataSource}
                  pagination={ false}
                  bordered
                 />                  
              </div>
            </TabPane>
          </Tabs>
        </div>
      
     
      </Panel>
    )

  }
}
