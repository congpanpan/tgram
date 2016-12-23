import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, Select, Row, Col } from 'antd'


const createForm = Form.create
const FormItem = Form.Item


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

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    this.props.form.setFieldsValue(this.props.values)
}

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      this.setState({loading: true})
      console.log('Submit!!!',values);

      if(this.props.type == 'edit'){
        this.props.dispatch(fetchUserDetailUpdate({
          ...values,
          policedeptid:this.props.deptId,
          id:this.props.currPeopleId,
        },(result) =>{
          this.props.handleOk()
          this.props.form.resetFields()
        }))
      }else{
        this.props.dispatch(fetchUserAdd({...values,policedeptid:this.props.deptId},(result) =>{
          this.props.handleOk()
          this.props.form.resetFields()
        }))
      }

      this.setState({loading: false})
    });


  }


  render() {
    const { getFieldDecorator } = this.props.form;
    // debugger

    const formItemLayout = {
      labelCol: {span: 5},
      wrapperCol: {span: 17},
    }
    console.log('type',this.props.type)
    return (
      <div className="modalcontent">
        <Form horizontal>
          <FormItem {...formItemLayout} label="特殊需求" hasFeedback>
           <Input  />
          </FormItem>
          <FormItem {...formItemLayout} label="应用开发技术" hasFeedback>
            <Input  />
          </FormItem>
           <FormItem {...formItemLayout} label="应用联系人" hasFeedback>
            <Input  />
          </FormItem>
           <FormItem {...formItemLayout} label="应用联系电话" hasFeedback>
            <Input  />
          </FormItem>
          <FormItem {...formItemLayout} label="有效期" hasFeedback>
            <Select
                 className='select-cpp'
              >
            <Option value="1">3个月</Option>
            <Option value="2">6个月</Option>
            <Option value="3">12个月</Option>
            </Select>
          </FormItem>
           <FormItem {...formItemLayout} label="备注" hasFeedback>
            <textarea rows="5" cols="55"/>  
           
          </FormItem>
        
        </Form>
      </div>
    )
  }
}
