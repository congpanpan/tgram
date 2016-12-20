import React,{Component} from 'react'
import { Row,Col } from 'antd'

import SearchInput from './searchInput'
import SearchContent from './searchContent'
import './style.css'

export default class search extends Component{
	// 初始化页面常量 绑定事件方法
	constructor(props,context){
		super(props)
		this.state={

		}
	}

	render(){
		return(
			<div className="search">
				<Row gutter={16}>
					<Col span={2} />
					<Col span={20}>
						<SearchInput/>
					</Col>
					<Col span={2} />
				</Row>
			</div>
		)	
	}
}