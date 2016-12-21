import React ,{Component} from 'react'
import {Row,Col} from 'antd'
import GroupCard from './groupCard'

export default class resultCard extends Component{
	constructor(props,context){
		super(props)
		this.state={

		}
	}

	render(){
		return(
			<Row>
				{this.props.data.map((sub,i)=>(
					<Col span={4} key={i}>
						<GroupCard data={sub} />		
					</Col>
				))}
			</Row>
		)
	}
}