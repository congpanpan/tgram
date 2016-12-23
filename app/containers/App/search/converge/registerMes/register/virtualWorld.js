import React,{Component} from 'react'
import {Table} from 'antd'

export default class virtualWorld extends Component{
  constructor(props){
    super(props)
    this.state={
      list:[
        {idNum:'123123',cardType:'成年卡',cardStatus:"正常",cardDate:'201230123'}
      ]
    }
  }

  columns(){
    return[
      {
        title:'市民卡号',
        dataIndex:'idNum',
        key:'idNum'
      },
      {
        title:'卡类型',
        dataIndex:'cardType',
        key:'cardType'
      },
      {
        title:'卡状态',
        dataIndex:'cardStatus',
        key:'cardStatus'
      },
      {
        title:'领卡日期',
        dataIndex:'cardDate',
        key:'cardDate'
      },
    ]
  }

  render(){
    return(
      <table className='little-table table'>
        <tbody>
          <tr>
            <th>姓名</th>
            <th>邮箱</th>
            <th>昵称</th>
            <th>手机号</th>
            <th>最后登陆时间</th>
            <th>账号</th>
          </tr>
          {this.state.list.map((sub,i)=>(
            <tr key={i}>
              <td>{sub.idNum}</td>
              <td>{sub.cardType}</td>
              <td>{sub.cardStatus}</td>
              <td>{sub.cardDate}</td>
              <td>{sub.cardDate}</td>
              <td>{sub.cardDate}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    )
  }
}