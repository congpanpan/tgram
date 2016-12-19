
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { Spin, message } from 'antd'
import { 
  fetchLogin, 
  loginResponse,
   } from 'actions/common'
import './login.css'

@connect(
    (state, props) => ({
      config: state.config,
      loginResponse: state.loginResponse,
    })
)
export default class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = { 
      loading: false,
      usercode: '',
      userpwd: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // console.log(context)
  }

  componentWillReceiveProps(nextProps){
    const self = this
    if(this.props.loginResponse != nextProps.loginResponse){
      // console.log(nextProps.loginResponse.data)
      if(nextProps.loginResponse.data && nextProps.loginResponse.data.status == 1){
        sessionStorage.setItem('usercode', self.state.usercode)
        sessionStorage.setItem('userpwd', self.state.userpwd)
        sessionStorage.setItem('token', nextProps.loginResponse.data.data.token)
        hashHistory.push('/')
      }
      /*if(nextProps.loginResponse.data && nextProps.loginResponse.data.errorCode.length > 0){
        message.error(nextProps.loginResponse.data.extraMsg, 3)
      } 
      if(nextProps.loginResponse.data && nextProps.loginResponse.data.errorCode.length == 0) {
        sessionStorage.setItem('usercode', self.state.usercode)
        sessionStorage.setItem('userpwd', self.state.userpwd)
        sessionStorage.setItem('token', nextProps.loginResponse.data.data.token)
        hashHistory.push('/')
      }*/
    }
  }

  handleSubmit(){
    const { config } = this.props
    const self = this
    const data = {
      usercode: this.state.usercode,
      userpwd: this.state.userpwd,
    }
    if(this.state.usercode.length === 0){
      message.error('请输入用户名', 3)
    } else if(this.state.userpwd.length === 0){
      message.error('请输入密码', 3)
    } else{
      this.props.dispatch(fetchLogin(data))
    }
  }

  handleChange(e){
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  // 组件已经加载到dom中
  componentDidMount() {
    // this.props.dispatch(fetchLogin({ currentPage: 1 }))
  }

  render() {
    const { location, children, loginResponse } = this.props
    return (
      <div className="login">
        <div className="main2">
          <div className="sy_top">
          
          </div>
          <div className="btmLogin">
            <div className="sy_bottom">
              <h1 id="PerformName">杭州公安基础警务平台</h1>
              <div className="ul-wrap">
                <Spin spinning={this.state.loading}>
                  <ul>
                    <li><input onChange={this.handleChange} name="usercode" type="text" placeholder="账号"/></li>
                    <li><input onChange={this.handleChange} type="password" name="userpwd" placeholder="密码"/></li>
                    <li><input onClick={this.handleSubmit} type="submit" value="登录"/></li>
                    <li><input type="submit" value="证书"/></li>
                  </ul>
                </Spin>
              </div>
            </div> 
          </div>
        </div>
        <div id="companyName" className="companyName">科技信息化局 浙江七巧板信息科技有限公司 联合研发</div>
      </div>
    )
  }
}
