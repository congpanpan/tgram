import React ,{Component} from 'react'
import {Row,Col,Icon} from 'antd'
import { Link } from 'react-router'

export default class listCard extends Component{
	constructor(props,context){
		super(props)
		this.state={

		}
	}

	render(){
		const value = this.props.data
		return(
			<Row gutter={16} className="listCard">
				<Col span={2}>
					<Link to={`/searchConverge/${this.state.value}`}>
						<img className='listCardImg'/>
					</Link>
				</Col>
				<Col span={7}>
						<Col span={24}>
							<span>{value.name}</span>
							<span>{value.sex}</span>
							<span>{value.age}</span>
							<span>{value.nation}</span>
							<span>{value.birthday}</span>
						</Col>
						<Col span={24}>
							<span>公民身份号码: </span>
							<span>{value.sfhm}</span>
						</Col>
				</Col>
				<Col span={7}>
						<Col span={24}>
							<span>户籍地: </span>
							<span>{value.hjd}</span>
						</Col>
						<Col span={24}>
							<span>籍贯省市县: </span>
							<span>{value.jgsxs}</span>
						</Col>
				</Col>
				<Col span={6}>
					<Row>
						<Col span={24}>
							<span>电话号码: </span>
							<span>{value.phoneNum}</span>
						</Col>
						<Col span={24}>
							<span>管辖单位: </span>
							<span>{value.gxdw}</span>
						</Col>
					</Row>
				</Col>
				<Col span={2}>
					<Col span={12}>
						<Icon type='tag'/>
					</Col>
					<Col span={12}>
						<Icon type='tag'/>
					</Col>
					<Col span={12}>
						<Icon type='tag'/>
					</Col>
					<Col span={12}>
						<Icon type='tag'/>
					</Col>
				</Col>
			</Row>
		)
	}
}