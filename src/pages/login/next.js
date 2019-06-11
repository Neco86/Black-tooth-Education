import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { RegisterWrapper,Button } from './style'
import { InputItem } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { actionCreators }   from './store'
import { connect } from 'react-redux'
class Next extends PureComponent{
render(){
    const { username,changeUserName,password,changePassword,dPassword,changeDPassword,phoneNumer,changePhoneNumber } =this.props;
         return(
            <div>
                <NavBar title='返回' to={'/register/'+this.props.match.params.type}/>
                <RegisterWrapper>
                    <InputItem value={username} onChange={(e)=>{changeUserName(e)}}>用户名:</InputItem>
                    <InputItem type='password' value={password} onChange={(e)=>{changePassword(e)}}>密码:</InputItem>
                    <InputItem type='password' value={dPassword} onChange={(e)=>{changeDPassword(e)}}>确认密码:</InputItem>
                    <InputItem placeholder='请输入手机号' value={phoneNumer} onChange={(e)=>{changePhoneNumber(e)}}>手机号:</InputItem>
                    <Link to={'/register/finish/'+this.props.match.params.type}>
                        <Button>完成注册</Button>
                    </Link>
                </RegisterWrapper>
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
    return {
            changeUserName(e){
               dispatch(actionCreators.changeUserName(e))
              },
            changePassword(e){
              dispatch(actionCreators.changePassword(e))
            },
            changeDPassword(e){
              dispatch(actionCreators.changeDPassword(e))
            },
            changePhoneNumber(e){
              dispatch(actionCreators.changePhoneNumber(e))
            }
        }
}
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        password:state.getIn(['login','password']),
        dPassword:state.getIn(['login','dPassword']),
        phoneNumer:state.getIn(['login','phoneNumer']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Next);