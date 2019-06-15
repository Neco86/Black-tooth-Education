import React,{ PureComponent } from 'react'
import { ErrorWrapper,Wrapper as NavBarWrapper } from '../../../common/style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Wrapper,RegisterSucc } from '../../login/style'
import { Button } from '../style'
import { withRouter } from "react-router-dom";
class Bought extends PureComponent{
render(){
    const { handleBack,handleBackHome } = this.props;
         return(
            <div style={{position:'fixed',height:'100%',width:'100%',top:0,backgroundColor:'white'}}>
                <ErrorWrapper>
                      <NavBarWrapper>
                          <i className='iconfont' onClick={()=>{handleBack()}}>&#xe646;</i>
                          <span>返回</span>
                      </NavBarWrapper>
                      <Wrapper>
                          <i className='iconfont' style={{display:'block'}}>&#xe657;</i>
                          <RegisterSucc>缴费成功</RegisterSucc>
                          <RegisterSucc>请按时到达指定地点上课</RegisterSucc>
                          <Button 
                          style={{backgroundColor:'#cc99ff',color:'white'}}
                          onClick={()=>{handleBackHome(this.props.history)}}
                          >
                              返回首页
                          </Button>
                      </Wrapper>
                  </ErrorWrapper>
              </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                handleBackHome(history){
                  dispatch(actionCreators.handleBackHome())
                  history.push('/home')
                },
                handleBack(){
                  dispatch(actionCreators.handleBack())
                },
            }
}

export default withRouter(connect(null,mapDispatchToProps)(Bought));