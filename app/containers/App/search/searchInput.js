import React , { Component } from 'react'
import { Input ,Button} from 'antd'
import { Link } from 'react-router'


export default class searchInput extends Component{
	constructor(props,context){
		super(props)
		this.state={
			value:""
		}
		this.changeText = this.changeText.bind(this)
	}

	changeText(e){
		this.setState({value:e.target.value})
	}

	render(){
		const beforeBtn = (<Button>选择数据</Button>)
		return(
			<div>
				<Button>选择数据</Button>
				<Input className='searchInput' size='large' value={this.state.value} onChange={this.changeText}/>
				<Button>
					<Link to={`/searchContent/${1}`}>搜索</Link>
				</Button>
			</div>
		)
	}
}