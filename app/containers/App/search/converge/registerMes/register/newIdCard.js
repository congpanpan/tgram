import React,{Component} from 'react'
import {Table} from 'antd'

export default class newIdCard extends Component{
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
            <th>市民卡号</th>
            <th>卡类型</th>
            <th>卡状态</th>
            <th>领卡日期</th>
          </tr>
          {this.state.list.map((sub,i)=>(
            <tr key={i}>
              <td>{sub.idNum}</td>
              <td>{sub.cardType}</td>
              <td>{sub.cardStatus}</td>
              <td>{sub.cardDate}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    )
  }
}