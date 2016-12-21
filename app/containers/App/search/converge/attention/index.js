import React,{Component} from 'react'
import { Row,Col } from 'antd'


export default class attention extends Component{
	// 初始化页面常量 绑定事件方法
	constructor(props,context){
		super(props)
		this.state={

		}
	}

	render(){
		return(
			<table className="gz-table table">
				<tbody>
					<tr>
						<td className='table-title' colSpan="4">
							<span>前科劣迹</span>
						</td>
					</tr>
					<tr>
						<td>
							<span>无结果！</span>
							<span>该人无此类信息</span>
						</td>
					</tr>
					<tr>
						<td className='table-title' colSpan="4">
							<span>关注人员</span>
						</td>
					</tr>
					<tr>
						<td className='table-title' colSpan="4">
							<span>线索情报</span>
						</td>
					</tr>
					<tr>
						<td className='table-title' colSpan="4">
							<span>省云搜</span>
						</td>
					</tr>
					<tr>
						<td className='table-title' colSpan="4">
							<span>部云搜</span>
						</td>
					</tr>
				</tbody>
			</table>
		)	
	}
}