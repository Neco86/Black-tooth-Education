import React,{ PureComponent } from 'react'
import { Wrapper,RegisterSucc,Button } from '../pages/login/style'
import { ErrorWrapper }  from './style'
import { Wrapper as NavBarWrapper } from './style'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { connect } from 'react-redux'
class ShowError extends PureComponent{
render(){
        const { handleClick,history } = this.props;
        return(
            <ErrorWrapper>
                <NavBarWrapper>
                    <i className='iconfont' onClick={()=>{handleClick(history)}}>&#xe646;</i>
                    <span>返回</span>
                </NavBarWrapper>
                <Wrapper>
                    {this.props.match.params.type==='type1'?
                    <i className='iconfont'>&#xe602;</i>:
                    <i className='iconfont'>&#xe668;</i>}
                    <RegisterSucc>
                        {this.props.match.params.type==='type1'?
                        <>
                            <div>正在审核中</div>
                            <div>请耐心等候审核结果</div>
                        </>:<></>}
                        {this.props.match.params.type==='type2'?
                        <>
                            <div>审核未通过</div>
                            <div>请检查信息填写是否符合真实情况</div>
                            <div>稍后重试</div>
                        </>:<></>}
                        {this.props.match.params.type==='type3'?
                        <>
                            <div>用户名不存在</div>
                        </>:<></>}
                        {this.props.match.params.type==='type4'?
                        <>
                            <div>密码错误</div>
                        </>:<></>}
                    </RegisterSucc>
                    {this.props.match.params.type==='type2'?
                        <Link to='/register'>
                            <Button>返回注册界面</Button>
                        </Link>
                    :<></>}
                </Wrapper>
            </ErrorWrapper>
            )
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
            handleClick(history){
                dispatch(actionCreators.backLogin())
                history.push('/login')
            }
        }
}
export default connect(null,mapDispatchToProps)(ShowError);