import React ,{Component} from 'react'
import {} from 'antd'
import ListCard from './listCard'

export default class resultList extends Component{
	constructor(props,context){
		super(props)
		this.state={
		}
	}

	render(){
		return(
			<ul>
				{this.props.data.map((sub,i)=>(
					<li key={i}>
						<ListCard data={sub} />		
					</li>
				))}
			</ul>
		)
	}
}