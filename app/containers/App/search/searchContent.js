import React,{Component} from 'react'
import {Icon,Button,Input,Row,Col} from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { updateTabList } from 'actions/tabList'
import WindowSize from 'components/windowSize'

import SearchResult from './searchResult/index'

@connect(
    (state) => ({
      config: state.config,
    })
)
export default class searchContent extends Component{
	constructor(props,context){
		super(props)
		this.state={
			activeSub: 'groupInformation',
		}
		this.closeType = this.closeType.bind(this)
    this.updateState = this.updateState.bind(this)
	}

	componentDidMount() {
    const value = this.props.value || this.props.params.value || ""
    // this.props.history.createPath()
    if (this.props.params) {
      // 若非嵌套，则执行
      this.props.dispatch(updateTabList({
        title: '搜索'+`${value}`,
        key: `/searchContent/${value}`,
      }))
    }
  }

  closeType(){
  	console.log(111111)
  }
  updateState(){
    this.setState({})
  }
	render(){
		return(
      <div className="search-lzr" style={{height:$GLOBALCONFIG.PAGEHEIGHT-20+'px',overflowY:'auto'}}>
        <WindowSize updateState={this.updateState}/>
  			<div className="searchContent-lzr">
          <div className="searchType-line">
    				<div className="searchType">
    					<span>常住人口</span>
    					<span className='close-icon'>
                <Link to={`/`}>
    						  <Icon type='close' className="icon1"/>
                </Link>
    					</span>
    				</div>
          </div>
  				<div className="searchContent1">
  					<span>分类筛选</span>
  					<Icon type="right"/>
  					<span>搜索记录总数: </span>
  					<span>2591</span>
  					<div className="handleBtn">
  						<Button>导出</Button>
  						<Button>打开筛选</Button>
  					</div>
  				</div>
  				<div>
  					<Row gutter={16} className='searchContent2'>
  						<Col span={4}>
  							<span>已选关键字: </span>
  							<span className="keyword">3213</span>
  						</Col>
  						<Col span={4}>
  							<Input/>
  						</Col>
              <Col span={1}>
                <Button size="small">增加</Button>
              </Col>
  						<Col span={11}/>
  					</Row>
  					<SearchResult/>
  				</div>
  			</div>
      </div>
		)
	}
}