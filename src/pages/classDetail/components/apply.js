import React,{ PureComponent } from 'react'
import Buy from './buy'
import Scored from './scored'
import NavBar from '../../../common/navbar'
import { ItemWrapper,Button,ButtonWrapper } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Apply extends PureComponent{
render(){
        const classItem={
          key:'1',
          title:'小学一年级数学 [XXX机构]',
          recent:300,
          total:342,
          good:'-',
          pub:'xxxxx',
          short:'xxx',
          applyed:false,//是否申请试听      
          heared:true,  //是否已经试听   
          bought:true   //是否已经购买
          //000 试听申请 报名缴费
          //001 试听申请 课程安排
          //010 error 申请前 已试听
          //011 error 申请前 已试听
          //100 申请试听结果 报名缴费
          //101 申请试听结果 课程安排
          //110 试听评价 报名缴费
          //111 试听评价 课程安排
        };
        const { handleScore,handleApply,handleBuy,buy,scored } =this.props;
         return(
            <div>
              <NavBar title='课程详情' to={'/home/classify/'+this.props.item}/>
              <ItemWrapper>
                <div className='title'>{classItem.title}</div>
                <div className='des'>
                  <span>最近在学{classItem.recent}人</span>
                  <span>累计报名{classItem.total}人</span>
                  <span>好评度{classItem.good}</span>
                  <span className='iconfont'>&#xe608;</span>
                </div>
              </ItemWrapper>
              <ItemWrapper>
                 <div className='title'>公告</div>
                 <div className='content'>{classItem.pub}</div>
              </ItemWrapper>
              <ItemWrapper>
                 <div className='title'>简介</div>
                 <div className='content'>{classItem.short}</div>
              </ItemWrapper>
              <ButtonWrapper>
                <Button 
                onClick={classItem.bought?()=>{}:classItem.heared?()=>{handleScore()}:()=>{handleApply()}}>
                    {classItem.bought?'课程安排':
                    classItem.heared?'试听评价':
                    !classItem.applyed?'申请试听':
                    '申请试听结果'}
                </Button>
                {classItem.bought?null:
                <Button onClick={()=>{handleBuy()}}>报名缴费</Button>}
              </ButtonWrapper>
              {buy?<Buy/>:null}
              {scored?<Scored/>:null}
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                handleApply(){
                    dispatch(actionCreators.handleApply())
                },
                handleBuy(){
                  dispatch(actionCreators.handleBuy())
                },
                handleScore(){
                  dispatch(actionCreators.handleScore())
                }
            }
}
const mapStateToProps=(state)=>{
    return {
        buy:state.getIn(['classDetail','buy']),
        scored:state.getIn(['classDetail','scored']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Apply);