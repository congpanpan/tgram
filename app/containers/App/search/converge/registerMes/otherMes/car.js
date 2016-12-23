import React,{Component} from 'react'
import {Table} from 'antd'

export default class car extends Component{
  constructor(props){
    super(props)
    this.state={
      list:[
        {idNum:'123123',cardType:'成年卡',cardStatus:"正常",cardDate:'201230123'}
      ]
    }
  }

  render(){
    return(
      <table className='little-table table'>
        <tbody>
          <tr>
            <th>车辆类型</th>
            <th>号牌号码</th>
            <th>号牌种类</th>
            <th>中文品牌</th>
            <th>车身颜色</th>
            <th>车辆状态</th>
            <th>管理辖区</th>
          </tr>
          {this.state.list.map((sub,i)=>(
            <tr key={i}>
              <td>{sub.idNum}</td>
              <td>{sub.cardType}</td>
              <td>{sub.cardStatus}</td>
              <td>{sub.cardDate}</td>
              <td>{sub.cardStatus}</td>
              <td>{sub.cardDate}</td>
              <td>{sub.cardDate}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    )
  }
}