import React , { Component } from 'react'
import { Input ,Button} from 'antd'
import { Link } from 'react-router'
import Gsearch from './gsearch'

export default class searchInput extends Component{
	constructor(props,context){
		super(props)
		this.state={
			value:"",
			selectShow: false,
		}
		this.changeText = this.changeText.bind(this)
		this.select = this.select.bind(this)
	}

	changeText(e){
		this.setState({value:e.target.value})
	}

	//  选择数据弹窗
	select(){
		this.setState({selectShow: !this.state.selectShow})
	}

	render(){
		const beforeBtn = (<Button>选择数据</Button>)
		return(
			<div className="selectData">
				<Button onClick={this.select} className="selectDataBtn">选择数据</Button>
				<Input className='searchInput' size='large' value={this.state.value} onChange={this.changeText}/>
				<Button className="searchBtn">
					<Link to={`/searchContent/${1}`}>搜索</Link>
				</Button>
				<Gsearch handleSelect={this.select} status={this.state.selectShow}/>
			</div>
		)
	}
}