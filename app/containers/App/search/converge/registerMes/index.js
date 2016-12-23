import React,{Component} from 'react'
import { Row,Col,Timeline} from 'antd'

import Register from './register/index'
import OtherMes from './otherMes/index'
export default class registerMes extends Component{
	// 初始化页面常量 绑定事件方法
	constructor(props,context){
		super(props)
		this.state={

		}
	}

	render(){
		return(
			<div>
				<table className="jc-table table">
					<tbody>
						<tr>
							<td colSpan="4" className="content-title">
								<span>基本信息</span>
								<span>常住人口详细信息</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>中文姓名</span>
								<span>朱成良</span>
							</td>
							<td>
								<span>英文姓名</span>
								<span>zhuchengliang</span>
							</td>
							<td>
								<span>性别</span>
								<span>男</span>
							</td>
							<td rowSpan="4">
								<img/>
							</td>
						</tr>
						<tr>
							<td>
								<span>国籍(地区)</span>
								<span>中国</span>
							</td>
							<td>
								<span>出生日期</span>
								<span>19740401</span>
							</td>
							<td>
								<span>民族</span>
								<span>汉族</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>户籍地</span>
								<span>杭州市萧山区</span>
							</td>
							<td>
								<span>出生地</span>
								<span>浙江省萧山市</span>
							</td>
							<td>
								<span>籍贯</span>
								<span>浙江省萧山市</span>
							</td>
						</tr>
					</tbody>
				</table>

				<table className="jh-table table">
					<tbody>
						<tr>
							<td colSpan="4" className="content-title">
								<span>基本聚合</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span>身份证件</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>身份证:</span>
								<span>330123123123131123</span>
							</td>
							<td>
								<span>护照:</span>
								<span></span>
							</td>
							<td>
								<span>港澳通行证:</span>
								<span>男</span>
							</td>
							<td>
								<span>台湾通行证:</span>
								<span>男</span>
							</td>
						</tr>
						<tr>
							<td>
								<span>居住证:</span>
								<span>中国</span>
							</td>
							<td>
								<span>机动车驾驶证:</span>
								<span>19740401</span>
							</td>
							<td colSpan="2">
								<span>杭州市民卡:</span>
								<span></span>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span className='table-title'>别名绰号</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4">&nbsp;</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span className='table-title'>居住地址</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4" className="timeline">
								<Timeline>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
								</Timeline>
								<ul>
									<li className='circle-border'>
										<span className='circle'></span>
										<span>2016-11-29 05:29</span>
										<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
										<span>[机动车]</span>
									</li>
									<li className='circle-border'>
										<span className='circle'></span>
										<span>2016-11-29 05:29</span>
										<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
										<span>[机动车]</span>
									</li>
									<li className='circle-border'>
										<span className='circle'></span>
										<span>2016-11-29 05:29</span>
										<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
										<span>[机动车]</span>
									</li>
								</ul>
								<div></div>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span className='table-title'>电话号码</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4" className="timeline">
								<Timeline>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
								</Timeline>
								<div></div>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span className='table-title'>工作单位</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4" className="timeline">
								<Timeline>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
								</Timeline>
								<div></div>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span className='table-title'>文化程度</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span className='table-title'>车船登记</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4" className="timeline">
								<Timeline>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
									<Timeline.Item>
										<div>
											<span>2016-11-29 05:29</span>
											<span>杭州市萧山区城乡街道杭齿厂家属区252户</span>
											<span>[机动车]</span>
										</div>
									</Timeline.Item>
								</Timeline>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span className='content-title'>相关登记</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<Register/>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<span className='content-title'>相关数据</span>
							</td>
						</tr>
						<tr>
							<td colSpan="4">
								<OtherMes/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)	
	}
}