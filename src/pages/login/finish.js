import React,{ PureComponent } from 'react'
import NavBar from '../../common/navbar'
import { Wrapper,RegisterSucc,Button } from './style'
import { Link } from 'react-router-dom'
class Next extends PureComponent{
render(){
        return this.props.match.params.type==='student'?(
         <>
           <NavBar title='返回' to='/'/>
           <Wrapper>
                <i className='iconfont'>&#xe657;</i>
                <RegisterSucc>
                    <div>注册成功</div>
                    <div>现在可以进行登录</div>
                </RegisterSucc>
                <Link to='/login'>
                    <Button>立即登录</Button>
                </Link>
            </Wrapper>
        </>
        ):(
         <>
           <NavBar title='返回' to='/'/>
           <Wrapper>
                <i className='iconfont'>&#xe657;</i>
                <RegisterSucc>
                    <div>申请成功</div>
                    <div>请耐心等待审核结果...</div>
                </RegisterSucc>
            </Wrapper>
        </>
        )
         
   
}
}
export default Next