import React ,{Component} from 'react'
import {Row,Col,Icon} from 'antd'
import { Link } from 'react-router'

export default class groupCard extends Component{
	constructor(props,context){
		super(props)
		this.state={

		}
	}

	render(){
		const value = this.props.data
		return(
			<Row className='groupCard'>
				<Col span={24}>
					<Link to={`/searchConverge/${this.state.value}`}>
						<img className='groupCardImg'/>
					</Link>
				</Col>
				<Col span={24}>
					<Row>
						<Col span={24}>
							<span>{value.name}</span>
							<span>{value.sex}</span>
							<span>{value.hjd}</span>
						</Col>
						<Col span={24}>
							<span>{value.sfhm}</span>
						</Col>
						<Col span={24}>
							<span>电话号码: </span>
							<span>{value.phoneNum}</span>
						</Col>
						<Col span={24}>
							<Icon type='tag'/>
							<Icon type='tag'/>
							<Icon type='tag'/>
							<Icon type='tag'/>
						</Col>
					</Row>
				</Col>
			</Row>
		)
	}
}