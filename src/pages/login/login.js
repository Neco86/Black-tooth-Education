import React,{ PureComponent } from 'react'
import { Wrapper,Input,InputWrapper,Button } from './style.js'
import Logo from '../../statics/logo.png'
import { connect } from 'react-redux'
import { actionCreators }   from './store'
 import { Redirect } from 'react-router-dom'
class Login extends PureComponent{
render(){
        const { login,errorType,username,password,handleLogin,handleUserName,handelPassword } =this.props;
        return !login?(
            <Wrapper>
                <img src={Logo} alt=""/>
                <InputWrapper>
                    <Input type="text" placeholder='请输入用户名' value={username} onChange={(e)=>{handleUserName(e)}}/>
                    <Input type="password" placeholder='请输入密码' value={password} onChange={(e)=>{handelPassword(e)}}/>
                </InputWrapper>
                <Button className='login' onClick={()=>{handleLogin(username,password)}}>登录</Button>
                {errorType==="error1"?<Redirect to='/error/type1'/>:null}
                {errorType==="error2"?<Redirect to='/error/type2'/>:null}
                {errorType==="error3"?<Redirect to='/error/type3'/>:null}
                {errorType==="error4"?<Redirect to='/error/type4'/>:null}
            </Wrapper>
            ):<Redirect to='/home'/>
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
            handleLogin(username,password){
                dispatch(actionCreators.login(username,password))
            },
            handleUserName(e){
                dispatch(actionCreators.changeUserName(e.target.value))
            },
            handelPassword(e){
                dispatch(actionCreators.changePassword(e.target.value))
            }
        }
}
const mapStateToProps=(state)=>{
    return {
        login:state.getIn(['login','login']),
        username:state.getIn(['login','username']),
        password:state.getIn(['login','password']),
        errorType:state.getIn(['login','errorType'])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);