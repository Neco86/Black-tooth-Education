import React,{ PureComponent } from 'react'
import { SchemaWrapper,TabsWrapper } from './style'
import { Wrapper } from '../../../common/style'
import { Tabs } from 'antd-mobile'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Schema extends PureComponent{
render(){
    const classList=[]
    // const classList=[
    // {
    //     key:0,
    //     title:'第一次课',
    //     time:'xxx1',
    //     place:'xxx',
    //     teacher:'xxx',
    //     homeWork:'xxx'    
    // },{
    //     key:1,
    //     title:'第二次课',
    //     time:'xxx2',
    //     place:'xxx',
    //     teacher:'xxx',
    //     homeWork:'xxx'    
    // },{
    //     key:2,
    //     title:'第三次课',
    //     time:'xxx3',
    //     place:'xxx',
    //     teacher:'xxx',
    //     homeWork:'xxx'    
    // }
    // ]
    const { closeSchema } = this.props;
         return(
            <SchemaWrapper>
                <Wrapper>
                    <i className='iconfont' onClick={()=>{closeSchema()}}>&#xe646;</i>
                    <span>课程安排详情</span>
                </Wrapper>
                {classList.length===0?
                <div className='empty'>
                    暂无课程安排
                </div>
                :
                <TabsWrapper length={classList.length+'00px'}>
                    <Tabs tabs={classList}
                      initalPage={'t1'}
                      tabBarPosition="left"
                      tabDirection="vertical"
                    >
                    {classList.map((item,index) => {
                        return <div className='tabsItem' key={index}>
                                    <div className='time'>时间:{item.time}</div>
                                    <div className='place'>地点:{item.place}</div>
                                    <div className='teacher'>任课教师:{item.teacher}</div>
                                    <div className='homeWork'>作业:{item.homeWork}</div>
                                </div>})}
                    </Tabs>
                </TabsWrapper>
                }
            </SchemaWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                closeSchema(){
                    dispatch(actionCreators.closeSchema())
                }
            }
}
export default connect(null,mapDispatchToProps)(Schema);