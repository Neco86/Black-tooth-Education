import React,{ PureComponent } from 'react'
import { withRouter } from "react-router-dom";
import NavBar from '../../common/navbar'
//key:this.props.match.params.itemKey.slice(4)
import { ItemWrapper,ButtonWrapper,Button } from './style' 
class ClassDetail extends PureComponent{
render(){
        const classItem={
          key:'1',
          title:'小学一年级数学 [XXX机构]',
          recent:300,
          total:342,
          good:'-',
          pub:'xxxxx',
          short:'xxx' 
        };
         return(
            <div>
              <NavBar title='课程详情' to={'/home/classify/'+this.props.match.params.itemKey.slice(0,4)}/>
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
                <Button>申请试听</Button>
                <Button>报名缴费</Button>
              </ButtonWrapper>
            </div>
        )
   
}
}
export default withRouter(ClassDetail);