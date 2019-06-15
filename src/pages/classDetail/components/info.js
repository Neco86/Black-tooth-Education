import React,{ PureComponent } from 'react'
import { ErrorWrapper,Wrapper as NavBarWrapper } from '../../../common/style'
import { connect } from 'react-redux'
import { Wrapper,RegisterSucc } from '../../login/style'
import { actionCreators } from '../store'
import { Button } from '../style'

class Info extends PureComponent{
render(){
        const { handleBack,handleCancelApply } = this.props;
        const classItem={
          key:'1',
          title:'小学一年级数学 [XXX机构]',
          recent:300,
          total:342,
          good:'-',
          pub:'xxxxx',
          short:'xxx',
          applyed:true,
          heared:true
        };
         return(
            <ErrorWrapper>
                <NavBarWrapper>
                    <i className='iconfont' onClick={()=>{handleBack()}}>&#xe646;</i>
                    <span>试听课程申请</span>
                </NavBarWrapper>
                <Wrapper>
                    <i className='iconfont' style={{display:'block'}}>&#xe657;</i>
                    <RegisterSucc>
                      {!classItem.applyed?'已申请,请耐心等待审核结果':'申请成功'}
                    </RegisterSucc>
                    {!classItem.applyed?
                    <Button 
                    style={{backgroundColor:'#cc99ff',color:'white'}}
                    onClick={()=>{handleCancelApply()}}
                    >
                        取消申请
                    </Button>:null
                    }
                </Wrapper>
            </ErrorWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                handleCancelApply(){
                  dispatch(actionCreators.handleCancelApply())
                },
                handleBack(){
                  dispatch(actionCreators.handleBack())
                },
            }
}
export default connect(null,mapDispatchToProps)(Info);