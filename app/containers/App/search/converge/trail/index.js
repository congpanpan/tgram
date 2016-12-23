import React,{Component} from 'react'
import { Row,Col } from 'antd'

import TrailConverge from './trailConverge/index'
export default class trail extends Component{
  // 初始化页面常量 绑定事件方法
  constructor(props,context){
    super(props)
    this.state={
      trail:{}
    }
  }

  render(){
    return(
      <table className="gz-table table">
        <tbody>
          <tr>
            <td className='content-title' colSpan="4">
              <span>轨迹聚合</span>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              {this.state.trail?
                <TrailConverge/>:
              <div className="content-body">
                <span>无结果！</span>
                <span>该人无此类信息</span>
              </div>
              }
            </td>
          </tr>
          <tr>
            <td className='content-title' colSpan="4">
              <span>省云搜</span>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div className="content-body">
                <span>无结果！</span>
                <span>该人无此类信息</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className='content-title' colSpan="4">
              <span>部云搜</span>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <div className="content-body">
                <span>无结果！</span>
                <span>该人无此类信息</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    ) 
  }
}